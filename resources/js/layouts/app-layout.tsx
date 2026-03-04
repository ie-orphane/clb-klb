import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SetDocumentDirection from '@/components/SetDocumentDirection';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { AppLayoutProps } from '@/types';

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        <SetDocumentDirection />
        <Navbar />
        {children}
        <Footer />
    </AppLayoutTemplate>
);
