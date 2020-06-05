import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'

const HeroWrapper = styled.section`
background: url('${props => props.backgroundImage}');
background-size: cover;
background-repeat: no-repeat;
margin: 0px auto;
height:100vh;
display:flex;
align-items: center;
text-align:center;
    div{
        color:white;
        max-width: 1200px;
        margin: 0px auto;
        padding: 10px;

        .hero-title{
            font-size: 80px;
            line-height: 1;
            margin-bottom: 30px;
            @media only screen and (max-width: 600px) {
                font-size: 60px;
              }
        }

        .hero-content{
            font-size: 20px;
            line-height: 1;
        }

        span{
            margin-bottom: 30px
        }
    }
`

const Hero = (props) => {
    console.log(props.content.primary.background_image.url)
    const homeTitle = props.content.primary.hero_title;
    const homeContent = props.content.primary.hero_content;

    return (
        <HeroWrapper backgroundImage={props.content.primary.background_image.url}>
            <div>
                <span className="hero-title">{homeTitle}</span>
            </div>
        </HeroWrapper>
    )
}

export default Hero;