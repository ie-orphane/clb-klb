<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\ParticipantController;
use Illuminate\Support\Facades\Route;

// Public event routes
Route::group(['prefix' => 'events'], function () {
    Route::get('/', [EventController::class, 'index'])->name('events.index');
    Route::get('/{event}', [EventController::class, 'show'])->name('events.show');
    Route::post('/{event}/register', [ParticipantController::class, 'store'])->name('events.register');
});

// Admin event routes
Route::group(['prefix' => 'admin/events', 'middleware' => 'auth'], function () {
    Route::get('/', [EventController::class, 'adminIndex'])->name('admin.events.index');
    Route::get('/create', [EventController::class, 'create'])->name('admin.events.create');
    Route::post('/', [EventController::class, 'store'])->name('admin.events.store');
    Route::get('/{event}/edit', [EventController::class, 'edit'])->name('admin.events.edit');
    Route::put('/{event}', [EventController::class, 'update'])->name('admin.events.update');
    Route::delete('/{event}', [EventController::class, 'destroy'])->name('admin.events.destroy');
});

// Admin participant routes
Route::group(['prefix' => 'admin/participants', 'middleware' => 'auth'], function () {
    Route::get('/', [ParticipantController::class, 'adminIndex'])->name('admin.participants.index');
    Route::delete('/{participant}', [ParticipantController::class, 'destroy'])->name('admin.participants.destroy');
});
