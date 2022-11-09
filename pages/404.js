import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

import {NextSeo} from 'next-seo';
import Content404 from '../components/home/Content404';

export default function Home() {
  return (
    <>
      <NextSeo title="SuZu Group" description="Xelcome to suzu group....." />
      <div className="relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <Header />
        <main>
          <Content404 />
        </main>
        <Footer />
      </div>
    </>
  );
}
