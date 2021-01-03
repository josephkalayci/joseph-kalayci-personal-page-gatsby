import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import backgroundImage from '../../assets/images/homeBackground.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { profile } from '../../constants/personalInfo';
import { Link } from 'react-scroll';
import Img from 'gatsby-image';
import { SpaceCanvas } from '../SpaceCanvas';
import Navbar from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: 'calc(100vh + 53px)',
    textAlign: 'center',
    color: '#fff',
    // paddingBottom: 50,
  },
  gridContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  bgImage: {
    height: '100%',
    zIndex: '-1',
  },
  text: {
    fontSize: '32pt',
    lineHeight: '36pt',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16pt',
      lineHeight: '20pt',
    },
  },
  highlight: {
    color: theme.palette.secondary.main,
    fontFamily: 'Raleway',
    fontWeight: 700,
    fontSize: '32pt',
    lineHeight: '36pt',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16pt',
      lineHeight: '20pt',
    },
  },
  button: {
    color: '#fff',
    borderColor: '#fff',
    textTransform: 'none',
    marginTop: 20,
    fontSize: '19px',

    '&:hover': {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    '& .MuiSvgIcon-root': {
      transition: 'all 0.3s ease',
    },
    '&:hover .MuiSvgIcon-root': {
      transform: 'rotate(90deg)',
    },
  },
}));

const Home = ({ bgImage, heading }) => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const [isSticky, setSticky] = React.useState(false);
  const stickyRef = React.useRef(null);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    stickyRef.current.getBoundingClientRect().y < 0
      ? setSticky(true)
      : setSticky(false);
  };
  return (
    <section className={classes.root} id='home'>
      <Img className={classes.bgImage} alt={'hero image'} fluid={bgImage} />
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.gridContainer}
      >
        <Grid item>
          {/* TODO:Component doest update state properly. Temporarily force to re-render on screen size changes */}
          {/* TODO:Consider to replace with another animated component */}
          <SpaceCanvas
            background='transparent'
            key={isSmallScreen}
            touch={isSmallScreen ? false : true}
            style={{
              //marginBottom: 16,
              height: 325,
              width: 325,
              marginTop: -63,
            }}
          />
        </Grid>
        <Grid item>
          <Typography component='h1' className={classes.text}>
            {"Hello, I'm "}
            <Typography component='span' className={classes.highlight}>
              {`${profile.name} ${profile.surname}`}
            </Typography>
            {'.'}
            <br />
            {heading}
          </Typography>

          <Button
            component={Link}
            to='about'
            spy={true}
            smooth={true}
            variant='outlined'
            color='secondary'
            endIcon={<ArrowForwardIcon />}
            size='large'
            className={classes.button}
          >
            View my work
          </Button>
        </Grid>
      </Grid>
      <div
        ref={stickyRef}
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      />
      <Navbar sticky={isSticky} />
    </section>
  );
};

export default Home;
