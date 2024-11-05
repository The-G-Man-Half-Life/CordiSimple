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
            'created_at' => $this->created_at,
            'modified_at' => $this->modified_at,
            'event_id' => $this->event_id,
            'status_id' => $this->status_id,
            'user_id' => $this->user_id,
        ];
    }
}
