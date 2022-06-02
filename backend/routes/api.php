<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register',[UserController::class,'register'])->name('user.register');

Route::post('/login',[UserController::class,'login'])->name('user.login');

Route::post('/addproduct',[ProductController::class,'addProduct'])->name('user.addproduct');
Route::get('/productlist',[ProductController::class,'list'])->name('user.productlist');
Route::delete('/productdelete/{id}',[ProductController::class,'delete'])->name('user.productdelete');
