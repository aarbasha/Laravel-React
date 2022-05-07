<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\UserController;;


// Route::post('login', [AuthController::class, "login"]);

Route::get('users', [UserController::class, "index"]);
Route::post('users', [UserController::class, "store"]);
Route::get('users/{id}/edit', [UserController::class, "edit"]);
Route::post('users/{id}', [UserController::class, "update"]);
Route::delete('users/{id}', [UserController::class, "destroy"]);






