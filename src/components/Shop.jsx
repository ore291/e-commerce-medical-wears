import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  padding: 20px 60px;
  ${mobile({ padding: "30px auto" })}
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 20px auto;
  ${mobile({ flexDirection: "column" })}
`;

const SecondaryHeader = styled.h2`
    text-transform: uppercase;
    font-size: 24px;
    margin: 30px auto;
    padding: 10px 60px
`;

const ShopItem = styled.div`
    &:first-child {
        grid-row: 1/3;
        grid-column:1/2
    }
    &:nth-child(2) {
        grid-column:2/3;
        grid-row: 1/1.5
    }
    &:nth-child(3) {
        grid-row: 1/3;
        grid-column:3/4
    }
    &:nth-child(4) {
        grid-row: 1.5/3;
        grid-column:1/2
    }
    &:last-child {
        grid-column:3/4;
        grid-row: 2/3
    }
`;

function Shop() {
    return (
        <Container>
            <SecondaryHeader>Shop</SecondaryHeader>
            <Grid>
                <ShopItem>1</ShopItem>
                <ShopItem>2</ShopItem>
                <ShopItem>3</ShopItem>
                <ShopItem>4</ShopItem>
                <ShopItem>5</ShopItem>
            </Grid>
        </Container>
    )
}

export default Shop