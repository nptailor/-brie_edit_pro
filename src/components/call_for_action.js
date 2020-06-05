import React from 'react'
import RichText from '../components/richText'
import styled from 'styled-components'
import { Link } from 'gatsby'

const CallForActionGrid = styled.section`
    max-width: 1000px;
    margin: 30px auto;
    padding: 10px;
    font-size: 1.3rem;
    line-height: 1;
`

const CallToActionBlock = styled.section`
    padding: 20px;
    background-color: #eee;
    margin-bottom: 30px;
    margin-top: 30px;
    border-radius: 20px;
`

const CallForACtionContent =styled.div`
display:flex;
 img{
     height: 100px;
     width:100px;
     margin: auto 10px;
 }
 @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    margin: 20px 0px;
  }
`

const Button = styled.button`
background-color: orange;
padding:10px;
border-radius: 6px;
color: white;
display: inline-block;
font-weight: 600;
cursor: pointer;
 a{
     text-decoration: none;
 }
 &:hover{
     color: orange;
     background-color: #eee;
     border: solid 2px orange;
 }
`


const CallForAction = (props) => {
    return (
        <CallForActionGrid>
            <RichText render={props.content.primary.section_title} />
            {props.content.fields.map(data => {
                return (
                    <CallToActionBlock>
                        <CallForACtionContent>
                            <div>
                                <RichText render={data.call_to_action_title} />
                                <RichText render={data.call_to_action_description} />
                            </div>
                            <>
                                <img src={data.call_to_action_image.url} alt="video" />
                            </>
                        </CallForACtionContent>
                        <Button>
                            <Link to={`/${data.call_to_action_button_link._meta.uid}`}>
                                {data.button_label}
                            </Link>
                        </Button>
                    </CallToActionBlock>
                )
            })}
        </CallForActionGrid>
    )
}

export default CallForAction;