import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import {NextSeo} from 'next-seo';
import {ContactForm} from '../components/contact/ContactForm';
import {ContactInfo} from '../components/contact/ContactInfo';
export default function aboutus() {
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
          <ContactForm />
          <ContactInfo />
        </main>
        <Footer />
      </div>
    </>
  );
}
