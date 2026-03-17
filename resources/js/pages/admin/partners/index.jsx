import { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Edit, Handshake, Plus, Trash2 } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Table, TableImage } from '@/components/Table';
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
                        <h1 className="text-2xl font-bold text-foreground capitalize italic lg:text-3xl">
                            {partners.length}{' '}
                            {partners.length <= 1 ? 'partner' : 'partners'}
                        </h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Manage the partner logos shown in the “Nos
                            Partenaires” section.
                        </p>
                    </div>
                    <Button
                        asChild
                        className="shrink-0 rounded-lg bg-alpha text-white shadow-md hover:bg-alpha/90"
                    >
                        <Link href="/admin/partners/create">
                            <Plus className="mr-2 h-4 w-4" />
                            New partner
                        </Link>
                    </Button>
                </div>

                <Table
                    data={partners}
                    rowClassName="hover:bg-muted/20"
                    columns={[
                        {
                            header: 'Logo',
                            render: (partner) => (
                                <TableImage
                                    src={partner.logo_url ?? partner.logo_path}
                                    alt="Partner Logo"
                                    width="6rem"
                                    aspectRatio="1/1"
                                />
                            ),
                        },
                        {
                            header: 'Name',
                            headerClassName: 'px-4 py-4 sm:px-6',
                            cellClassName:
                                'px-4 py-3 font-medium text-foreground sm:px-6',
                            render: (p) => p.name,
                        },
                        {
                            header: 'Link',
                            headerClassName:
                                'hidden px-4 py-4 sm:px-6 md:table-cell',
                            cellClassName:
                                'hidden max-w-[200px] truncate px-4 py-3 text-muted-foreground sm:px-6 md:table-cell',
                            render: (p) =>
                                p.link ? (
                                    <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {p.link}
                                    </a>
                                ) : (
                                    '—'
                                ),
                        },
                        {
                            header: 'Order',
                            headerClassName:
                                'hidden px-4 py-4 sm:px-6 md:table-cell',
                            cellClassName:
                                'hidden px-4 py-3 text-muted-foreground sm:px-6 md:table-cell',
                            render: (p) => p.sort_order,
                        },
                        {
                            header: 'Actions',
                            headerClassName: 'px-4 py-4 text-right sm:px-6',
                            cellClassName: 'px-4 py-3 sm:px-6',
                            render: (p) => (
                                <div className="flex items-center justify-end gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="rounded-lg"
                                        asChild
                                    >
                                        <Link
                                            href={`/admin/partners/${p.id}/edit`}
                                        >
                                            <Edit className="mr-1.5 h-3.5 w-3.5" />
                                            Edit
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        className="rounded-lg"
                                        onClick={() => setDeleteId(p.id)}
                                    >
                                        <Trash2 className="mr-1.5 h-3.5 w-3.5" />
                                        Delete
                                    </Button>
                                </div>
                            ),
                        },
                    ]}
                    emptyState={
                        <>
                            <Handshake className="mx-auto mb-3 size-10 text-muted-foreground" />
                            <p className="font-medium text-foreground">
                                No partners yet
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Add your first partner to display their logo on
                                the website.
                            </p>
                        </>
                    }
                />
            </div>

            <ConfirmDeleteDialog
                open={deleteId !== null}
                onOpenChange={(val) => {
                    if (!val) setDeleteId(null);
                }}
                onConfirm={handleDelete}
                processing={deleting}
                title="Delete partner"
                description="This partner will be removed from the website. This action cannot be undone."
            />
            <AlertSuccess message={flash?.success} />
        </AppLayout>
    );
}
