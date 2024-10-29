<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Event;

class EventSeeder extends Seeder
{
    public function run()
    {
        $events = [
            [
                'name' => 'Concierto de Rock',
                'description' => 'Un gran concierto de rock con bandas locales.',
                'date' => '2024-11-15 20:00:00',
                'ubication' => 'Estadio Municipal',
                'capacity' => 5000,
                'status_id' => 1,
            ],
            [
                'name' => 'Feria de Comida',
                'description' => 'Feria de comida con diferentes tipos de cocina.',
                'date' => '2024-11-20 12:00:00',
                'ubication' => 'Parque Central',
                'capacity' => 3000,
                'status_id' => 2,
            ],
            [
                'name' => 'Maratón Anual',
                'description' => 'Maratón anual de 10 km.',
                'date' => '2024-12-01 08:00:00',
                'ubication' => 'Avenida Principal',
                'capacity' => 1000,
                'status_id' => 3,
            ],
            [
                'name' => 'Exposición de Arte',
                'description' => 'Exposición de arte contemporáneo.',
                'date' => '2024-12-05 18:00:00',
                'ubication' => 'Centro de Arte',
                'capacity' => 200,
                'status_id' => 4,
            ],
            [
                'name' => 'Torneo de Fútbol',
                'description' => 'Torneo de fútbol entre equipos locales.',
                'date' => '2024-12-10 10:00:00',
                'ubication' => 'Campo de Fútbol',
                'capacity' => 1500,
                'status_id' => 5,
            ],
            [
                'name' => 'Conferencia de Tecnología',
                'description' => 'Conferencia sobre las últimas tendencias en tecnología.',
                'date' => '2024-12-15 09:00:00',
                'ubication' => 'Auditorio Principal',
                'capacity' => 400,
                'status_id' => 6,
            ],
            [
                'name' => 'Cine al Aire Libre',
                'description' => 'Proyección de películas al aire libre.',
                'date' => '2024-12-20 19:00:00',
                'ubication' => 'Plaza Mayor',
                'capacity' => 800,
                'status_id' => 1,
            ],
            [
                'name' => 'Día de la Familia',
                'description' => 'Actividades para toda la familia.',
                'date' => '2024-12-25 10:00:00',
                'ubication' => 'Parque Familiar',
                'capacity' => 2500,
                'status_id' => 2,
            ],
            [
                'name' => 'Festival de Música',
                'description' => 'Festival con varias bandas en vivo.',
                'date' => '2024-12-30 18:00:00',
                'ubication' => 'Plaza de Eventos',
                'capacity' => 10000,
                'status_id' => 3,
            ],
            [
                'name' => 'Taller de Cocina',
                'description' => 'Taller para aprender a cocinar platos típicos.',
                'date' => '2025-01-05 14:00:00',
                'ubication' => 'Centro Culinario',
                'capacity' => 50,
                'status_id' => 6,
            ],
        ];

        foreach ($events as $event) {
            Event::create($event);
        }
    }
}
