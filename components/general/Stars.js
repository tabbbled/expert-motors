
import React from 'react'
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
import { Text, GridItem } from '../Global'

const Rating = styled(StarRatings)`
width: 150px;
`
export default function Stars({ rating, size, subtitle }) {
    return (
        <GridItem container direction="row" directionMob="column" alignItems="center">
            <Rating
                rating={rating}
                starRatedColor="#FA9808"
                numberOfStars={5}
                starDimension={size || "2em"}
                starSpacing="0"
                name='rating'
            />
            <Text ml="0.5em" size={subtitle || "1em"}>({rating})</Text>
        </GridItem>
    )
}
