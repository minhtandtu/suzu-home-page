import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import {NextSeo} from 'next-seo';
import ContactUsNow from '../components/shared/ContactUsNow';
import AboutUsHero from '../components/aboutus/AboutUsHero';
import {AboutUsStats} from '../components/aboutus/AboutUsStats';
import {AboutUsLeaders} from '../components/aboutus/AboutUsLeaders';
import {AboutUsManagers} from '../components/aboutus/AboutUsManagers';
export default function aboutus() {
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
          <ContactUsNow />
        </main>
        <Footer />
      </div>
    </>
  );
}
