<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReserveResource;
use App\Models\Reserve;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class ReserveController extends Controller
{
    public function index()
    {
        $reserves = Reserve::all();  
        return Inertia::render('Reserve/Index', [
            'reserves' => ReserveResource::collection($reserves), 
        ]);
    }




    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Reserves/Create'); }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'createdAt' => 'required|date',
            'modifiedAt' => 'required|date',
            'user_Id' => 'required|integer',
            'event_Id' => 'required|integer',
            'status_id' => 'nullable|exists:statuses,id',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $event = Reserve::create($request->all());
        return redirect()->route('reserves.index')->with('success', 'Reserve created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Reserve $reserve)
    {
        return Inertia::render('Reserves/Show', [
            'reserve' => new ReserveResource($reserve),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reserve $reserve)
    {
        $reserve->date = Carbon::parse($reserve->date)->format('Y-m-d');

        return Inertia::render('reserves/Edit', [
            'reserve' => new ReserveResource($reserve),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reserve $reserve)
    {
        $validator = Validator::make($request->all(), [
            'createdAt' => 'required|date',
            'modifiedAt' => 'required|date',
            'user_Id' => 'required|integer',
            'event_Id' => 'required|integer',
            'status_id' => 'nullable|exists:statuses,id',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $reserve->update($request->all());
        return redirect()->route('reserves.Index')->with('success', 'Reserve updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reserve $reserve)
    {
        $reserve->delete();
        return redirect()->route('reserves.index')->with('success', 'Reserve deleted successfully.');
    }
}
