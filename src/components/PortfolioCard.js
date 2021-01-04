import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: '63%',
    boxShadow: '0px 15px 55px 0px rgba(0, 0, 0, 0.13)',
    '&:hover $bgImage, &:focus-within $bgImage': {
      opacity: 0,
    },
    '&:hover $description, &:focus-within $description': {
      opacity: 1,
      top: '25%',
    },
    '&:hover $button, &:focus-within $button': {
      opacity: 1,
      bottom: '25%',
    },
  },

  bgImage: (props) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    //backgroundSize: '100% 100%',
    backgroundSize: 'cover',
    transition: 'opacity 0.3s',
  }),
  description: {
    position: 'absolute',
    top: 0,
    opacity: 0,
    transition: 'all 0.3s ease-in-out',
  },

  title: {
    textAlign: 'center',
    color: '#1b242f',
    fontWeight: 700,
  },
  tech: {
    color: theme.palette.secondary.dark,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    color: '#000',
    borderRadius: 0,
    transition: 'all 0.3s ease',
    opacity: 0,
    '&:hover': {
      color: '#fff',
      background: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
  },
}));

const PortfolioCard = (props) => {
  const { title, onClick, techs, ...rest } = props;
  const classes = useStyles(props);
  const data = useStaticQuery(query);

  return (
    <div className={classes.root} {...rest}>
      <div className={classes.bgImage} />
      <div className={classes.description}>
        <Typography className={classes.title} component='p' variant='h3'>
          {title}
        </Typography>
        <Typography className={classes.tech} component='p' variant='body1'>
          {techs
            .map(
              (techId) =>
                data.allStrapiSkills.nodes.find((el) => el.strapiId === techId)
                  .name
            )
            .join(' / ')}
        </Typography>
      </div>

      <Button
        color='secondary'
        variant='outlined'
        size='large'
        onClick={onClick}
        className={classes.button}
      >
        LEARN MORE
      </Button>
    </div>
  );
};

const query = graphql`
  query techQuery {
    allStrapiSkills {
      nodes {
        strapiId
        name
      }
    }
  }
`;

export default PortfolioCard;
