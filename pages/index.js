/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import getData, { getServices } from '../utils/getData'
import { Wrapper, Title, Text, GridItem } from '../components/Global'

import Hero from '../components/index/Hero'
import Services from '../components/index/Services'
import About from '../components/index/About'
import Footer from '../components/general/Footer'





export default function Home({ data, services }) {
  return (
    <React.Fragment >
      <Head>
        <title>{data.meta_title}</title>
        <meta name="description" content={data.meta_description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper >
        <Hero data={data} />
        <Services services={services} />
        <About data={data.body} />
        <Footer />
      </Wrapper>
    </React.Fragment>
  )
}

export const getStaticProps = async () => {

  let content = await getData();
  let services = await getServices();
  return {
    props: {
      data: content,
      services
    },
    revalidate: 60
  }
}
