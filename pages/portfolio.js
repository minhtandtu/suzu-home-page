import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import {NextSeo} from 'next-seo';
import ContactUsNow from '../components/shared/ContactUsNow';
export default function Home() {
  return (
    <>
      <NextSeo title="SuZu Group" description="welcome to suzu group....." />
      <div className="relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <Header />
        <main>
          <ContactUsNow />
        </main>
        <Footer />
      </div>
    </>
  );
}
