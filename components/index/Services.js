/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import Link from 'next/link'

import { Section, Title, Text, GridItem, devices } from '../Global'
import Stars from '../general/Stars'
import { MenuProps, OutlinedInput, Select, Button, Card, CardActions, CardContent, Checkbox, ListItemText, FormControl, InputLabel, MenuItem } from '@material-ui/core';

const Service = styled(Card)`
display: ${props => props.display || "flex"};
flex-direction: row;
align-items: center;
padding: 1em 2em;
margin-bottom: 1em;
border-radius: 20px;

@media ${devices.mobile} {
    flex-direction: column;
    width: 300px;
    margin: 0 auto 2em;
}
`
const SectionStyled = styled(Section)`
@media ${devices.mobile} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
}
`
const ButtonContainer = styled(GridItem)`
@media ${devices.md} {
    justify-content: flex-end;
    
}
`
const Go = styled(Button)`
padding: 1em;
`
const Filter = styled(Select)`
width: 250px;

.aas {
    transform: translate(14px, -14px) scale(0.75);
}
`


import Image from 'next/image'

export default function Services({ services }) {

    // const [cities, citiesSet] = useState([])
    // const [selectedCities, selectedCitiesSet] = useState([])
    // const [shownService, shownServiceSet] = useState([])

    // useEffect(() => {
    //     let getCities = [];
    //     services.forEach(service => {
    //         getCities = [...getCities, ...service.fields.city]
    //     });
    //     citiesSet([...new Set(getCities)]);
    //     selectedCitiesSet([...new Set(getCities)]);
    // }, [])

    // const handleChange = (event) => {
    //     selectedCitiesSet(event.target.value);
    // };



    return (
        <React.Fragment>
            {/* <SectionStyled maxWidth="lg" >
                <Service>
                    <FormControl variant="outlined">
                        <InputLabel id="demo-mutiple-checkbox-label">Города</InputLabel>
                        <Filter
                            labelId="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            multiple
                            label="Города"
                            value={selectedCities}
                            onChange={handleChange}
                            input={<OutlinedInput label="Города" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {cities.map((city) => (
                                <MenuItem key={city} value={city}>
                                    <Checkbox checked={selectedCities.indexOf(city) > -1} color="primary" />
                                    <ListItemText primary={city} />
                                </MenuItem>
                            ))}
                        </Filter>
                    </FormControl>
                </Service>
            </SectionStyled> */}

            <SectionStyled maxWidth="lg" id="list">
                {services.map((service, index) => {
                    return (
                        // <Service key={index} display={service.fields.city.some(item => selectedCities.includes(item)) ? "flex" : "none"}>
                        <Service key={index} >
                            <GridItem item xs={12} md={1}>
                                {service.fields.avatar && <Image src={service.fields.avatar[0]?.url} width={100} height={100} objectFit="contain" />}
                            </GridItem>
                            <GridItem item xs={12} md={6} pl="2em" paddingMob="unset" justifyMob="center">
                                <CardContent>
                                    <Text gutterBottom size="1.5em" weight="bold" alignMob="center">
                                        {service.fields.name}
                                    </Text>
                                    <Text variant="body2" color="textSecondary" component="p" alignMob="center">
                                        {service.fields.city?.map((city, index, arr) => {
                                            return `${city}${index + 1 === arr.length ? '' : ', '}`
                                        })}

                                    </Text>
                                </CardContent>
                            </GridItem>
                            <GridItem item xs={12} md={2}>
                                <Stars rating={service.fields.rating} />
                            </GridItem>
                            <ButtonContainer item xs={12} md={3} marginMob="2em 0 0" flex >
                                <CardActions>
                                    <Link href={`/services/${service.fields.id}`}>
                                        <Go variant="outlined" size="small" color="primary" component="a">
                                            Выбрать специалиста
                                        </Go>
                                    </Link>
                                </CardActions>
                            </ButtonContainer>

                        </Service>
                    )
                })}
            </SectionStyled >
        </React.Fragment >
    )
}
