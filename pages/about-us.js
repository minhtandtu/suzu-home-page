import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import {NextSeo} from 'next-seo';
import ContactUsNow from '../components/shared/ContactUsNow';
import AboutUsHero from '../components/about-us/AboutUsHero';
import {AboutUsStats} from '../components/about-us/AboutUsStats';
import {AboutUsLeaders} from '../components/about-us/AboutUsLeaders';
import {AboutUsManagers} from '../components/about-us/AboutUsManagers';
export default function Home() {
  return (
    <>
      <NextSeo
        title="SuZu Projects"
        description="Welcome to Suzu Group's Portfolio....."
      />
      <div className=" relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <Header />
        <main>
          <AboutUsHero />
          <AboutUsLeaders />
          <AboutUsManagers />
          <AboutUsStats />
        </main>
        <Footer />
      </div>
    </>
  );
}
