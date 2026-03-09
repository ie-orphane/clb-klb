import { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Edit, Handshake, Plus, Trash2 } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import AlertSuccess from '@/components/alert-success';

const breadcrumbs = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Partners', href: '/admin/partners' },
];

export default function AdminPartnersIndex({ partners }) {
    const { flash } = usePage().props;
    const [deleteId, setDeleteId] = useState(null);
    const [deleting, setDeleting] = useState(false);

    const handleDelete = () => {
        setDeleting(true);
        router.delete(`/admin/partners/${deleteId}`, {
            onFinish: () => {
                setDeleting(false);
                setDeleteId(null);
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Partners" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 lg:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold italic text-foreground lg:text-3xl">Partners</h1>
                        <p className="mt-1 text-sm text-muted-foreground">Manage the partner logos shown in the “Nos Partenaires” section.</p>
                    </div>
                    <Button asChild className="shrink-0 rounded-lg bg-alpha text-white shadow-md hover:bg-alpha/90">
                        <Link href="/admin/partners/create">
                            <Plus className="mr-2 h-4 w-4" />
                            Add partner
                        </Link>
                    </Button>
                </div>

                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                    <div className="border-b border-border bg-muted/30 px-4 py-3 sm:px-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {partners.length} {partners.length === 1 ? 'partner' : 'partners'}
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        {partners.length === 0 ? (
                            <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                                <Handshake className="mx-auto mb-3 h-12 w-12 text-muted-foreground/60" />
                                <p className="font-medium text-foreground">No partners yet</p>
                                <p className="mt-1 text-sm text-muted-foreground">Add your first partner to display their logo on the website.</p>
                                <Button asChild className="mt-4 rounded-lg bg-alpha text-white hover:bg-alpha/90">
                                    <Link href="/admin/partners/create">
                                        <Plus className="mr-2 h-4 w-4" />
                                        Add partner
                                    </Link>
                                </Button>
                            </div>
                        ) : (
                            <table className="w-full text-left text-sm">
                                <thead className="border-b border-border bg-muted/20 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    <tr>
                                        <th className="px-4 py-4 sm:px-6">Logo</th>
                                        <th className="px-4 py-4 sm:px-6">Name</th>
                                        <th className="hidden px-4 py-4 sm:px-6 md:table-cell">Link</th>
                                        <th className="hidden px-4 py-4 sm:px-6 md:table-cell">Order</th>
                                        <th className="px-4 py-4 text-right sm:px-6">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {partners.map((partner) => (
                                        <tr key={partner.id} className="transition-colors hover:bg-muted/20">
                                            <td className="px-4 py-3 sm:px-6">
                                                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/50 p-1">
                                                    <img src={partner.logo_url ?? partner.logo_path} alt="" className="max-h-full max-w-full object-contain" />
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 font-medium text-foreground sm:px-6">{partner.name}</td>
                                            <td className="hidden max-w-[200px] truncate px-4 py-3 text-muted-foreground md:table-cell sm:px-6">
                                                {partner.link ? (
                                                    <a href={partner.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{partner.link}</a>
                                                ) : '—'}
                                            </td>
                                            <td className="hidden px-4 py-3 text-muted-foreground md:table-cell sm:px-6">{partner.sort_order}</td>
                                            <td className="px-4 py-3 sm:px-6">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Button variant="outline" size="sm" className="rounded-lg" asChild>
                                                        <Link href={`/admin/partners/${partner.id}/edit`}>
                                                            <Edit className="mr-1.5 h-3.5 w-3.5" />
                                                            Edit
                                                        </Link>
                                                    </Button>
                                                    <Button variant="destructive" size="sm" className="rounded-lg" onClick={() => setDeleteId(partner.id)}>
                                                        <Trash2 className="mr-1.5 h-3.5 w-3.5" />
                                                        Delete
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>

            <ConfirmDeleteDialog
                open={deleteId !== null}
                onOpenChange={(val) => { if (!val) setDeleteId(null); }}
                onConfirm={handleDelete}
                processing={deleting}
                title="Delete partner"
                description="This partner will be removed from the website. This action cannot be undone."
            />
            <AlertSuccess message={flash?.success} />
        </AppLayout>
    );
}
