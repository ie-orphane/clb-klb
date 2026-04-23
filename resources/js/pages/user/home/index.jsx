import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import {
    HeroSection,
    EventsSection,
    StrategicObjectivesSection,
    NetworkVideoSection,
    CallToActionSection,
    ContactStripSection,
    LatestBlogSection,
} from './partials';
import TeamSection from '@/components/TeamSection';
import PartnersSection from '@/components/PartnersSection';

function HomeIndex({
    latestBlogs,
    recentEvents = [],
    teamMembers = [],
    partners = [],
}) {
    return (
        <>
            <Head title="Accueil" />
            <HeroSection />
            <LatestBlogSection latestBlogs={latestBlogs} />
            <NetworkVideoSection />
            <EventsSection recentEvents={recentEvents} />
            <StrategicObjectivesSection />
            <TeamSection teamMembers={teamMembers} />
            <PartnersSection partners={partners} />
            <CallToActionSection />
            <ContactStripSection />
        </>
    );
}

HomeIndex.layout = (page) => <AppLayout>{page}</AppLayout>;
export default HomeIndex;
