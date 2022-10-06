import Hero from '../components/home/Hero';
import Testimonial from '../components/home/Testimonial';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import Customers from '../components/home/Customers';
import OurProject from '../components/home/OurProject';
import {NextSeo} from 'next-seo';
import TeamBranch from '../components/home/TeamBranch';
import ContactUsNow from '../components/shared/ContactUsNow';
import Works from '../components/home/Works';
import Fields from '../components/home/Fields';
import Blog from '../components/home/Blog';
export default function Home() {
  return (
    <>
      <NextSeo title="SuZu Group" description="Xelcome to suzu group....." />
      <div className="relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <Header />
        <main>
          {/* HERO SECTION*/}
          <Hero />
          {/* CUSTOMER LOGO */}
          <Customers />
          {/*OUR PROJECTS - DỰ ÁN CỦA CHÚNG TÔI */}
          <OurProject />
          {/* WORKS - CHÚNG TÔI LÀM GÌ */}
          <Works />
          {/* FIELDS - LĨNH VỰC HOẠT ĐỘNG */}
          <Fields />
          {/* TEAM BRANCH - ĐỘI NGŨ CỦA CHÚNG TÔI */}
          <TeamBranch />
          {/*TESTIMONIAL - ĐÁNH GIÁ TỪ KHÁCH HÀNG*/}
          <Testimonial />
          {/* BLOG - TIN TỨC */}
          <Blog />
          {/*LIÊN HỆ NGAY + LOGO*/}
          <ContactUsNow />
        </main>
        <Footer />
      </div>
    </>
  );
}
