<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReserveResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'createdAt' => $this->createdAt,
            'modifiedAt' => $this->modifiedAt,
            'event_Id' => $this->event_Id,
            'status_Id' => $this->status_Id,
            'user_Id' => $this->user_Id,
        ];
    }
}
