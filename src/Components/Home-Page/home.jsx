import About from "./About/about";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import Hero from "./Hero/hero";
import Programs from "./Programs/programs";
import Stats from "./Stats/stats";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Stats />
      <Programs />
      <Footer />
    </>
  );
};

export default Home;
