import React from 'react'
import md from '../../utils/md'

import { Section, Title, Text, GridItem } from '../Global'

export default function About({ data }) {
    let body = md(data);
    return (
        <Section maxWidth="lg" mt="100px">
            <Title size="3em" weight="bold">{body[0].value}</Title>
            <GridItem item mb="3em">
                <Text mb="1em">{body[1].value}</Text>
                <Text mb="1em">{body[2].value}</Text>
            </GridItem>
            <GridItem container justify="space-between">
                <GridItem item xs={12} md={6} padding="0 1em 0 0" paddingMob="0">
                    <Title size="2em" weight="bold" mb="0.5em">{body[3].value}</Title>
                    <Text mb="1em">{body[4].value}</Text>
                    <Text mb="1em">{body[5].value}</Text>
                </GridItem>
                <GridItem item xs={12} md={6} padding="0 0 0 1em" paddingMob="0">
                    <Title size="2em" weight="bold" mb="0.5em">{body[6].value}</Title>
                    <Text mb="1em">{body[7].value}</Text>
                    <Text mb="1em">{body[8].value}</Text>
                </GridItem>
            </GridItem>
        </Section>
    )
}
