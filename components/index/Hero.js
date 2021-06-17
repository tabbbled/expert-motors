
import React from 'react'
import { Section, Title, Text, GridItem } from '../Global'
import Image from 'next/image'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { Link as Scroller } from 'react-scroll'

const ButtonStyled = styled(Button)`
color: black;
font-size: 14px;
text-transform: inherit;
`


export default function Hero({ data }) {
    return (
        <Section maxWidth="lg">
            <GridItem container justify="space-between" alignItems="center">
                <GridItem item xs={5} >
                    <Image src="/logo.webp" width={256 * 0.6} height={169 * 0.6} />
                </GridItem>
                <ButtonStyled variant="outlined" color="primary" component={Scroller} to="list" smooth={true} >Подбор компании</ButtonStyled>
            </GridItem>
            <GridItem container mt="2em" justify="space-between" alignItems="center" paddingMob="0 5%;" marginMob="30px 0 50px">
                <GridItem item lg={5} >
                    <Title size="4.5em" sizeMob="2.5em" height="1em" weight="bold" alignMob="center">{data.title}</Title>
                    <Text size="1.5em" height="2em" heightMob="1.5em" alignMob="center">{data.subtitle}</Text>
                </GridItem>

                <GridItem item lg={6} hide="tablet">
                    <Image src="/hero.svg" width={638.88} height={583.5} />
                </GridItem>
            </GridItem>
        </Section>
    )
}

