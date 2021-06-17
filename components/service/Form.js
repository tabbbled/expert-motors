import React, { useState, useEffect } from 'react'

import styled from 'styled-components';


import { Title, Text } from '../Global'

import { Paper, TextField, Button } from '@material-ui/core';

import { sendLead } from '../../utils/getData';

const FormWrapper = styled(Paper)`
background-color: ${props => props.theme.palette.primary.main};
color: white;
padding: 30px;
border-radius: 20px;
max-width: 420px;
position: sticky;
top: 0;
`

const Input = styled(TextField)`
width: 100%;
margin-bottom: 1em;
.MuiFilledInput-input{
    & :-webkit-autofill {
        border-radius: 20px;
    }
    
}


.MuiFilledInput-root {
    border-radius: 20px;
    background-color: white!important;
    ${props => props.multiline && "min-height: 6em;"}

}

.MuiFilledInput-underline {
    & :before, :after {
        border: none!important;
    }
}
`

let Send = styled(Button)`
width: 100%;
padding: 0.7em;
color: white;
background-color: #F25050;
text-transform: initial;
font-size: 1.2em;
border-radius: 20px;
& :hover {
    background-color:  #b91027
} 
`

export default function Form({ service }) {

    const [name, nameSet] = useState("");
    const [phone, phoneSet] = useState("");
    const [auto, autoSet] = useState("");
    const [comments, commentsSet] = useState("");
    const [buttonDisable, buttonDisableSet] = useState(true);
    const [sent, sentSet] = useState(false);


    let handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                nameSet(e.target.value)
                break;
            case "phone":
                if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(e.target.value) === true || e.target.value === "") {
                    phoneSet(e.target.value)
                }
                break;
            case "auto":
                autoSet(e.target.value)
                break;
            case "comments":
                commentsSet(e.target.value)
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (phone.length > 9 && name.length > 1) {
            buttonDisableSet(false)
        } else {
            buttonDisableSet(true)
        }

    }, [phone, name])

    let handleSend = async () => {
        let data = {
            "name": name,
            "phone": phone,
            "auto": auto,
            "comments": comments,
            "service": service
        }
        try {
            await sendLead(data);
            sentSet(true)
        } catch (error) {
            console.log(error)
        }



    }


    return (
        <React.Fragment>
            {!sent && <FormWrapper>
                <Title align="center" size="2em" sizeMob="1.5em" weight="bold">Узнайте стоимость пригона авто</Title>
                <Input name="name" value={name} label="Имя" type="fname" variant="filled" color="primary" required onChange={handleChange} />
                <Input name="phone" value={phone} label="Телефон" type="tel" variant="filled" color="primary" required onChange={handleChange} />
                <Input name="auto" value={auto} label="Укажите желаемые авто" variant="filled" color="primary" multiline onChange={handleChange} />
                <Input name="comments" value={comments} label="Комментарии" variant="filled" color="primary" multiline onChange={handleChange} />
                <Send disabled={buttonDisable} variant="filled" onClick={handleSend}>Отправить заявку</Send>
            </FormWrapper>}
            {sent && <FormWrapper>
                <Title align="center" size="2em" sizeMob="1.5em" weight="bold">Заявка принята</Title>
                <Text align="center" size="1.5em" weight="bold">Ожидайте, скоро с вами свяжутся</Text>
            </FormWrapper>}
        </React.Fragment>
    )
}
