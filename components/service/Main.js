import { Card } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { devices, Text, Title, GridItem } from '../../components/Global'
import Image from 'next/image'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import PublicIcon from '@material-ui/icons/Public';

import Stars from '../general/Stars'

const Block = styled(Card)`
display: ${props => props.display || "flex"};
flex-direction: row;
align-items: center;
padding: 0.5em 1em;
margin-bottom: 1em;
border-radius: 20px;
width: 100%;


@media ${devices.mobile} {
    flex-wrap: wrap;
    margin: 0 auto 2em;
    justify-content: center;
}
`

const GridMobCenter = styled(GridItem)`
@media ${devices.small} {
    display: flex;
    justify-content: center;
    padding: 0;

    .address {
        max-width: 33ch;
        text-align: center;
    }
}
`

export default function Main({ data: { address, avatar, name, rating, youtube, fb, insta, phone, site } }) {

    return (
        <React.Fragment>
            <Block>
                <GridMobCenter item xs={12} sm={6} md={3}>
                    {avatar && <Image src={avatar[0]?.url} width={200} height={100} objectFit="contain" objectPosition="center" />}
                </GridMobCenter>
                <GridMobCenter item xs={12} sm={6} md={6} marginSmall="1em 0 0">
                    <GridMobCenter container pl="2em">
                        <GridMobCenter item xs={12}>
                            <Title size="1.5em" mb="0">{name}</Title>
                        </GridMobCenter>
                        <GridMobCenter item xs={12}>
                            <Text size="0.8em" className="address">{address}</Text>
                        </GridMobCenter>
                        <GridMobCenter item xs={4} flex justify="space-between" mt="0.5em">
                            {fb && <a href={fb} target="_blank" rel="noreferrer">
                                <FacebookIcon color="secondary" />
                            </a>}
                            {insta && <a href={insta} target="_blank" rel="noreferrer">
                                <InstagramIcon color="secondary" />
                            </a>}
                            {youtube && <a href={youtube} target="_blank" rel="noreferrer">
                                <YouTubeIcon color="secondary" />
                            </a>}
                        </GridMobCenter>
                    </GridMobCenter>
                </GridMobCenter>
                <GridItem item md={3} marginMob="3em 0 1em">
                    <Stars rating={rating} size="1.5em" subtitle="0.7em" />
                </GridItem>
            </Block>
            <GridItem container>
                <GridItem item flex direction="row" alignItems="center" marginMob="0 0 1em 0">
                    <PhoneOutlinedIcon color="secondary" />
                    <Text ml="0.5em" mr="2em" size="0.9em" color="#313131">{phone}</Text>
                </GridItem>
                <GridItem item flex direction="row" alignItems="center" marginMob="0 0 1em 0">
                    <PublicIcon color="secondary" />
                    <Text ml="0.5em" mr="2em" size="0.9em" color="#313131"><a href={site} target="_blank" rel="noreferrer">{site}</a></Text>
                </GridItem>


            </GridItem>
        </React.Fragment>
    )
}
