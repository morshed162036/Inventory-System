<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    function addProduct(Request $req)
    {
        $product = new Product;
        $product->name = $req->input('name');
        $product->description = $req->input('desc');
        $product->price = $req->input('price');
        $product->file_path = $req->file('file')->store('products');
        $product->quantity = $req->input('quantity');
        $product->category = $req->input('category');
        $product->save();
        return $product;
    }
    function list()
    {
        return Product::all();
    }
    function delete($id)
    {
        $result = Product::where("product_id",$id)->delete();
        if($result)
        {
            return ["result"=> "product has been deleted"];
        }
        else return ["result"=> "Operation failed"];
        //return $id;
    }
    function find($id)
    {
        return Product::find($id);
    }
    function update(Request $req,$id)
    {
        $product = Product::find($id);
        $product->name = $req->input('name');
        $product->description = $req->input('desc');
        $product->price = $req->input('price');
        $product->file_path = $req->file('file')->store('products');
        $product->quantity = $req->input('quantity');
        $product->category = $req->input('category');
        $product->save();
        return $product;
    }
}
