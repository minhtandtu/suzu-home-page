import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import {NextSeo} from 'next-seo';
import ContactUsNow from '../components/shared/ContactUsNow';
import RecruHero from '../components/recruitment/RecruHero';
import {JobList} from '../components/recruitment/JobList';
export default function recruitment() {
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
          <RecruHero />
          <JobList />
          <ContactUsNow />
        </main>
        <Footer />
      </div>
    </>
  );
}
