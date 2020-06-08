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
margin-top: 20px;
`
const Button = styled.button`
display: inline-block;
width: 180px;
height: 60px;
cursor: pointer;
background: transparent;
border: 1px solid orange;
outline: none;
transition: 0.3s;
border-radius: 4px;
  
 a{
     text-decoration: none;
 }
 &:hover{
    transition: 1s ease-in-out;
    background: orange;
    color: white;
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
  height: 50px;
  border: 5px solid orange;
  transition: 0.2s ease-in-out;
  padding:6px;
  &:focus{
    border: 1px solid orange ;
  }
  &:hover{
    border: 1px solid orange ;
  }
}

textarea{
  width:100%;
  border-radius: 6px;
  height: 90px;
  border: 5px solid orange;
  transition: 0.2s ease-in-out;
  padding:6px;
  &:focus{
    border: 1px solid orange ;
  }
  &:hover{
    border: 1px solid orange ;
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