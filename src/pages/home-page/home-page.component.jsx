import Hero from "../../components/hero/hero.component";
import Specials from "../../components/specials/specials.component";

const HomePage = ({ specials }) => (
  <>
    <Hero />
    <Specials specials={specials} />
  </>
);

export default HomePage;
