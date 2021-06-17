
import React from 'react'
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LanguageIcon from '@material-ui/icons/Language';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import { Text, Title, GridItem } from '../../components/Global'
import md from '../../utils/md'
import styled from 'styled-components';
import { Chip } from '@material-ui/core';

const Point = styled(FiberManualRecord)`
font-size: 0.5em;
margin-right: 0.5em;
`

const Tag = styled(Chip)`
font-size: 1em;
margin: 0.5em 0.2em;
max-width: 88vw;
height: 2.5em;
`

export default function Additional({ data: { description, regions, tags } }) {

    console.log(md(description))
    return (
        <GridItem container direction="column" mt="2em">
            <GridItem item>
                <GridItem container direction="row" alignItems="center" mt="1em" mb="0.5em" wrap="nowrap">
                    <AssignmentIcon color="secondary" fontSize="large" />
                    <Title sizeMob="1.5em" size="2em" mb="0" ml="0.3em">О компании</Title>
                </GridItem>

                {md(description).map((point, index) => {
                    return (
                        <Text key={index} mb="1em"> {point.type === "li" ? <Point /> : ""}{point.value}</Text>
                    )
                })}

            </GridItem>
            <GridItem item>
                <GridItem container direction="row" alignItems="center" mt="1em" mb="0.5em" wrap="nowrap">
                    <LanguageIcon color="secondary" fontSize="large" />
                    <Title sizeMob="1.5em" size="2em" mb="0" ml="0.3em">Регионы пригона</Title>
                </GridItem>

                <ul>
                    {regions?.map((region, index) => {
                        return <li key={index}><Text size="1.5em" sizeMob="1.3em" weight="200">{region}</Text></li>
                    })}
                </ul>
            </GridItem>
            <GridItem item>
                <GridItem container direction="row" alignItems="center" mt="1em" mb="0.5em" wrap="nowrap">
                    <VerifiedUserIcon color="secondary" fontSize="large" />
                    <Title sizeMob="1.5em" size="2em" mb="0" ml="0.3em">Преимущества компании</Title>
                </GridItem>
                <GridItem container direction="row" alignItems="center" wrap="wrap" width="100%">
                    {tags?.map((tag, index) => {
                        return (
                            <Tag color="primary" label={tag} key={index} />
                        )
                    })}
                </GridItem>
            </GridItem>
        </GridItem>
    )
}
