import { ChevronsRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="heroSec flex ac jc">
      <div className="container">
        <div className="heroOne flex fClmn">
          <p>❤️ Change The World Together</p>
          <h1>
            For The People & <br /> Cause You Care About
          </h1>
          <p>
            It is a long established fact that a reader will be distracted lorem
            the readable content of a page when looking at layout the point
            lorem established fact that It is a long established
          </p>
          <div className="oneHalf flex ac">
            <div className="cta flex ac">
              <div className="svg">
                <ChevronsRight color="#ff3c00" />
              </div>
              <a href="#">Make Donation</a>
            </div>
            <div className="userImages flex ac">
              <img
                src="https://images.pexels.com/photos/11951275/pexels-photo-11951275.jpeg?_gl=1*1sfj03n*_ga*MTM0MzM5NDkzNi4xNzg4MDk5MTg5*_ga_8JE65Q40S6*czE3ODgxNjY1ODMkbzIkZzEkdDE3ODgxNjg5OTIkajIyJGwwJGgw"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/20181989/pexels-photo-20181989.jpeg?_gl=1*kvw4ve*_ga*MTM0MzM5NDkzNi4xNzg4MDk5MTg5*_ga_8JE65Q40S6*czE3ODgxNjY1ODMkbzIkZzEkdDE3ODgxNjkyNjgkajE3JGwwJGgw"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/11951275/pexels-photo-11951275.jpeg?_gl=1*1sfj03n*_ga*MTM0MzM5NDkzNi4xNzg4MDk5MTg5*_ga_8JE65Q40S6*czE3ODgxNjY1ODMkbzIkZzEkdDE3ODgxNjg5OTIkajIyJGwwJGgw"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/20181989/pexels-photo-20181989.jpeg?_gl=1*kvw4ve*_ga*MTM0MzM5NDkzNi4xNzg4MDk5MTg5*_ga_8JE65Q40S6*czE3ODgxNjY1ODMkbzIkZzEkdDE3ODgxNjkyNjgkajE3JGwwJGgw"
                alt=""
              />
            </div>
            <p>Active Doners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
