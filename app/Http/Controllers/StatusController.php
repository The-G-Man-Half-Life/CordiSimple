<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StatusController extends Controller
{
    public function index()
    {
        $statuses = Status::all();
        return Inertia::render('StatusesIndex', [
            'statuses' => $statuses,
        ]);
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
    }

    public function show(Status $status)
    {
    }

    public function edit(Status $status)
    {
    }
    public function update(Request $request, Status $status)
    {
    }

    public function destroy(Status $status)
    {
    }
}
