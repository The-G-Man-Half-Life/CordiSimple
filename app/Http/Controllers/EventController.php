<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::all();
        return Inertia::render('Events/Index', [
            'events' => EventResource::collection($events),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Events/Create'); // Asegúrate de tener la vista "Create"
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'date' => 'required|date',
            'ubication' => 'required|string',
            'capacity' => 'required|integer',
            'status_id' => 'nullable|exists:statuses,id',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $event = Event::create($request->all());
        return redirect()->route('events.index')->with('success', 'Event created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        return Inertia::render('Events/Show', [
            'event' => new EventResource($event),
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */

    public function edit(Event $event)
    {
        $event->date = Carbon::parse($event->date)->format('Y-m-d');
    
        return Inertia::render('Events/Edit', [
            'event' => new EventResource($event),
        ]);
    }
    

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Event $event)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'date' => 'required|date',
            'ubication' => 'required|string',
            'capacity' => 'required|integer',
            'status_id' => 'nullable|exists:statuses,id',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $event->update($request->all());
        return redirect()->route('events.Index')->with('success', 'Event updated successfully.');    
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        $event->delete();
        return redirect()->route('events.index')->with('success', 'Event deleted successfully.');
    }
}
