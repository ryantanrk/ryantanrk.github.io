import "./portfolio.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

const Portfolio = () => {
  const markdown = `
  # Portfolio
  - Studied at **[INTI International College Subang](https://newinti.edu.my/)**
  - Took Foundation in **Business & IT** in **2018** (1 year)
  - Took a Bachelor's Degree in **Computer Science** from **2019 to 2021** (3 years)
  - My majors are **Software Engineering, Multimedia & Game Development**
  - *Final Year Project* - **E-Learning Management System** with **[DoerHRM](https://www.doerhrm.com/)**

  Responsibility | Description
  ------------ | -------------
  Database Design | Designing the entire database **structure** and **make changes** as the project develops
  Back-end Development | Developing various **classes** and **functions** to interact with the database using PHP
  Testing | Testing new features **manually** as they get developed

  - Currently working with **[WeTix](https://github.com/wetix)** since **Jan 2022**
  - WeTix Website (https://wetix.my)

  Responsibility | Description
  ------------ | -------------
  Front-end Development | Helping develop the front end of the website using [\`svelte-kit\`](https://kit.svelte.dev/) and focus on any design flaws or errors, with **responsiveness** and **simplicity** taken into account
  Reactive Development | Using [\`rxjs\`](https://rxjs.dev/) to handle dataflow in the website
  Unit testing | Writing **automatic tests** for existing code/Svelte components using [\`jest\`](https://jestjs.io/) and [\`@testing-library\`](https://testing-library.com/)

  - WeTix Mobile (in various apps like TNG eWallet, Boost, & Senheng)

  Responsibility | Description
  ------------ | -------------
  Front-end Development | Helping develop the front-end modules of the website using [\`svelte\`](https://svelte.dev/)
  Reactive Development | Using [\`rxjs\`](https://rxjs.dev/) to handle dataflow in the website
  `;

  return (
    <div className="portfolio">
      <ReactMarkdown children={markdown}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
      />
    </div>
  );
};

export default Portfolio;