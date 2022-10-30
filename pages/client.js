import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import {NextSeo} from 'next-seo';
import ContactUsNow from '../components/shared/ContactUsNow';
import {ClientHero} from '../components/client/ClientHero';
import ClientInfo from '../components/client/ClientInfo';
import ClientGridLogo from '../components/client/ClientGridLogo';
import ClientQA from '../components/client/ClientQA';

export default function client() {
  return (
    <>
      <NextSeo
        title="SuZu's Clients"
        description="This is Suzu Group's Clients....."
      />
      <div className=" relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <Header />
        <main>
          <ClientHero />
          <ClientInfo />
          <ClientGridLogo />
          <ClientQA />
          {/* <ContactUsNow /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
