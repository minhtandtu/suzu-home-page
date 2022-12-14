import Footer from '../components/shared/Footer';
import {NextSeo} from 'next-seo';
import Header from '../components/shared/Header';

import {PJDetail} from '../components/studio/project-detail/PJDetail';
export default function Home() {
  return (
    <>
      <NextSeo title="SuZu Group" description="Xelcome to suzu group....." />
      <div className="relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <Header />
        <main>
          <PJDetail />
        </main>
        <Footer />
      </div>
    </>
  );
}
