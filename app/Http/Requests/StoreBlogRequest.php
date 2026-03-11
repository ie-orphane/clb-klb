<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBlogRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'image' => ['nullable', 'image', 'max:2048'],
            'title.ar' => ['required', 'string', 'max:255'],
            'title.fr' => ['required', 'string', 'max:255'],
            'title.nl' => ['required', 'string', 'max:255'],
            'category.ar' => ['required', 'string', 'max:255'],
            'category.fr' => ['required', 'string', 'max:255'],
            'category.nl' => ['required', 'string', 'max:255'],
            'body.ar' => ['required', 'string'],
            'body.fr' => ['required', 'string'],
            'body.nl' => ['required', 'string'],
            'author' => ['nullable', 'string', 'max:255'],
            'is_published' => ['nullable', 'boolean'],
        ];
    }
}
