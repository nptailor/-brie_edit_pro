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
    margin-bottom: 30px;
    margin-top: 30px;
    border-radius: 20px;
    box-shadow:3px 3px 5px 6px #ccc;
    border-top: 5px solid black;
`

const CallForACtionContent = styled.div`
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

// const Button = styled.button`
// display: inline-block;
// width: 180px;
// height: 60px;
// cursor: pointer;
// background: transparent;
// border: 1px solid orange;
// outline: none;
// transition: 0.5s ease-in-out;
// border-radius: 4px;
  
//  a{
//      text-decoration: none;
//  }
//  &:hover{
//     transition: 1s ease-in-out;
//     background: orange;
//     color: white;
//     svg {
//         stroke-dashoffset: -480;
//       }

//  }
// `

const Button = styled.button`
    border-radius: 4px;
    background: transparent
    border: none;
    text-align: center;
    border: 1px solid orange;
    padding: 16px;
    width: 220px;
    transition: all 0.5s;
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.3s;
    background-color: transparent;
  
    a{
        text-decoration: none;
        color: orange;
    }

  &:after {
    content: '»';
    position: absolute;
    opacity: 0;  
    top: 14px;
    right: -20px;
    transition: 0.5s;
    color: white;
  }
  
  &:hover{
    background-color:orange;
    padding-right: 24px;
    padding-left:8px;
    a{
        color: white;
    }
  }
  
  &:hover:after {
    opacity: 1;
    right: 10px;
  }
`


const CallForAction = (props) => {
    return (
        <CallForActionGrid>
            <RichText render={props.content.primary.section_title} />
            {props.content.fields.map(data => {
                return (
                    <CallToActionBlock key={data.call_to_action_title}>
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
                            <span><Link to={`/${data.call_to_action_button_link._meta.uid}`}>
                                {data.button_label}
                            </Link></span>

                        </Button>
                    </CallToActionBlock>
                )
            })}
        </CallForActionGrid>
    )
}

export default CallForAction;