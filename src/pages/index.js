import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import { graphql } from 'gatsby'
import CallForAction from '../components/call_for_action'
import PriceList from '../components/pricelist'

export const homePageQuery = graphql`
{
  prismic {
    allHomepages {
      edges {
        node {
          body {
            ... on PRISMIC_HomepageBodyHero {
              type
              label
              primary {
                hero_content
                hero_title
                background_image
              }
            }
            ... on PRISMIC_HomepageBodyCall_to_action_grid {
              type
              label
              primary {
                section_title
              }
              fields {
                button_label
                call_to_action_button_link {
                  ... on PRISMIC_Page {
                    _meta {
                      uid
                    }
                  }
                }
                call_to_action_description
                call_to_action_image
                call_to_action_title
              }
            }
            ... on PRISMIC_HomepageBodyPrice_list {
              type
              label
              primary {
                section_title
              }
              fields {
                price
                price_list_description
                price_list_title
                price_list_type
              }
            }
          }
        }
      }
    }
  }
}
`
const IndexPage = ({ data }) => {
  const heroContent = data.prismic.allHomepages.edges[0].node.body[0];
  const callForActionGrid = data.prismic.allHomepages.edges[0].node.body[1];
  const priceContent = data.prismic.allHomepages.edges[0].node.body[2];

  return (
    <Layout>
      <SEO title="Home" />
      <Hero content={heroContent}/>
      <CallForAction content={callForActionGrid}/>
      <PriceList content={priceContent}/>
    </Layout>
  )
}

export default IndexPage
