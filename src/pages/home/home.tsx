import "./home.scss";
import Meta from "../../components/Meta/Meta";
import socials from "./socials.json";
import Social from "../../components/Social/Social";

const Home = () => {
  return (
    <div className="home">
      <Meta title="Ryan Tan" description="My first website" />
      <div className="home__body">
        <div className="socials">
          <div className="panel__header">
            socials
          </div>
          {
            socials.map(({ label, link, color, icon }) =>
              <Social label={label} link={link} color={color} icon={icon} />
            )
          }
        </div>
        <div className="medium">
          <div className="panel__header">
            blog (medium.com)
          </div>
        </div>
      </div>
      <div className="home__preface">
        <img src="/asset/handwriting.svg" alt={`
          hi!

          thank you for visiting my website.
          my handwriting is not good.
          i remember my handwriting was the best when i was in primary school years ago.
          and then i got overwhelmed with work and had to write as fast as i can.
          which led to my handwriting getting shittier because i was getting more used to writing fast.
          and then during college, i barely touched a pen/pencil other than for exams. which meant my handwriting got even shittier.
          anyways...
          
          my name is ryan, i'm a software engineer from Malaysia.
          it all started when i took a software engineering course and now i'm here working with cool people.
          i really like playing video games, and watching movies, tv shows and anime during my free time.
          
          the point of this website is basically to showcase my front-end skills, and to provide a place for my socials, blog, and portfolio.
          
          if you're reading this far, i appreciate you. i know my handwriting is not great but who knows, maybe it will improve in the future?
          
          best wishes friends,
          ryan
        `} />
      </div>
    </div>
  );
}

export default Home;
