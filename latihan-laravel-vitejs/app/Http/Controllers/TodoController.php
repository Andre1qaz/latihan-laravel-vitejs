<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TodoController extends Controller
{
    public function index(Request $request)
    {
        $query = Todo::where('user_id', Auth::id());

        if ($request->filled('q')) {
            $q = $request->q;
            $query->where(function ($sub) use ($q) {
                $sub->where('title', 'like', "%{$q}%")
                    ->orWhere('description', 'like', "%{$q}%");
            });
        }

        if ($request->filled('status')) {
            if ($request->status === 'finished') {
                $query->where('is_finished', true);
            } elseif ($request->status === 'unfinished') {
                $query->where('is_finished', false);
            }
        }

        $todos = $query->orderBy('created_at', 'desc')->paginate(20)->withQueryString();

        return Inertia::render('app/todos/Index', [
            'todos' => $todos,
            'filters' => $request->only(['q', 'status']),
        ]);
    }

    public function create()
    {
        return Inertia::render('app/todos/Form', [
            'todo' => null,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'is_finished' => 'sometimes|boolean',
            'cover' => 'nullable|image|max:2048',
        ]);

        $data = $validated;
        $data['user_id'] = Auth::id();

        if ($request->hasFile('cover')) {
            $path = $request->file('cover')->store('todos', 'public');
            $data['cover'] = $path;
        }

        Todo::create($data);

        return redirect()->route('todos.index')->with('success', 'Todo berhasil dibuat.');
    }

    public function update(Request $request, Todo $todo)
    {
        if ($todo->user_id !== Auth::id()) {
            abort(403);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'is_finished' => 'sometimes|boolean',
            'cover' => 'nullable|image|max:2048',
        ]);

        $data = $validated;

        if ($request->hasFile('cover')) {
            // delete old cover if exists
            if ($todo->cover) {
                Storage::disk('public')->delete($todo->cover);
            }
            $path = $request->file('cover')->store('todos', 'public');
            $data['cover'] = $path;
        }

        $todo->update($data);

        return redirect()->route('todos.index')->with('success', 'Todo berhasil diperbarui.');
    }

    public function edit(Todo $todo)
    {
        if ($todo->user_id !== Auth::id()) {
            abort(403);
        }

        return Inertia::render('app/todos/Form', [
            'todo' => $todo->toArray(),
        ]);
    }

    public function destroy(Todo $todo)
    {
        if ($todo->user_id !== Auth::id()) {
            abort(403);
        }

        if ($todo->cover) {
            Storage::disk('public')->delete($todo->cover);
        }

        $todo->delete();

        return redirect()->route('todos.index')->with('success', 'Todo berhasil dihapus.');
    }

    public function stats()
    {
        $userId = Auth::id();

        $total = Todo::where('user_id', $userId)->count();
        $finished = Todo::where('user_id', $userId)->where('is_finished', true)->count();
        $unfinished = Todo::where('user_id', $userId)->where('is_finished', false)->count();

        // last 7 days counts
        $start = Carbon::now()->subDays(6)->startOfDay();
        $rows = DB::table('todos')
            ->select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->where('user_id', $userId)
            ->where('created_at', '>=', $start)
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        $labels = [];
        $series = [];
        for ($i = 0; $i < 7; $i++) {
            $d = $start->copy()->addDays($i)->toDateString();
            $labels[] = $d;
            $found = $rows->firstWhere('date', $d);
            $series[] = $found ? $found->count : 0;
        }

        return response()->json([
            'total' => $total,
            'finished' => $finished,
            'unfinished' => $unfinished,
            'chart' => [
                'labels' => $labels,
                'series' => $series,
            ],
        ]);
    }
}
