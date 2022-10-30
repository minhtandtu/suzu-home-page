import Footer from '../components/shared/Footer';
import {NextSeo} from 'next-seo';
import {StudioHeader} from '../components/shared/StudioHeader';
import Hero from '../components/studio/home/Hero';
import ProjectGrid from '../components/studio/home/ProjectGrid';
import StudioInfo from '../components/studio/home/StudioInfo';
export default function Home() {
  return (
    <>
      <NextSeo title="SuZu Group" description="Xelcome to suzu group....." />
      <div className="relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <StudioHeader />
        <main>
          <Hero />
          <StudioInfo />
          <ProjectGrid />
        </main>
        <Footer />
      </div>
    </>
  );
}
