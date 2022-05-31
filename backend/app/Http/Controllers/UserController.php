<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    public function index()
    {
        return "hello";
    }
    public function register(Request $request)
    {
        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();
        return $user;

    }
     public function login(Request $request){
         $user = User::where('email',$request->email)->first();
         if(!$user || !Hash::check($request->password, $user->password))
         {
                return "Email or Password is not matched";
         }
         return $user;
     }
}
