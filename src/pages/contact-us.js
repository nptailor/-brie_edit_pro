import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import RichText from '../components/richText'
import styled from 'styled-components'

export const query = graphql`
{
    prismic {
      allContact_pages {
        edges {
          node {
            page_heading
            page_description
            button_text
            form_field {
              field_name
              field_type
              required
            }
          }
        }
      }
    }
  }
`

const Form = styled.form`
padding:10px;
background-color: #eee;
margin-top: 20px;
`
const Button = styled.button`
background-color: orange;
padding:10px;
border-radius: 6px;
color: white;
font-weight: 600;
cursor: pointer
display: inline-block;
 &:hover{
     color: orange;
     background-color: #eee;
     border: solid 2px orange;
 }

`

const PageWrapper = styled.section`
max-width:1000px;
margin: 0px auto;
padding: 10px;
font-size: 1.3rem;
line-height: 1;
`

const FormItem = styled.div`
margin-bottom: 20px;
h4{
  margin-bottom: 10px;
}
input{
  width:100%;
  border-radius: 6px;
  height: 40px;
  border: #eee;
  &:focus{
    outline: 2px solid #4DC5D6 ;
  }
}

textarea{
  width:100%;
  border-radius: 6px;
  height: 80px;
  border: #eee;
  &:focus{
    outline: 2px solid #4DC5D6 ;
  }
}
`

const ContactUs = ({ data }) => {
  return (
    <Layout>
      <PageWrapper>
        <RichText render={data.prismic.allContact_pages.edges[0].node.page_heading} />
        <RichText render={data.prismic.allContact_pages.edges[0].node.page_description} />
        <Form 
        name="contact-us"
        methods="POST"
        data-netlify="true"
        onSubmit={e => window.alert("Thanks for getting in touch")} >
          <input type="hidden" value="contact-us" name="form-name"/>
          {
            data.prismic.allContact_pages.edges[0].node.form_field.map(content => {
              if (content.field_type === 'textarea') {
                return (
                  <FormItem>
                    <h4>{content.field_name}</h4>
                    <textarea
                      required={content.required === 'Yes'}
                    />
                  </FormItem>
                )
              }
              else {
                return (
                  <FormItem>
                    <h4>{content.field_name}</h4>
                    <input type={content.field_type} required={content.required === 'Yes'} />
                  </FormItem>
                )

              }
            })
          }
          <Button>
            {data.prismic.allContact_pages.edges[0].node.button_text}
          </Button>
        </Form>
      </PageWrapper>
    </Layout>
  )
}

export default ContactUs;