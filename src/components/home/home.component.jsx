import Hero from "../hero/hero.component";
import Specials from "../specials/specials.component";

const Home = ({ specials }) => (
  <>
    <Hero />
    <Specials specials={specials} />
  </>
);

export default Home;
