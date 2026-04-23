import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import TipTapEditor from '@/components/TipTapEditor';
import { CONTENT_CATEGORY_PRESETS } from '@/lib/consts';
import { findCategoryPresetByValue } from '@/lib/utils';

const breadcrumbs = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Blogs', href: '/admin/blogs' },
    { title: 'Create', href: '#' },
];

const LOCALES = [
    { code: 'fr', label: 'French' },
    { code: 'ar', label: 'Arabic' },
    { code: 'nl', label: 'Dutch' },
];

const emptyLocale = () => ({ fr: '', ar: '', nl: '' });

export default function AdminBlogCreate() {
    const [activeLocale, setActiveLocale] = useState('fr');
    const [openCategoryLocale, setOpenCategoryLocale] = useState(null);
    const { data, setData, post, processing, errors } = useForm({
        image: null,
        title: emptyLocale(),
        category: emptyLocale(),
        body: emptyLocale(),
        author: '',
        published_at: '',
        is_published: false,
    });

    const handleTitleChange = (locale, value) => {
        setData('title', { ...data.title, [locale]: value });
    };

    const handleBodyChange = (locale, value) => {
        setData('body', { ...data.body, [locale]: value });
    };

    const handleCategoryInputChange = (locale, value) => {
        const matchedPreset = findCategoryPresetByValue(locale, value);

        if (matchedPreset) {
            setData('category', {
                fr: matchedPreset.fr,
                ar: matchedPreset.ar,
                nl: matchedPreset.nl,
            });
            return;
        }

        setData('category', { ...data.category, [locale]: value });
    };

    const getCategorySuggestions = (locale) => {
        const search = (data.category[locale] ?? '').trim().toLowerCase();

        return CONTENT_CATEGORY_PRESETS.filter((preset) => {
            const localizedLabel = (preset[locale] ?? '').toLowerCase();

            return search === '' || localizedLabel.includes(search);
        });
    };

    const applyCategoryPreset = (preset) => {
        setData('category', {
            fr: preset.fr,
            ar: preset.ar,
            nl: preset.nl,
        });
        setOpenCategoryLocale(null);
    };

    const canSubmit = LOCALES.every(
        ({ code }) =>
            data.title[code]?.trim() &&
            data.category[code]?.trim() &&
            data.body[code]?.trim(),
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/admin/blogs', { forceFormData: true });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Blog" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 lg:p-6">
                <div>
                    <h1 className="text-2xl font-bold text-foreground italic lg:text-3xl">
                        Create Blog
                    </h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Fill in the details to publish a new article
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="grid w-full max-w-7xl gap-6 xl:grid-cols-2"
                >
                    <div className="rounded-2xl border border-border bg-card shadow-sm">
                        <div className="border-b bg-alpha/5 px-6 py-3">
                            <p className="text-xs font-semibold uppercase tracking-wider text-alpha">
                                Title
                            </p>
                        </div>
                        <div className="grid gap-4 p-6 md:grid-cols-3">
                            {LOCALES.map((lang) => (
                                <div key={lang.code} className="space-y-1.5">
                                    <Label htmlFor={`title_${lang.code}`}>
                                        {lang.label}
                                    </Label>
                                    <Input
                                        id={`title_${lang.code}`}
                                        className="rounded-lg"
                                        value={data.title[lang.code]}
                                        onChange={(e) =>
                                            handleTitleChange(
                                                lang.code,
                                                e.target.value,
                                            )
                                        }
                                    />
                                    {errors[`title.${lang.code}`] && (
                                        <p className="text-xs text-destructive">
                                            {errors[`title.${lang.code}`]}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-card shadow-sm">
                        <div className="border-b bg-alpha/5 px-6 py-3">
                            <p className="text-xs font-semibold uppercase tracking-wider text-alpha">
                                Category
                            </p>
                        </div>
                        <div className="grid gap-4 p-6 md:grid-cols-3">
                            {LOCALES.map((lang) => (
                                <div key={lang.code} className="space-y-1.5">
                                    <Label htmlFor={`category_${lang.code}`}>
                                        {lang.label}
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id={`category_${lang.code}`}
                                            className="rounded-lg"
                                            autoComplete="off"
                                            value={data.category[lang.code]}
                                            onFocus={() =>
                                                setOpenCategoryLocale(lang.code)
                                            }
                                            onBlur={() => {
                                                setTimeout(() => {
                                                    setOpenCategoryLocale(
                                                        (current) =>
                                                            current ===
                                                            lang.code
                                                                ? null
                                                                : current,
                                                    );
                                                }, 120);
                                            }}
                                            onChange={(e) => {
                                                handleCategoryInputChange(
                                                    lang.code,
                                                    e.target.value,
                                                );
                                                setOpenCategoryLocale(lang.code);
                                            }}
                                        />
                                        {openCategoryLocale === lang.code && (
                                            <div className="absolute z-30 mt-1 w-full overflow-hidden rounded-lg border border-border bg-card shadow-xl">
                                                <div className="max-h-56 overflow-auto py-1">
                                                    {getCategorySuggestions(
                                                        lang.code,
                                                    ).length > 0 ? (
                                                        getCategorySuggestions(
                                                            lang.code,
                                                        ).map(
                                                            (categoryPreset) => (
                                                                <button
                                                                    key={`blog-${lang.code}-${categoryPreset.fr}`}
                                                                    type="button"
                                                                    className="flex w-full flex-col items-start px-3 py-2 text-left hover:bg-alpha/10"
                                                                    onMouseDown={(
                                                                        e,
                                                                    ) => {
                                                                        e.preventDefault();
                                                                    }}
                                                                    onClick={() =>
                                                                        applyCategoryPreset(
                                                                            categoryPreset,
                                                                        )
                                                                    }
                                                                >
                                                                    <span className="text-sm font-medium text-foreground">
                                                                        {
                                                                            categoryPreset[
                                                                                lang.code
                                                                            ]
                                                                        }
                                                                    </span>
                                                                </button>
                                                            ),
                                                        )
                                                    ) : (
                                                        <p className="px-3 py-2 text-xs text-muted-foreground">
                                                            No matching category
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {errors[`category.${lang.code}`] && (
                                        <p className="text-xs text-destructive">
                                            {errors[`category.${lang.code}`]}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm xl:col-span-2">
                        <div className="border-b bg-alpha/5 px-6 py-3">
                            <p className="text-xs font-semibold uppercase tracking-wider text-alpha">
                                Content
                            </p>
                        </div>
                        <div className="space-y-4 p-6">
                            <div className="flex flex-wrap gap-2">
                                {LOCALES.map((lang) => (
                                    <Button
                                        key={lang.code}
                                        type="button"
                                        variant={
                                            activeLocale === lang.code
                                                ? 'default'
                                                : 'outline'
                                        }
                                        className={
                                            activeLocale === lang.code
                                                ? 'rounded-lg bg-alpha text-white hover:bg-alpha/90'
                                                : 'rounded-lg'
                                        }
                                        onClick={() =>
                                            setActiveLocale(lang.code)
                                        }
                                    >
                                        {lang.label}
                                    </Button>
                                ))}
                            </div>
                            <div className="rounded-lg border border-input bg-background p-2">
                                <TipTapEditor
                                    key={`create-${activeLocale}`}
                                    value={data.body[activeLocale] ?? ''}
                                    onChange={(html) =>
                                        handleBodyChange(activeLocale, html)
                                    }
                                    placeholder={`Write content in ${activeLocale}...`}
                                />
                            </div>
                            {errors[`body.${activeLocale}`] && (
                                <p className="text-xs text-destructive">
                                    {errors[`body.${activeLocale}`]}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                        <div className="border-b bg-alpha/5 px-6 py-3">
                            <p className="text-xs font-semibold uppercase tracking-wider text-alpha">
                                Cover Image
                            </p>
                        </div>
                        <div className="space-y-3 p-6">
                            <input
                                id="image"
                                type="file"
                                accept="image/*"
                                className="block w-full text-sm text-muted-foreground file:mr-4 file:rounded-md file:border-0 file:bg-alpha file:px-4 file:py-2 file:text-sm file:font-medium file:text-white file:hover:opacity-90"
                                onChange={(e) =>
                                    setData('image', e.target.files?.[0] ?? null)
                                }
                            />
                            {data.image && (
                                <p className="text-xs text-muted-foreground">
                                    Selected: {data.image.name}
                                </p>
                            )}
                            {errors.image && (
                                <p className="text-xs text-destructive">
                                    {errors.image}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                        <div className="border-b bg-alpha/5 px-6 py-3">
                            <p className="text-xs font-semibold uppercase tracking-wider text-alpha">
                                Publishing
                            </p>
                        </div>
                        <div className="space-y-4 p-6">
                            <div className="space-y-1.5">
                                <Label htmlFor="author">Author</Label>
                                <Input
                                    id="author"
                                    className="rounded-lg"
                                    value={data.author}
                                    onChange={(e) =>
                                        setData('author', e.target.value)
                                    }
                                    placeholder="Optional author name"
                                />
                                {errors.author && (
                                    <p className="text-xs text-destructive">
                                        {errors.author}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="published_at">
                                    Publication date
                                </Label>
                                <Input
                                    id="published_at"
                                    type="date"
                                    className="rounded-lg"
                                    value={data.published_at}
                                    onChange={(e) =>
                                        setData(
                                            'published_at',
                                            e.target.value,
                                        )
                                    }
                                />
                                {errors.published_at && (
                                    <p className="text-xs text-destructive">
                                        {errors.published_at}
                                    </p>
                                )}
                            </div>
                            <div className="flex items-center justify-between rounded-lg border border-border bg-alpha/5 px-4 py-3">
                                <label htmlFor="is_published" className="text-sm font-medium text-foreground cursor-pointer">
                                    Publish now
                                </label>
                                <input
                                    id="is_published"
                                    type="checkbox"
                                    className="h-5 w-5 cursor-pointer rounded accent-alpha"
                                    checked={data.is_published}
                                    onChange={(e) =>
                                        setData('is_published', e.target.checked)
                                    }
                                />
                            </div>
                            {errors.is_published && (
                                <p className="text-xs text-destructive">
                                    {errors.is_published}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 pb-6 xl:col-span-2">
                        <Button
                            variant="outline"
                            type="button"
                            className="rounded-lg"
                            asChild
                        >
                            <Link href="/admin/blogs">Cancel</Link>
                        </Button>
                        <Button
                            type="submit"
                            disabled={processing || !canSubmit}
                            className="rounded-lg bg-alpha text-white shadow-md hover:bg-alpha/90"
                        >
                            {processing ? 'Creating...' : 'Create Blog'}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
