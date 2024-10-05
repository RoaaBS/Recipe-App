import HeroSection from "../component/Herosection";
import ImproveSkills from "../component/improveSkill";
import QouteSection from "../component/QuoteSection";
import ChiefsSection from "../component/ChiefsSection";

export default function Home(){
    return (
        <div>
        <HeroSection/>
      <ImproveSkills/>
      <QouteSection/>
      <ChiefsSection/>
        </div>

    )
}