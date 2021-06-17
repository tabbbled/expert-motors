
import React from 'react'
import { Section, Text, GridItem, Wrapper } from '../Global'



export default function Footer() {
    return (
        <Wrapper color="#3072FF">
            <Section maxWidth="lg">
                <GridItem container padding="1em 0">
                    <Text color="white" size="0.8em">
                        © 2021, Expert Motors <br></br> All rights reserved
                    </Text>

                </GridItem>
            </Section>
        </Wrapper>
    )
}

