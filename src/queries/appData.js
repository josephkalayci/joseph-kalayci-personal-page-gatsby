const GET_APP_DATA = `
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
      absolutePath
    }
  }
  strapiProjects {
    liveURL
    galery {
      url
    }
    title
    techs {
      level
      name
    }
  }
}

`;

export { GET_APP_DATA };
