import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>存在しないページです。</p>
    <Link to="/">トップに戻る。</Link> <br />
  </Layout>
);

export default NotFoundPage;
