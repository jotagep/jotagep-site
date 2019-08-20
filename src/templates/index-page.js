import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

import style from './index-page.module.scss';

const IndexPage = ({ data, pageContext }) => {
    //const thisData = data.indexData.frontmatter;

    return (
        <Layout />
    );
}

export default IndexPage;

// export const pageQuery = graphql``
