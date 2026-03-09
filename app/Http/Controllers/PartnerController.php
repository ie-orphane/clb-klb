<?php

namespace App\Http\Controllers;

use App\Models\Partner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PartnerController extends Controller
{
    public function index()
    {
        $partners = Partner::orderBy('sort_order')->orderBy('id')->get();

        return Inertia::render('admin/partners/index', [
            'partners' => $partners,
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/partners/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'required|image|max:2048',
            'link' => 'nullable|string|max:500',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        $path = $request->file('logo')->store('images/partners', 'public');
        $validated['logo_path'] = $path;
        $validated['sort_order'] = (int) ($validated['sort_order'] ?? Partner::max('sort_order') + 1);
        unset($validated['logo']);

        Partner::create($validated);

        return redirect()->route('admin.partners.index')->with('success', 'Partner added successfully.');
    }

    public function edit(Partner $partner)
    {
        return Inertia::render('admin/partners/edit', [
            'partner' => $partner,
        ]);
    }

    public function update(Request $request, Partner $partner)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'nullable|image|max:2048',
            'link' => 'nullable|string|max:500',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        if ($request->hasFile('logo')) {
            $oldPath = $partner->logo_path_storage;
            if ($oldPath && Storage::disk('public')->exists($oldPath)) {
                Storage::disk('public')->delete($oldPath);
            }
            $path = $request->file('logo')->store('images/partners', 'public');
            $validated['logo_path'] = $path;
        }
        unset($validated['logo']);
        if (array_key_exists('sort_order', $validated)) {
            $validated['sort_order'] = (int) $validated['sort_order'];
        }

        $partner->update($validated);

        return redirect()->route('admin.partners.index')->with('success', 'Partner updated successfully.');
    }

    public function destroy(Partner $partner)
    {
        $path = $partner->logo_path_storage;
        if ($path && Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
        }
        $partner->delete();

        return redirect()->route('admin.partners.index')->with('success', 'Partner removed.');
    }
}
