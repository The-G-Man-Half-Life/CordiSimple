<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->dateTime('date');
            $table->string('ubication');
            $table->integer('capacity');
            $table->unsignedBigInteger('status_id')->nullable();
            // $table->unsignedBigInteger('user_id')->nullable();
            $table->timestamps();

            $table->foreign('status_id')
                ->references('id')
                ->on('statuses')
                ->onDelete('set null')
                ->onUpdate('cascade');

            // $table->foreign('user_id')
            //     ->references('id')
            //     ->on('users')
            //     ->onDelete('set null')
            //     ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
