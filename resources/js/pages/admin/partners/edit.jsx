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
    { title: 'Edit', href: '#' },
];

export default function AdminPartnersEdit({ partner }) {
    const { data, setData, post, processing, errors } = useForm({
        name: partner.name,
        logo: null,
        link: partner.link || '',
        sort_order: String(partner.sort_order ?? ''),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/admin/partners/${partner.id}`, { forceFormData: true, _method: 'put' });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit ${partner.name}`} />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 lg:p-6">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="shrink-0 rounded-lg" asChild>
                        <Link href="/admin/partners"><ArrowLeft className="h-4 w-4" /></Link>
                    </Button>
                    <div>
                        <h1 className="text-2xl font-bold italic text-foreground lg:text-3xl">Edit partner</h1>
                        <p className="mt-1 text-sm text-muted-foreground">Update logo and details.</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/50 p-1">
                                    <img src={partner.logo_url ?? partner.logo_path} alt="" className="max-h-full max-w-full object-contain" />
                                </div>
                                <p className="text-sm text-muted-foreground">Current logo. Upload a new file to replace.</p>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="name">Partner name *</Label>
                                <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} className="rounded-lg" />
                                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="logo">New logo (optional)</Label>
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
                                <Input id="link" type="url" value={data.link} onChange={(e) => setData('link', e.target.value)} className="rounded-lg" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="sort_order">Display order</Label>
                                <Input id="sort_order" type="number" min={0} value={data.sort_order} onChange={(e) => setData('sort_order', e.target.value)} className="rounded-lg" />
                            </div>
                        </CardContent>
                    </Card>
                    <div className="flex flex-wrap gap-3">
                        <Button type="submit" disabled={processing} className="rounded-lg bg-alpha text-white hover:bg-alpha/90">
                            {processing ? 'Saving…' : 'Save changes'}
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
