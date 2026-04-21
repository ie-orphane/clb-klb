import { Head, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/admin/dashboard',
    },
];

type DashboardProps = {
    stats: {
        publishedBlogs: number;
        eventsCount: number;
        partnersCount: number;
    };
};

export default function Dashboard({ stats }: DashboardProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        subject: '',
        content: '',
    });

    const submitNewsletter = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/admin/newsletter/send', {
            preserveScroll: true,
            onSuccess: () => reset('subject', 'content'),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 lg:p-6">
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Published Blogs
                        </p>
                        <p className="mt-3 text-3xl font-bold text-foreground">
                            {stats?.publishedBlogs ?? 0}
                        </p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Events
                        </p>
                        <p className="mt-3 text-3xl font-bold text-foreground">
                            {stats?.eventsCount ?? 0}
                        </p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Partners
                        </p>
                        <p className="mt-3 text-3xl font-bold text-foreground">
                            {stats?.partnersCount ?? 0}
                        </p>
                    </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-foreground">
                        Send Newsletter
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Send updates to all newsletter subscribers.
                    </p>

                    <form
                        onSubmit={submitNewsletter}
                        className="mt-5 space-y-4"
                    >
                        <div className="space-y-1.5">
                            <label
                                htmlFor="subject"
                                className="text-sm font-medium text-foreground"
                            >
                                Subject
                            </label>
                            <input
                                id="subject"
                                type="text"
                                value={data.subject}
                                onChange={(e) =>
                                    setData('subject', e.target.value)
                                }
                                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                                placeholder="Enter subject"
                            />
                            {errors.subject && (
                                <p className="text-xs text-destructive">
                                    {errors.subject}
                                </p>
                            )}
                        </div>

                        <div className="space-y-1.5">
                            <label
                                htmlFor="content"
                                className="text-sm font-medium text-foreground"
                            >
                                Content
                            </label>
                            <textarea
                                id="content"
                                rows={6}
                                value={data.content}
                                onChange={(e) =>
                                    setData('content', e.target.value)
                                }
                                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                                placeholder="Write your newsletter"
                            />
                            {errors.content && (
                                <p className="text-xs text-destructive">
                                    {errors.content}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-lg bg-alpha px-5 py-2 text-sm font-semibold text-white hover:bg-alpha/90"
                        >
                            {processing ? 'Sending...' : 'Send Newsletter'}
                        </button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
