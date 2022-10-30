import Footer from '../components/shared/Footer';
import {StudioHeader} from '../components/shared/StudioHeader';
import {NextSeo} from 'next-seo';
import AboutTeam from '../components/studio/team/AboutTeam';
import {Hero} from '../components/studio/team/Hero';
import {Recruitment} from '../components/studio/team/Recruitment';
export default function Home() {
  return (
    <>
      <NextSeo
        title="About Suzu Studio"
        description="Welcome to Suzu Group's Portfolio....."
      />
      <div className=" relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <StudioHeader />
        <main>
          <Hero />
          <AboutTeam />
          <Recruitment />
        </main>
        <Footer />
      </div>
    </>
  );
}
