import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import {NextSeo} from 'next-seo';
import ContactUsNow from '../components/shared/ContactUsNow';
import BlogMain from '../components/blog/BlogMain';
import {BlogHero} from '../components/blog/BlogHero';
export default function blog() {
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
          <BlogHero />
          <BlogMain />
        </main>
        <Footer />
      </div>
    </>
  );
}
