import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from 'gatsby'
import "./layout.css"
import styled from 'styled-components'

const navigationQuery = graphql`
{
  prismic {
    allNavigations {
      edges {
        node {
          branding
          navigation_links {
            navigation_link {
              ... on PRISMIC_Page {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Contact_page {
                page_heading
                _meta {
                  uid
                }
              }
            }
            label
          }
        }
      }
    }
  }
}
`

const NavLink = styled.div`
margin: auto 0px;
 a{
   color: white;
   text-decoration:none;
   margin-right: 16px;
   font-weight: bold;
   &:hover{
    color: orange;
   }
   &:active{
     color: orange;
   }
 }
`;

const Header = styled.header`
  display: flex;
  background-color: black;
  height: 66px;
  padding: 0px 16px;
  box-sizing: border-box;
  position: sticky;
  font-family:  Arial, Helvetica, sans-serif;
`;

const NavLinks = styled.div`
  margin-left: auto;
  display:flex;
`

const Branding = styled.div`
margin: auto 16px;
color: orange;
font-weight: bold;
font-size: 1.3rem;
a{
  text-decoration: none;
  color: orange;
  &:hover{
    color: white;
   }
   &:active{
     color: white;
   }

}
`
const Main = styled.section`
font-family:  Arial, Helvetica, sans-serif;
`
const Layout = ({children}) => {
  return (
    <>
      <Header>
        <StaticQuery query={`${navigationQuery}`} render={(data) => {
           const doc= data.prismic.allNavigations.edges[0]
           if(!doc) return null
           else{
          return (
            <>
              <Branding>
              <Link to='/'>
                {data.prismic.allNavigations.edges[0].node.branding}
              </Link>
              </Branding>
              <NavLinks>
                {data.prismic.allNavigations.edges[0].node.navigation_links.map((link) => {
                  return (
                    <NavLink key={link.navigation_link._meta.uid}>
                      <Link to={link.navigation_link._meta.uid}>
                        {link.label}
                      </Link>
                    </NavLink>)
                })}
              </NavLinks>
            </>
          )}
        }} />
      </Header>
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
