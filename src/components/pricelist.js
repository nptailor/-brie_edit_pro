import React from 'react'
import RichText from '../components/richText'
import styled from 'styled-components';

const PriceListContainer = styled.section`
max-width: 1000px;
margin: 30px auto;
padding: 10px;
font-size: 1.3rem;
line-height: 1;
`
const Container = styled.div`
display: flex;
@media only screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`
const PriceDescriptionContainer = styled.div`
 margin: 30px 10px 10px 10px;
 padding: 20px;
 border-radius: 6px;
 border-top: 5px solid black;
 box-shadow:3px 3px 5px 6px #ccc;
 transition: 0.5s ease-in-out;
 .price{
    background-color: orange;
    text-align: center;
    margin-left: -20px;
    margin-right: -20px;
    padding-top: 10px 
    padding-bottom: 30px;
 }
 &:hover{
    //  margin-top: 5px 10px 10px 10px;
    background-color: black;
    color: white;
    border-top: 5px solid orange;
 }

`



const PriceList = (props) => {
    return (
        <PriceListContainer>
            <RichText render={props.content.primary.section_title} />
            <Container>
                {props.content.fields.map(data => {
                    return (
                        <PriceDescriptionContainer key={data.price_list_title}>

                            <RichText render={data.price_list_type} />
                            <RichText render={data.price_list_title} />
                            <div className="price">
                                <RichText render={data.price} />
                            </div>
                            <RichText render={data.price_list_description} />
                        </PriceDescriptionContainer>
                    )
                })}
            </Container>
        </PriceListContainer>
    )
}

export default PriceList;