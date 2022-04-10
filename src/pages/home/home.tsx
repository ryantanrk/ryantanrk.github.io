import "./home.scss";
import Meta from "../../components/Meta/Meta";
import socials from "./socials.json";
import Social from "../../components/Social/Social";

const Home = () => {
  return (
    <div className="home">
      <Meta title="Ryan Tan" description="My first website" />
      <div className="home-body">
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
    </div>
  );
}

export default Home;
