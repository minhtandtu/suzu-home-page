import Footer from '../components/shared/Footer';
import {NextSeo} from 'next-seo';
import {StudioHeader} from '../components/shared/StudioHeader';
import {PJDetail} from '../components/studio/project-detail/PJDetail';
export default function Home() {
  return (
    <>
      <NextSeo title="SuZu Group" description="Xelcome to suzu group....." />
      <div className="relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <StudioHeader className="sticky" />
        <main>
          <PJDetail />
        </main>
        <Footer />
      </div>
    </>
  );
}
