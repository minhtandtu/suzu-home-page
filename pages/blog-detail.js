import Footer from '../components/shared/Footer';
import {NextSeo} from 'next-seo';
import {StudioHeader} from '../components/shared/StudioHeader';
import Header from '../components/shared/Header';
import {BlogDetail} from '../components/blog/BlogDetail';
export default function Home() {
  return (
    <>
      <NextSeo title="SuZu Group" description="Xelcome to suzu group....." />
      <div className="relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <Header />
        <main>
          <BlogDetail />
        </main>
        <Footer />
      </div>
    </>
  );
}
