import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import CostumThemeProvider from '../../src/constants/theme';
import './index.css';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta name='title' content='Joseph Kalayci' />
        <meta name='description' content='Joseph Kalayci personal webpage' />
        <meta
          name='keywords'
          content='joseph, kalayci, javascript, react, react native, redux, node.js, developer, full stack  '
        />
        <meta name='language' content='English' />
        <meta name='author' content='joseph kalayci' />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <CostumThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {props.children}
      </CostumThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
