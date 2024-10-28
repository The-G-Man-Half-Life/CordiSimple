<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    public function index() //get all
    {
    }

    public function create() // create
    {
    }

    public function store(Request $request) //metodo create con validaciones
    {
    }

    public function show(Status $status) // get by id
    {
    }

    public function edit(Status $status) // edit con validaciones
    {
    }
    public function update(Request $request, Status $status) // edit pero sin validaciones
    {
    }

    public function destroy(Status $status) // metodo delete
    {
    }
}
