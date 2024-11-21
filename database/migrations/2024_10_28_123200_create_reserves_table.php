<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('reserves', function (Blueprint $table) {
            $table->id();
            // Usar timestamps de Laravel automáticamente (esto incluye created_at y updated_at)
            $table->timestamps();  // Esto crea las columnas created_at y updated_at automáticamente
    
            $table->unsignedBigInteger('user_Id')->nullable();
            $table->unsignedBigInteger('event_Id')->nullable();
            $table->unsignedBigInteger('status_Id')->nullable();
    
            $table->foreign('user_Id')->references('id')->on('users')->onDelete('set null')->onUpdate('cascade');
            $table->foreign('event_Id')->references('id')->on('events')->onDelete('set null')->onUpdate('cascade');
            $table->foreign('status_Id')->references('id')->on('statuses')->onDelete('set null')->onUpdate('cascade');
        });
    }
    
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reserves');
    }
};
