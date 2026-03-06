import { useState } from 'react';
import { Head, router, usePage } from '@inertiajs/react';
import { Trash2, Users } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import AlertSuccess from '@/components/alert-success';

const breadcrumbs = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Participants', href: '/admin/participants' },
];

export default function AdminParticipantIndex({ participants, events, selectedEventId }) {
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
            router.get('/admin/participants', { event_id: eventId }, { preserveState: true });
        } else {
            router.get('/admin/participants', {}, { preserveState: true });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manage Participants" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Participants</h1>
                    <div className="flex items-center gap-3">
                        <select
                            className="border-input bg-background ring-offset-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                            value={selectedEventId || ''}
                            onChange={handleFilterChange}
                        >
                            <option value="">All Events</option>
                            {events.map((event) => (
                                <option key={event.id} value={event.id}>
                                    {event.title}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-lg border">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b bg-muted/50 text-muted-foreground">
                            <tr>
                                <th className="px-4 py-3 font-medium">First Name</th>
                                <th className="px-4 py-3 font-medium">Last Name</th>
                                <th className="px-4 py-3 font-medium">Email</th>
                                <th className="px-4 py-3 font-medium">Phone</th>
                                <th className="px-4 py-3 font-medium">Event</th>
                                <th className="px-4 py-3 font-medium">Registered At</th>
                                <th className="px-4 py-3 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {participants.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
                                        <Users className="mx-auto mb-2 h-8 w-8" />
                                        No participants found.
                                    </td>
                                </tr>
                            )}
                            {participants.map((participant) => (
                                <tr key={participant.id} className="border-b last:border-0 hover:bg-muted/30">
                                    <td className="px-4 py-3 font-medium">{participant.first_name}</td>
                                    <td className="px-4 py-3">{participant.last_name}</td>
                                    <td className="px-4 py-3">{participant.email}</td>
                                    <td className="px-4 py-3">{participant.phone}</td>
                                    <td className="px-4 py-3">{participant.event?.title || '—'}</td>
                                    <td className="px-4 py-3">
                                        {new Date(participant.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-end">
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => setDeleteId(participant.id)}
                                            >
                                                <Trash2 className="mr-1 h-3.5 w-3.5" />
                                                Delete
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <ConfirmDeleteDialog
                open={deleteId !== null}
                onOpenChange={(val) => { if (!val) setDeleteId(null); }}
                onConfirm={handleDelete}
                processing={deleting}
                title="Delete Participant"
                description="Are you sure you want to remove this participant? This action cannot be undone."
            />

            <AlertSuccess message={flash?.success} />
        </AppLayout>
    );
}
