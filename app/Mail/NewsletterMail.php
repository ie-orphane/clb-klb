<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;

class NewsletterMail extends Mailable
{
    public $content;

    public function __construct($content)
    {
        $this->content = $content;
    }

    public function build()
    {
        return $this->subject('Our Latest Newsletter')
            ->view('emails.newsletter');
    }
}
