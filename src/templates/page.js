import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import Layout from '../components/layout'
import styled from 'styled-components'


const PageContainer = styled.div`
max-width:1000px;
margin: 0px auto;
padding: 10px;
font-size: 1.3rem;
line-height: 1;
`
export const query = graphql`
query PageQuery($id : String){
    prismic {
        allPages(id: $id) {
          edges {
            node {
              page_title
              content
              _meta {
                id
                uid
              }
            }
          }
        }
      }
}
`


const Page = (props) => {
  const doc= props.data.prismic.allPages.edges[0]
  if(!doc) return null
  const title = props.data.prismic.allPages.edges[0].node.page_title;
  const page_content = props.data.prismic.allPages.edges[0].node.content;
  return (
    <>
      <Layout>
        <PageContainer>
          <RichText render={title} />
          <RichText render={page_content} />
        </PageContainer>
      </Layout>
    </>
  )
}

export default Page;