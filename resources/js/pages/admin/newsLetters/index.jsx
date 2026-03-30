import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

const newsLetters = () => {
    const breadcrumbs = [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'News Letters', href: '/admin/newsletter' },
    ];
    const { data, setData, post, processing } = useForm({
        // title: '',
        subject: '',
        // content: '',
    });
    const submit = (e) => {
        e.preventDefault();
        post('/admin/newsletter/send' , {data} , {});
    };
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
    <Head title="Newsletters" />

    <div className="flex justify-center">

        <div 
            className="w-full max-w-xl mt-16 rounded-2xl p-8 shadow-xl"
            style={{ backgroundColor: "var(--color-cl-white)" }}
        >

            {/* Header */}
            <div className="mb-6">
                <h1 
                    className="text-2xl font-bold"
                    style={{ color: "var(--color-cl-black)" }}
                >
                    Create Newsletter
                </h1>

                <p 
                    className="text-sm"
                    style={{ color: "var(--color-cl-black)", opacity: 0.6 }}
                >
                    Send updates to your subscribers
                </p>
            </div>

            <form onSubmit={submit} className="space-y-5">

                {/* Subject */}
                <div>
                    <label 
                        className="block text-sm font-medium mb-1"
                        style={{ color: "var(--color-cl-black)" }}
                    >
                        Subject
                    </label>

                    <input
                        type="text"
                        placeholder="Enter subject..."
                        value={data.subject}
                        onChange={(e) => setData('subject', e.target.value)}
                        className="w-full rounded-lg px-4 py-2 border focus:outline-none"
                        style={{
                            borderColor: "var(--color-cl-blue-light)"
                        }}
                    />
                </div>

                {/* Content */}
                <div>
                    <label 
                        className="block text-sm font-medium mb-1"
                        style={{ color: "var(--color-cl-black)" }}
                    >
                        Content
                    </label>

                    <textarea
                        rows={6}
                        placeholder="Write your newsletter..."
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                        className="w-full rounded-lg px-4 py-2 border focus:outline-none"
                        style={{
                            borderColor: "var(--color-cl-blue-light)"
                        }}
                    />
                </div>

                {/* Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={processing}
                        className="px-6 py-2 rounded-lg font-semibold transition"
                        style={{
                            backgroundColor: "var(--color-alpha)",
                            color: "var(--color-cl-white)"
                        }}
                    >
                        {processing ? "Sending..." : "Send Newsletter"}
                    </button>
                </div>

            </form>
        </div>

    </div>
</AppLayout>
    



        </>
    );
};

export default newsLetters;
