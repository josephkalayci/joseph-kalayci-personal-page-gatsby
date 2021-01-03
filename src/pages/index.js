import './App.css';
import React from 'react';

import Home from '../components/Views/Home';
import About from '../components/Views/About';
import Contact from '../components/Views/Contact';
import Footer from '../components/Views/Footer';
import Portfolio from '../components/Views/Portfolio';
import AOS from 'aos';
import { graphql, useStaticQuery } from 'gatsby';
const App = () => {
  const data = useStaticQuery(query);
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <main>
        <Home
          bgImage={data.strapiHomeSection.hero.childImageSharp.fluid}
          heading={data.strapiHomeSection.heading}
        />
        <About
          profileImage={
            data.strapiAboutSection.profileImage.childImageSharp.fluid
          }
          biography={data.strapiAboutSection.biography}
          skills={data.strapiAboutSection.skills}
        />
        <Portfolio projects={data.strapiPortfolioSection.projects} />

        <Contact />
      </main>
      <Footer
        githubUrl={data.strapiContactInfo.githubURL}
        youtubeURL={data.strapiContactInfo.youtubeURL}
        linkedInURL={data.strapiContactInfo.linkedInURL}
      />
    </React.Fragment>
  );
};

const query = graphql`
  query MyQuery {
    strapiAboutSection {
      skills {
        level
        name
      }
      biography {
        biography
        heading
      }
      profileImage {
        childImageSharp {
          fluid(maxWidth: 2489, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    strapiContactInfo {
      email
      githubURL
      linkedInURL
      youtubeURL
    }
    strapiHomeSection {
      heading
      hero {
        childImageSharp {
          fluid(maxWidth: 2489, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    strapiPortfolioSection {
      projects {
        description
        liveURL
        title
        galery {
          url
        }
        techs
      }
    }
  }
`;

export default App;
