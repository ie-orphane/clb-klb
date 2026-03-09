import { useState } from 'react';
import { TriangleAlertIcon } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function ConfirmDeleteDialog({ open, onOpenChange, onConfirm, title, description, processing }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                        <TriangleAlertIcon className="h-6 w-6 text-red-600" />
                    </div>
                    <DialogTitle className="text-center">
                        {title || 'Confirm Deletion'}
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        {description || 'Are you sure you want to delete this item? This action cannot be undone.'}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-center gap-2">
                    <Button variant="outline" onClick={() => onOpenChange(false)} disabled={processing}>
                        Cancel
                    </Button>
                    <Button variant="destructive" onClick={onConfirm} disabled={processing}>
                        {processing ? 'Deleting...' : 'Delete'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
