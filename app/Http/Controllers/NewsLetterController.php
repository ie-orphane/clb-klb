<?php

namespace App\Http\Controllers;

use App\Mail\NewsletterMail;
use App\Models\NewsLetter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class NewsLetterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('admin/newsLetters/index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'data' => 'required|string',
        ]);
        NewsLetter::create([
            'email' => $request->data
        ]);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    public function sendNewsletter(Request $request)
    {
        $request->validate([
            'subject' => 'required|string'
        ]);
        $subscribers = NewsLetter::pluck('email');

        foreach ($subscribers as $email) {
            Mail::to($email)->send(new NewsletterMail($request->content));
        }
        return back()->with('success', 'Newsletter sent!');
    }
}
