import React, { useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { ImageOff } from 'lucide-react';

export type TableColumn<TData> = {
    header: ReactNode;
    render: (row: TData, index: number) => ReactNode;
    headerClassName?: string;
    cellClassName?: string;
};

type TableProps<TData> = {
    data: TData[];
    columns: TableColumn<TData>[];
    emptyState?: ReactNode;
    className?: string;
    tableClassName?: string;
    bodyClassName?: string;
    rowClassName?: string | ((row: TData, index: number) => string);
};

export function TableImage({
    src,
    alt,
    width,
    aspectRatio,
}: {
    src: React.ImgHTMLAttributes<HTMLImageElement>['src'];
    alt: React.ImgHTMLAttributes<HTMLImageElement>['alt'];
    width: React.CSSProperties['width'];
    aspectRatio: React.CSSProperties['aspectRatio'];
}) {
    const [hasError, setHasError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    if (hasError || !src) {
        return (
            <div
                style={{
                    width,
                    aspectRatio,
                }}
                className="flex items-center justify-center rounded-lg border border-dashed border-border bg-muted text-xs text-muted-foreground"
            >
                <ImageOff className="size-4" />
            </div>
        );
    }

    return (
        <div
            style={{
                width,
                aspectRatio,
            }}
            className="overflow-hidden rounded-lg border border-border bg-muted"
        >
            <img
                src={src}
                alt={alt}
                className={`h-full w-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
            />
        </div>
    );
}

export function Table<TData>({
    data,
    columns,
    emptyState,
    className,
    tableClassName,
    bodyClassName,
    rowClassName,
}: TableProps<TData>) {
    return (
        <div
            className={cn(
                'overflow-hidden rounded-2xl border border-border bg-card shadow-sm',
                className,
            )}
        >
            <div className="overflow-x-auto">
                <table
                    className={cn('w-full text-left text-sm', tableClassName)}
                >
                    <thead className="border-b bg-muted/40 text-xs tracking-wider text-muted-foreground uppercase">
                        <tr>
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                    className={cn(
                                        'px-6 py-4 font-semibold',
                                        column.headerClassName,
                                    )}
                                >
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody
                        className={cn('divide-y divide-border', bodyClassName)}
                    >
                        {data.length === 0 && (
                            <tr>
                                <td
                                    colSpan={Math.max(columns.length, 1)}
                                    className="px-6 py-16 text-center text-muted-foreground"
                                >
                                    {emptyState ?? 'No data available.'}
                                </td>
                            </tr>
                        )}

                        {data.map((row, index) => (
                            <tr
                                key={index}
                                className={cn(
                                    'transition-colors hover:bg-alpha/2',
                                    typeof rowClassName === 'function'
                                        ? rowClassName(row, index)
                                        : rowClassName,
                                )}
                            >
                                {columns.map((column, index) => (
                                    <td
                                        key={index}
                                        className={cn(
                                            'px-6 py-4 text-muted-foreground',
                                            column.cellClassName,
                                        )}
                                    >
                                        {column.render(row, index)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
