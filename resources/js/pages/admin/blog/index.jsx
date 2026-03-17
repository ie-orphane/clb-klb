import { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { FileText, Plus, Trash2, ImageOff, Edit } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Table, TableImage } from '@/components/Table';
import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import AlertSuccess from '@/components/alert-success';

const breadcrumbs = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Blogs', href: '#' },
];

export default function AdminBlogIndex({ blogs = [] }) {
    const { flash } = usePage().props;
    const [deleteId, setDeleteId] = useState(null);
    const [deleting, setDeleting] = useState(false);

    const handleDelete = () => {
        setDeleting(true);
        router.delete(`/admin/blogs/${deleteId}`, {
            onFinish: () => {
                setDeleting(false);
                setDeleteId(null);
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Blogs" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 lg:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground italic lg:text-3xl">
                            {blogs.length}{' '}
                            {blogs.length <= 1 ? 'Blog' : 'Blogs'}
                        </h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Manage your blog articles and content.
                        </p>
                    </div>
                    <Button
                        asChild
                        className="bg-alpha text-white shadow-md hover:bg-alpha/90"
                    >
                        <Link href="/admin/blogs/create">
                            <Plus className="mr-2 h-4 w-4" />
                            New Article
                        </Link>
                    </Button>
                </div>

                <Table
                    data={blogs}
                    getRowKey={(b) => b.id}
                    columns={[
                        {
                            header: 'Thumbnail',
                            render: (blog) => (
                                <TableImage
                                    src={blog.image}
                                    alt="Blog Image"
                                    width="10rem"
                                    aspectRatio="16/7"
                                />
                            ),
                        },
                        {
                            header: 'Title',
                            cellClassName: 'font-semibold text-foreground',
                            render: (b) => b.title?.fr ?? 'Untitled',
                        },
                        {
                            header: 'Category',
                            render: (b) => (
                                <span className="inline-block rounded-full bg-alpha/10 px-2.5 py-0.5 text-xs font-medium text-alpha">
                                    {b.category?.fr || '—'}
                                </span>
                            ),
                        },
                        {
                            header: 'Author',
                            render: (b) => b.author || '—',
                        },
                        {
                            header: 'Status',
                            render: (b) => (
                                <span
                                    className={
                                        b.is_published
                                            ? 'inline-block rounded-full bg-alpha/10 px-2.5 py-0.5 text-xs font-medium text-alpha'
                                            : 'inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground'
                                    }
                                >
                                    {b.is_published ? 'Published' : 'Draft'}
                                </span>
                            ),
                        },
                        {
                            header: 'Actions',
                            headerClassName: 'text-right',
                            cellClassName: 'text-right',
                            render: (b) => (
                                <div className="flex items-center justify-end gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="rounded-lg"
                                        asChild
                                    >
                                        <Link
                                            href={`/admin/blogs/${b.id}/edit`}
                                        >
                                            <Edit className="mr-1.5 h-3.5 w-3.5" />
                                            Edit
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        className="rounded-lg"
                                        onClick={() => setDeleteId(b.id)}
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
                            <FileText className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
                            <p className="font-medium text-foreground">
                                No blogs yet
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Create your first blog article to get started.
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
                title="Delete blog"
                description="This blog article will be permanently deleted. This action cannot be undone."
            />

            <AlertSuccess message={flash?.success} />
        </AppLayout>
    );
}
