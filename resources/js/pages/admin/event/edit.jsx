import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LANGS = [
    { code: 'fr', label: 'French' },
    { code: 'ar', label: 'Arabic' },
    { code: 'nl', label: 'Dutch' },
];

function transValue(field) {
    if (field && typeof field === 'object') return { fr: field.fr || '', ar: field.ar || '', nl: field.nl || '' };
    return { fr: field || '', ar: '', nl: '' };
}

export default function AdminEventEdit({ event }) {
    const breadcrumbs = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Events', href: '/admin/events' },
        { title: 'Edit', href: `/admin/events/${event.id}/edit` },
    ];

    const { data, setData, put, processing, errors } = useForm({
        title: transValue(event.title),
        description: transValue(event.description),
        date: event.date || '',
        time: event.time || '',
        categorie: transValue(event.categorie),
        price: event.price || 0,
        image: event.image || '',
        location: event.location || '',
    });

    const setTransField = (field, lang, value) => {
        setData(field, { ...data[field], [lang]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/admin/events/${event.id}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit: ${data.title.fr}`} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Edit Event</h1>
                </div>

                <form onSubmit={handleSubmit} className="mx-auto w-full max-w-3xl space-y-6 rounded-lg border p-6">
                    {/* Title - multilanguage */}
                    <fieldset className="space-y-3 rounded-md border p-4">
                        <legend className="px-2 text-sm font-semibold">Title</legend>
                        <div className="grid gap-3 md:grid-cols-3">
                            {LANGS.map((lang) => (
                                <div key={lang.code} className="space-y-1">
                                    <Label htmlFor={`title_${lang.code}`}>{lang.label}</Label>
                                    <Input
                                        id={`title_${lang.code}`}
                                        value={data.title[lang.code]}
                                        onChange={(e) => setTransField('title', lang.code, e.target.value)}
                                    />
                                    {errors[`title.${lang.code}`] && <p className="text-sm text-destructive">{errors[`title.${lang.code}`]}</p>}
                                </div>
                            ))}
                        </div>
                    </fieldset>

                    {/* Category - multilanguage */}
                    <fieldset className="space-y-3 rounded-md border p-4">
                        <legend className="px-2 text-sm font-semibold">Category</legend>
                        <div className="grid gap-3 md:grid-cols-3">
                            {LANGS.map((lang) => (
                                <div key={lang.code} className="space-y-1">
                                    <Label htmlFor={`categorie_${lang.code}`}>{lang.label}</Label>
                                    <Input
                                        id={`categorie_${lang.code}`}
                                        value={data.categorie[lang.code]}
                                        onChange={(e) => setTransField('categorie', lang.code, e.target.value)}
                                    />
                                    {errors[`categorie.${lang.code}`] && <p className="text-sm text-destructive">{errors[`categorie.${lang.code}`]}</p>}
                                </div>
                            ))}
                        </div>
                    </fieldset>

                    {/* Description - multilanguage */}
                    <fieldset className="space-y-3 rounded-md border p-4">
                        <legend className="px-2 text-sm font-semibold">Description</legend>
                        {LANGS.map((lang) => (
                            <div key={lang.code} className="space-y-1">
                                <Label htmlFor={`description_${lang.code}`}>{lang.label}</Label>
                                <textarea
                                    id={`description_${lang.code}`}
                                    rows={3}
                                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                                    value={data.description[lang.code]}
                                    onChange={(e) => setTransField('description', lang.code, e.target.value)}
                                />
                                {errors[`description.${lang.code}`] && <p className="text-sm text-destructive">{errors[`description.${lang.code}`]}</p>}
                            </div>
                        ))}
                    </fieldset>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="date">Date</Label>
                            <Input
                                id="date"
                                type="date"
                                value={data.date}
                                onChange={(e) => setData('date', e.target.value)}
                            />
                            {errors.date && <p className="text-sm text-destructive">{errors.date}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="time">Time</Label>
                            <Input
                                id="time"
                                type="time"
                                value={data.time}
                                onChange={(e) => setData('time', e.target.value)}
                            />
                            {errors.time && <p className="text-sm text-destructive">{errors.time}</p>}
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input
                                id="location"
                                value={data.location}
                                onChange={(e) => setData('location', e.target.value)}
                            />
                            {errors.location && <p className="text-sm text-destructive">{errors.location}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="price">Price (DH)</Label>
                            <Input
                                id="price"
                                type="number"
                                min="0"
                                value={data.price}
                                onChange={(e) => setData('price', parseInt(e.target.value) || 0)}
                            />
                            {errors.price && <p className="text-sm text-destructive">{errors.price}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="image">Image URL</Label>
                            <Input
                                id="image"
                                value={data.image}
                                onChange={(e) => setData('image', e.target.value)}
                                placeholder="https://example.com/image.jpg"
                            />
                            {errors.image && <p className="text-sm text-destructive">{errors.image}</p>}
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3">
                        <Button variant="outline" type="button" asChild>
                            <Link href="/admin/events">Cancel</Link>
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
