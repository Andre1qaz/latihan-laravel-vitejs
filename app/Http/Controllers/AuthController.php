<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{
    // GET /auth/login
    public function login()
    {
        // kalau sudah login, lempar ke home
        if (Auth::check()) {
            return redirect()->route('home');
        }

        // render React: resources/js/pages/auth/LoginPage.jsx
        return Inertia::render('auth/LoginPage');
    }

    // POST /auth/login
    public function postLogin(Request $request)
    {
        $credentials = $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->route('home');
        }

        return back()->withErrors([
            'email' => 'Email atau password salah.',
        ])->onlyInput('email');
    }

    // GET /auth/register
    public function register()
    {
        // kalau sudah login, gak usah register lagi
        if (Auth::check()) {
            return redirect()->route('home');
        }

        // render React: resources/js/pages/auth/RegisterPage.jsx
        return Inertia::render('auth/RegisterPage');
    }

    // POST /auth/register
    public function postRegister(Request $request)
    {
        // validasi input
        $data = $request->validate([
            'name'                  => ['required', 'string', 'max:255'],
            'email'                 => ['required', 'email', 'max:255', 'unique:users,email'],
            'password'              => ['required', 'min:6', 'confirmed'],
        ]);

        // simpan user baru
        $user = User::create([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        // langsung loginin
        Auth::login($user);
        $request->session()->regenerate();

        return redirect()->route('home');
    }

    // GET /auth/logout
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('auth.login');
    }
}
