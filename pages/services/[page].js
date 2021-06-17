/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import getData from '../utils/getData'
import Head from 'next/head'
import styled from 'styled-components'
import { devices, Text, Title, GridItem, Section } from '../../components/Global'
import { getServices } from '../../utils/getData'
import Link from 'next/link'
import { Link as Scroller } from 'react-scroll'
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Main from '../../components/service/Main'
import Additional from '../../components/service/Additional'
import Form from '../../components/service/Form'
import Footer from '../../components/general/Footer'

import Image from 'next/image'

let Container = styled.div`

`

const ButtonStyled = styled(Button)`
color: black;
font-size: 14px;
text-transform: inherit;
padding: 0.5em;
background-color: white;

& :hover {
    background-color: white;
}
`

const MobileButton = styled(GridItem)`
width: 100vw;
position: fixed;
bottom: 0;
padding: 1em;

@media ${devices.sm} {
    display: none;
}
`


const Icon = styled(ArrowDownwardIcon)`
margin-right: 0.3em;
`
const Product = ({ data }) => {

    return (
        <React.Fragment>
            <MobileButton container justify="flex-end">
                <ButtonStyled variant="outlined" color="primary" component={Scroller} to="form" smooth={true}><Icon color="primary" />Заполнить заявку</ButtonStyled>
            </MobileButton>
            <Section maxWidth="lg">
                <Head>
                    <title>{data.name} - Expert motors</title>
                    <meta name="description" content={`Expert motors - ${data.name} - сервис по пригону автомобилей`} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <GridItem container justify="space-between" justifyTab="center" alignItems="center">
                    <GridItem item xs={5} mb="2em" flex justifyTab="center">
                        <Link href="/"><a>
                            <Image src="/logo.webp" width={256 * 0.5} height={169 * 0.5} />
                        </a>
                        </Link>
                    </GridItem>
                </GridItem>
                <GridItem container direction="row" directionMob="column" justify="space-between" justifyMob="center">
                    <GridItem item lg={7}>
                        <GridItem container direction="row">
                            <Main data={data} />
                            <Additional data={data} />
                        </GridItem>
                    </GridItem>
                    <GridItem item lg={4} marginTab="40px auto 30px" mb="50px" id="form">
                        <Form service={data.name} />
                    </GridItem>
                </GridItem>

            </Section>
            <Footer />
        </React.Fragment>
    )
}

export default Product;

export async function getStaticProps(context) {


    let data = await getServices(context.params.page);

    return {
        props: {
            data,
        },
        revalidate: 10
    };
}

export async function getStaticPaths() {

    let data = await getServices();


    const services = [];
    data.map(service => {
        return services.push({ params: { page: `${service.fields.id}` } })
    })
    return {
        paths: services,
        fallback: false
    };
}