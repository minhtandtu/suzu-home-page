import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Customers from '../components/Customers';
import OurProject from '../components/OurProject';
import {NextSeo} from 'next-seo';
import TeamBranch from '../components/TeamBranch';
import ContactUsNow from '../components/ContactUsNow';
import Works from '../components/Works';
import Fields from '../components/Fields';
import Blog from '../components/Blog';
export default function Home() {
  return (
    <>
      <NextSeo title="SuZu Group" description="welcome to suzu group....." />
      <div className="relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <Header />
        <main></main>
        <Footer />
      </div>
    </>
  );
}
