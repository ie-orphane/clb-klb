import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const breadcrumbs = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Partners', href: '/admin/partners' },
    { title: 'Add partner', href: '/admin/partners/create' },
];

export default function AdminPartnersCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        logo: null,
        link: '',
        sort_order: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/admin/partners', { forceFormData: true });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add partner" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 lg:p-6">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="shrink-0 rounded-lg" asChild>
                        <Link href="/admin/partners"><ArrowLeft className="h-4 w-4" /></Link>
                    </Button>
                    <div>
                        <h1 className="text-2xl font-bold italic text-foreground lg:text-3xl">Add partner</h1>
                        <p className="mt-1 text-sm text-muted-foreground">Upload the partner’s logo and add a link if needed.</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="name">Partner name *</Label>
                                <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} placeholder="e.g. Company Name" className="rounded-lg" />
                                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="logo">Logo *</Label>
                                <Input
                                    id="logo"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setData('logo', e.target.files?.[0] ?? null)}
                                    className="rounded-lg border-dashed file:mr-3 file:rounded-lg file:border-0 file:bg-muted file:px-4 file:py-2 file:text-sm file:font-medium"
                                />
                                {errors.logo && <p className="text-xs text-destructive">{errors.logo}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="link">Website link (optional)</Label>
                                <Input id="link" type="url" value={data.link} onChange={(e) => setData('link', e.target.value)} placeholder="https://..." className="rounded-lg" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="sort_order">Display order (optional)</Label>
                                <Input id="sort_order" type="number" min={0} value={data.sort_order} onChange={(e) => setData('sort_order', e.target.value)} placeholder="0" className="rounded-lg" />
                            </div>
                        </CardContent>
                    </Card>
                    <div className="flex flex-wrap gap-3">
                        <Button type="submit" disabled={processing} className="rounded-lg bg-alpha text-white hover:bg-alpha/90">
                            {processing ? 'Adding…' : 'Add partner'}
                        </Button>
                        <Button type="button" variant="outline" className="rounded-lg" asChild>
                            <Link href="/admin/partners">Cancel</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
