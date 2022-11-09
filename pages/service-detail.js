import Footer from '../components/shared/Footer';
import {NextSeo} from 'next-seo';
import Header from '../components/shared/Header';
import ServiceDetail from '../components/service/ServiceDetail';
export default function Home() {
  return (
    <>
      <NextSeo title="SuZu's Services" description="Welcome to Suzu Group" />
      <div className="relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <Header />
        <main>
          <ServiceDetail />
        </main>
        <Footer />
      </div>
    </>
  );
}
