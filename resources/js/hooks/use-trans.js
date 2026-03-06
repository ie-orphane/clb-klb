import { usePage } from '@inertiajs/react';

const SUPPORTED = ['fr', 'ar', 'nl'];
const DEFAULT = 'fr';

/**
 * Returns a `t` function that picks the right translation from a {fr, ar, nl} object.
 *
 * @example
 *   const { t } = useTrans();
 *   t(event.title)  // returns the string for the current locale
 */
export function useTrans() {
    const { props } = usePage();
    const locale = props.locale && SUPPORTED.includes(props.locale) ? props.locale : DEFAULT;

    const t = (value) => {
        if (value == null) return '';
        if (typeof value === 'string') return value;
        if (typeof value === 'object') {
            return value[locale] ?? value.fr ?? value.ar ?? value.nl ?? '';
        }
        return String(value);
    };

    return { t, locale };
}
