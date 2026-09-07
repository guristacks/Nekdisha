import About from "./About/about";
import Blogs from "./Blogs/blogs";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import Hero from "./Hero/hero";
import Insta from "./InstaPosts/insta";
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
      <Blogs />
      <Insta />
      <Footer />
    </>
  );
};

export default Home;
