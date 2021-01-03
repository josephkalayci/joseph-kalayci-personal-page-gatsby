import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import MarkdownView from 'react-showdown';
import Img from 'gatsby-image';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',

    lineHeight: '18pt',
    padding: 16,
  },

  subHeading: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: '14pt',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '11pt',
  },
  highlight: {
    color: '#0079AD',
    cursor: 'pointer',
  },
  profileImageStyle: { width: 250, marginLeft: 'auto', marginRight: 'auto' },
}));

const ProfileCard = ({ biography, profileImage }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Img
        className={classes.profileImageStyle}
        alt='Joseph Kalayci profile'
        fluid={profileImage}
      />

      <Typography className={classes.subHeading} component='div'>
        {biography.heading}
      </Typography>
      <Typography className={classes.text} component='div'>
        <MarkdownView
          markdown={biography.biography}
          options={{ tables: true, emoji: true }}
        />

        <Link
          to='contact'
          spy={true}
          smooth={true}
          className={classes.highlight}
          tabIndex='0'
        >
          {`Let's make something special.`}
        </Link>
      </Typography>
    </div>
  );
};

export default ProfileCard;
