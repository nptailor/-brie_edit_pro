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
 background-color: #eee;
 margin: 10px;
 padding: 20px;
 border-radius: 6px;
 .price{
    background-color: orange;
    text-align: center;
    margin-left: -20px;
    margin-right: -20px;
    padding-top: 10px 
    padding-bottom: 30px;
 }
`



const PriceList = (props) => {
    if(props.content.fields) return null
    return (
        <PriceListContainer>
            <RichText render={props.content.primary.section_title} />
            <Container>
                {props.content.fields.map(data => {
                    return (
                        <PriceDescriptionContainer>

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