import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import {NextSeo} from 'next-seo';
import ContactUsNow from '../components/shared/ContactUsNow';
import PortProject from '../components/portfolio/PortProject';
import {PortHero} from '../components/portfolio/PortHero';
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
          <PortHero />
          <PortProject />
        </main>
        <Footer />
      </div>
    </>
  );
}
