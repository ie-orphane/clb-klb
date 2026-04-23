import type { InertiaLinkProps } from '@inertiajs/react';
import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CONTENT_CATEGORY_PRESETS } from '@/lib/consts';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}

export function findCategoryPresetByValue(
    locale: 'fr' | 'ar' | 'nl',
    value: string,
): {
    fr: string;
    ar: string;
    nl: string;
} | null {
    const normalizedValue = value.trim().toLowerCase();

    if (!normalizedValue) {
        return null;
    }

    return (
        CONTENT_CATEGORY_PRESETS.find(
            (preset) => preset[locale].trim().toLowerCase() === normalizedValue,
        ) ?? null
    );
}
