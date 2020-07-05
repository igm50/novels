import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu, Search } from '@material-ui/icons';

export const Header = ({ siteTitle }) => (
  <Toolbar
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <IconButton>
      <Menu />
    </IconButton>
    <Typography
      align="center"
      component="h2"
      variant="h4"
      noWrap
      style={{ flex: 1 }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        {siteTitle}
      </Link>
    </Typography>
    <IconButton>
      <Search />
    </IconButton>
  </Toolbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
