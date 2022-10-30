import Footer from '../components/shared/Footer';
import {StudioHeader} from '../components/shared/StudioHeader';
import {NextSeo} from 'next-seo';
import Projects from '../components/studio/projects/Projects';
import {Hero} from '../components/studio/projects/Hero';
export default function Home() {
  return (
    <>
      <NextSeo
        title="SuZu Projects"
        description="Welcome to Suzu Group's Portfolio....."
      />
      <div className=" relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <StudioHeader />
        <main>
          <Hero />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}
