import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import React, { Component } from 'react'
import get from 'lodash/get'

import ItemDetail from '../components/ItemDetail'
import Layout from '../components/Layout'
import RecommendedCard from '../components/RecommendedCard'

class BlogIndex extends Component {
  render () {
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title='Apparel Pharaoh | Detail'
        />
        <main>
          <ItemDetail />
          <RecommendedCard />
        </main>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            cover {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
