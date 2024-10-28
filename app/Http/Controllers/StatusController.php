<?php

namespace App\Http\Controllers;

use App\Http\Resources\StatusResource;
use App\Models\Status;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class StatusController extends Controller
{
    public function index()
{
    $statuses = Status::all(); 
    return Inertia::render('Statuses/Index', [
        'statuses' => StatusResource::collection($statuses), // Asegúrate de que esto devuelve un array.
    ]);
}



    public function create()
    {
        return Inertia::render('Statuses/Create');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $status = Status::create($request->all());

        return redirect()->route('statuses.index')->with('success', 'Status created successfully.');
    }

    public function show(Status $status)
    {
        return Inertia::render('Statuses/Show', [
            'status' => new StatusResource($status), // Usando el recurso
        ]);
    }

    public function edit(Status $status)
    {
        return Inertia::render('Statuses/Edit', [
            'status' => new StatusResource($status), // Usando el recurso
        ]);
    }

    public function update(Request $request, Status $status)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $status->update($request->all());

        return redirect()->route('statuses.index')->with('success', 'Status updated successfully.');
    }

    public function destroy(Status $status)
    {
        $status->delete();

        return redirect()->route('statuses.index')->with('success', 'Status deleted successfully.');
    }
}
