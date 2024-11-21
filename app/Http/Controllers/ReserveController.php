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

        $reserves = Reserve::with(['event', 'status', 'user'])->paginate(10);

        return Inertia::render('Reserves/Index', [
            'reserves' => $reserves,
        ]);
    }

    public function create()
    {
        return Inertia::render('Reserves/Create'); 
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->only(['user_Id', 'event_Id', 'status_Id']), [
            'user_Id' => 'required|integer',
            'event_Id' => 'required|integer',
            'status_Id' => 'required|exists:statuses,id',
        ]);
    
        if ($validator->fails()) {
            return Inertia::render('Reserves/Create', [
                'errors' => $validator->errors(),
            ]);
        }
    
        Reserve::create($request->only(['user_Id', 'event_Id', 'status_Id']));
    
        return redirect()->route('reserves.index')->with('success', 'Reserve created successfully.');
    }
    
    


    public function show($id)
    {
        $reserve = Reserve::where('id', $id)->first();
        return Inertia::render('Reserves/Show', [
            'reserve' => $reserve,
        ]);
    }
    

    public function edit(Reserve $reserve)
    {
        $reserve->date = Carbon::parse($reserve->date)->format('Y-m-d');

        return Inertia::render('Reserves/Edit', [
            'reserve' => new ReserveResource($reserve),
        ]);
    }

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

    public function destroy(Reserve $reserve)
    {
        $reserve->delete();
        return redirect()->route('reserves.index')->with('success', 'Reserve deleted successfully.');
    }
}
