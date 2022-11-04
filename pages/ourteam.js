import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import {NextSeo} from 'next-seo';
import ContactUsNow from '../components/shared/ContactUsNow';
import TeamHero from '../components/team/TeamHero';
import TeamInfo from '../components/team/TeamInfo';
import TeamRecruitment from '../components/team/TeamRecruitment';
export default function Ourtem() {
  return (
    <>
      <NextSeo
        title="SuZu's Team "
        description="This is Suzu Team Branches....."
      />
      <div className=" relative bg-white ">
        {/* Navigation Top Menu ----------------> */}
        <Header />
        <main>
          <TeamHero />
          <TeamInfo />
          <TeamRecruitment />
        </main>
        <Footer />
      </div>
    </>
  );
}
