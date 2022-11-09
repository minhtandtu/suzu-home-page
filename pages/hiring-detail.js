import Footer from '../components/shared/Footer';
import {NextSeo} from 'next-seo';
import {HiringDetail} from '../components/recruitment/HiringDetail';
import Header from '../components/shared/Header';

export default function Home() {
  return (
    <>
      <NextSeo title="SuZu Group" description="Xelcome to suzu group....." />
      <div className="relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <Header />
        <main>
          <HiringDetail />
        </main>
        <Footer />
      </div>
    </>
  );
}
