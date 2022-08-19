<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    function addCategory(Request $req)
    {
        $category = new Category;
        $category->name = $req->input('name');
        $category->save();
        return $category;
    }
    function list()
    {
        return Category::all();
    }
    function delete($id)
    {
        $result = Category::where("category_id",$id)->delete();
        if($result)
        {
            return ["result"=> "Category has been deleted"];
        }
        else return ["result"=> "Operation failed"];
        //return $id;
    }
}
