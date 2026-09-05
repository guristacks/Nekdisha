import About from "./About/about";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import Hero from "./Hero/hero";
import Join from "./JoinUs/join";
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
      <Join />
      <Footer />
    </>
  );
};

export default Home;
