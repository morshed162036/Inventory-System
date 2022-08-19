<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register',[UserController::class,'register'])->name('user.register');

Route::post('/login',[UserController::class,'login'])->name('user.login');

Route::post('/addcategory',[CategoryController::class,'addCategory'])->name('user.addcategory');
Route::get('/categorylist',[CategoryController::class,'list'])->name('user.categorylist');
Route::delete('/categorydelete/{id}',[CategoryController::class,'delete'])->name('user.categorydelete');
Route::get('/category/{id}',[CategoryController::class,'find'])->name('user.category');

Route::post('/addproduct',[ProductController::class,'addProduct'])->name('user.addproduct');
Route::get('/productlist',[ProductController::class,'list'])->name('user.productlist');
Route::delete('/productdelete/{id}',[ProductController::class,'delete'])->name('user.productdelete');
Route::get('/product/{id}',[ProductController::class,'find'])->name('user.product');
Route::post('/productupdate/{id}',[ProductController::class,'update'])->name('user.productupdate');
