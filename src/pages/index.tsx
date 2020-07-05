import React from 'react';
import { Link } from 'gatsby';
import { Typography } from '@material-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="sample" />
    <Typography variant="h6">新着</Typography>
    <Typography variant="h6">おすすめ</Typography>
  </Layout>
);

export default IndexPage;
