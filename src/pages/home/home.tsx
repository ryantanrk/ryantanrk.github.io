import "./home.scss";
import Meta from "../../components/Meta";

const Home = () => {
  return (
    <div className="home">
      <Meta title="Ryan Tan" description="My first website" />
      <div className="home-body">
        <div className="socials">
          <div className="panel__header">
            socials
          </div>
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
