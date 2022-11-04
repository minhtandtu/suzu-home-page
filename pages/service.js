import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import {NextSeo} from 'next-seo';
import ContactUsNow from '../components/shared/ContactUsNow';
import {ServiceHero} from '../components/service/ServiceHero';
import ServiceOurFields from '../components/service/ServiceOurFields';
import ServiceInfo from '../components/service/ServiceInfo';
const item = {
  name1: 'DỊCH VỤ',
  name2: 'CỦA CHÚNG TÔI',
  description:
    'Nhu cầu của khách hàng rất khác nhau, vì vậy việc quan trọng là phải có một quá trình để có thể điều chỉnh cho phù hợp',
};
export default function service() {
  return (
    <>
      <NextSeo
        title="SuZu Services"
        description="Welcome to Suzu Group's Services....."
      />
      <div className=" relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <Header />
        <main>
          <ServiceHero item={item} />
          <ServiceOurFields />
          <ServiceInfo />
        </main>
        <Footer />
      </div>
    </>
  );
}
