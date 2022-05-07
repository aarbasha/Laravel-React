<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{

    public function index()
    {
        $user = User::latest()->get();
        return response()->json($user);

    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>bcrypt($request->password) ,
        ]);
        return response()->json('successfuly Add Users');
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        return response()->json(User::whereId($id)->first());
    }

    public function update(Request $request, $id)
    {
        $user = User::whereId($id)->first();

        $user->update([
            'name'=>$request->name,
            'email'=>$request->email
        ]);
        return response()->json('updated successfyle .....');
    }

    public function destroy($id)
    {
        User::whereId($id)->first()->delete();
        return response()->json('Delete Successfyle .....');
    }
}
