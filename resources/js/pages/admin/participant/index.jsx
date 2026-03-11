import { useState } from 'react';
import { Head, router, usePage } from '@inertiajs/react';
import { Mail, Phone, Trash2, Users } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Table } from '@/components/Table';
import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import AlertSuccess from '@/components/alert-success';
import TransText from '@/components/TransText';

const breadcrumbs = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Participants', href: '/admin/participants' },
];

export default function AdminParticipantIndex({
    participants,
    events,
    selectedEventId,
}) {
    const { flash } = usePage().props;
    const [deleteId, setDeleteId] = useState(null);
    const [deleting, setDeleting] = useState(false);

    const handleDelete = () => {
        setDeleting(true);
        router.delete(`/admin/participants/${deleteId}`, {
            onFinish: () => {
                setDeleting(false);
                setDeleteId(null);
            },
        });
    };

    const handleFilterChange = (e) => {
        const eventId = e.target.value;
        if (eventId) {
            router.get(
                '/admin/participants',
                { event_id: eventId },
                { preserveState: true },
            );
        } else {
            router.get('/admin/participants', {}, { preserveState: true });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manage Participants" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 lg:p-6">
                {/* Page Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground italic lg:text-3xl">
                            {participants.length}{' '}
                            {participants.length <= 1
                                ? 'Participant'
                                : 'Participants'}
                        </h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            View and manage event registrations
                        </p>
                    </div>
                    <select
                        className="rounded-lg border border-input bg-background px-4 py-2 text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                        value={selectedEventId || ''}
                        onChange={handleFilterChange}
                    >
                        <option value="">All Events</option>
                        {events.map((event) => (
                            <option key={event.id} value={event.id}>
                                <TransText {...event.title} />
                            </option>
                        ))}
                    </select>
                </div>

                {/* Participants Table */}
                <Table
                    data={participants}
                    columns={[
                        {
                            header: 'First Name',
                            cellClassName: 'font-semibold text-foreground',
                            render: (p) => p.first_name,
                        },
                        {
                            header: 'Last Name',
                            cellClassName: 'text-foreground',
                            render: (p) => p.last_name,
                        },
                        {
                            header: 'Email',
                            render: (p) => (
                                <span className="inline-flex items-center gap-1">
                                    <Mail className="h-3.5 w-3.5" />
                                    {p.email}
                                </span>
                            ),
                        },
                        {
                            header: 'Phone',
                            render: (p) => (
                                <span className="inline-flex items-center gap-1">
                                    <Phone className="h-3.5 w-3.5" />
                                    {p.phone}
                                </span>
                            ),
                        },
                        {
                            header: 'Event',
                            render: (p) => (
                                <span className="inline-block rounded-full bg-alpha/10 px-2.5 py-0.5 text-xs font-medium text-alpha">
                                    <TransText {...p.event.title} />
                                </span>
                            ),
                        },
                        {
                            header: 'Registered At',
                            render: (p) =>
                                new Date(p.created_at).toLocaleDateString(),
                        },
                        {
                            header: 'Actions',
                            headerClassName: 'text-right',
                            cellClassName: 'text-right',
                            render: (p) => (
                                <div className="flex items-center justify-end">
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        className="rounded-lg"
                                        onClick={() => setDeleteId(p.id)}
                                    >
                                        <Trash2 className="mr-1 h-3.5 w-3.5" />
                                        Delete
                                    </Button>
                                </div>
                            ),
                        },
                    ]}
                    emptyState={
                        <>
                            <Users className="mx-auto mb-3 size-10 text-muted-foreground" />
                            <p className="font-medium text-foreground">
                                No participants yet
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Registrations will appear here.
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
                title="Delete Participant"
                description="Are you sure you want to remove this participant? This action cannot be undone."
            />

            <AlertSuccess message={flash?.success} />
        </AppLayout>
    );
}
