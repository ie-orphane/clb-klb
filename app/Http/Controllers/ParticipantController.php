<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Participant;
use Illuminate\Http\Request;

class ParticipantController extends Controller
{
    /**
     * Store a new participant registration (public).
     */
    public function store(Request $request, Event $event)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:255',
        ]);

        $validated['event_id'] = $event->id;

        Participant::create($validated);

        return back()->with('success', 'Registration successful.');
    }

    /**
     * Admin listing of all participants.
     */
    public function adminIndex(Request $request)
    {
        $eventId = $request->query('event_id');

        $query = Participant::with('event')->latest();

        if ($eventId) {
            $query->where('event_id', $eventId);
        }

        $participants = $query->get();
        $events = Event::all();

        return inertia('admin/participant/index', [
            'participants' => $participants,
            'events' => $events,
            'selectedEventId' => $eventId ? (int) $eventId : null,
        ]);
    }

    /**
     * Remove the specified participant.
     */
    public function destroy(Participant $participant)
    {
        $participant->delete();

        return back()->with('success', 'Participant deleted successfully.');
    }
}
