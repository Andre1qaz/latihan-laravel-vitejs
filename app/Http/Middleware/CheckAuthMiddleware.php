<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckAuthMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
      // biarkan route auth/*
      if ($request->is('auth/*')) {
          return $next($request);
      }

      if (Auth::check()) {
          return $next($request);
      }

      return redirect()->route('auth.login');
    }
}
