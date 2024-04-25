import "./experience.scss";
import Helmet from "react-helmet";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

const Experience = () => {
  const markdown = `
  ## My experience

  - Studied at **[INTI International College Subang](https://newinti.edu.my/)**
    - Took Foundation in **Business & IT** in **2018** (1 year)
    - Took a Bachelor's Degree in **Computer Science** from **2019 to 2021** (3 years)
    - My majors are **Software Engineering, Multimedia & Game Development**
  - _Final Year Project_ - **E-Learning Management System** with **[DoerHRM](https://www.doerhrm.com/)**

  | Responsibility       | Description                                                                              |
  | -------------------- | ---------------------------------------------------------------------------------------- |
  | Database Design      | Designing the entire database **structure** and **make changes** as the project develops |
  | Back-end Development | Developing various **classes** and **functions** to interact with the database using PHP |
  | Testing              | Testing new features **manually** as they get developed                                  |

  ### WeTix

  - Worked for **[WeTix](https://github.com/wetix)** as a **Junior Software Engineer** from **Jan 2022** - **Nov 2022**
  - WeTix Website (https://wetix.my)

  | Responsibility        | Description                                                                                                                                                                                                  |
  | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | Front-end Development | Helping develop the front end of the website using [\`svelte-kit\`](https://kit.svelte.dev/) and focus on any design/functional flaws or errors, with **responsiveness** and **simplicity** taken into account |
  | Reactive Development  | Using [\`rxjs\`](https://rxjs.dev/) to handle dataflow in the website                                                                                                                                          |
  | Unit testing          | Writing **automatic tests** for existing code/Svelte components using [\`jest\`](https://jestjs.io/) and [\`@testing-library\`](https://testing-library.com/)                                                    |

  #### WeTix Mobile (in various apps like TNG eWallet, Boost, & Senheng)

  | Responsibility        | Description                                                                                |
  | --------------------- | ------------------------------------------------------------------------------------------ |
  | Front-end Development | Helping develop the front-end modules of the website using [\`svelte\`](https://svelte.dev/) |
  | Reactive Development  | Using [\`rxjs\`](https://rxjs.dev/) to handle dataflow in the website                        |

  #### WeTix API (Back-end)

  | Responsibility       | Description                                                                                 |
  | -------------------- | ------------------------------------------------------------------------------------------- |
  | Developing endpoints | Creating new endpoints in the REST API and GraphQL API for use in WeTix products            |
  | Database design      | Alter the database design based on new features that are being introduced into the products |

  ### GfK - An NIQ company

  - Currently working for [GfK](https://www.gfk.com/) as a **Junior Software Engineer** from **Nov 2022**

  #### Retail Intelligence

  | Responsibility       | Description                                                        |
  | -------------------- | ------------------------------------------------------------------ |
  | Back-end Development | Helped maintain back end APIs using Java Spring Boot               |
  | Database Management  | Updated PostgreSQL tables and add indexes for tables with big data |
  | Database Design      | Redesigned some tables that store big data                         |
  | Pipeline             | Helped design new pipelines                                        |

  #### Platform

  | Responsibility              | Description                                                      |
  | --------------------------- | ---------------------------------------------------------------- |
  | Front-end Development       | Helped maintain and create React components for the platform     |
  | Front-end component testing | Wrote unit tests for newly developed components                  |
  | CI/CD                       | Helped set up testing coverage with SonarQube and contract tests |
  `;

  return (
    <div className="experience">
      <Helmet>
        <title>ryan tan - experience</title>
        <meta name="description" content="ryan tan - experience" />
      </Helmet>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default Experience;
