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
            return response()->json(['errors' => $validator->errors()], 422);
        }

        Reserve::create($request->only(['user_Id', 'event_Id', 'status_Id', 'createdAt', 'modifiedAt']));

        return response()->json(['message' => 'Reserve created successfully'], 201);
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
            'status_Id' => 'required|exists:statuses,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $reserve->update($request->all());
        return redirect()->route('reserves.index')->with('success', 'Reserve updated successfully.');
    }

    public function destroy($id)
    {
        $reserve = Reserve::findOrFail($id);
        $reserve->delete();

        return response()->json(['message' => 'Reserve deleted successfully'], 200);
    }


}
