import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';

const useStyles = makeStyles((theme) => ({
  Loading: (props) => ({
    display: 'flex',
    backgroundColor: '#252934',
    height: '100vh',
    paddingTop: 48,
    justifyContent: 'center',
    alignContent: 'center',
  }),
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require('../assets/animations/loading.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.Loading}>
      {/*    <Lottie options={defaultOptions} height={200} width={200} /> */}
    </div>
  );
};

export default Loading;
