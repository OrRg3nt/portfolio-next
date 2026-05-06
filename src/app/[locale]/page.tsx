import ProfileSidebar from '@/components/layout/profile-sidebar';
import SectionRouter from '@/components/layout/section-router';

const LandingPage = () => {
  return (
    <div className="flex min-h-screen">
      <ProfileSidebar />
      <main className="flex-1 ml-72">
        <SectionRouter />
      </main>
    </div>
  );
};

export default LandingPage;
