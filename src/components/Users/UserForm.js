import React from 'react';
import {
    Button,
    Form,
    Input,
    Select,
    Grid,
} from "semantic-ui-react";
import { Link } from 'react-router-dom';

const genderOptions = [
    { key: 'm', text: 'Masculino', value: 'Masculino' },
    { key: 'f', text: 'Femenino', value: 'Femenino' },
    { key: 'o', text: 'Otro', value: 'Otro' },
    { key: 'no', text: 'Prefiero no darlo', value: 'NoDice' },
];

const FormToSignIn = (
    <Grid centered>
        <Grid.Column width={8}>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field required
                        id='form-input-control-first-name'
                        control={Input}
                        label='Nombre'
                        placeholder='Nombre'
                    />
                    <Form.Field required
                        id='form-input-control-last-name'
                        control={Input}
                        label='Apellido'
                        placeholder='Apellido'
                    />
                    <Form.Field
                        control={Select}
                        options={genderOptions}
                        label={{ children: 'Género', htmlFor: 'form-select-control-gender' }}
                        placeholder='Género'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                    />
                </Form.Group>
                <Form.Field required
                    id='form-input-user'
                    control={Input}
                    label='Usuario'
                    placeholder='elefantina.shop@gmail.com'
                />

                <Form.Field required
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    placeholder='elefantina.shop@gmail.com'
                />
                <Form.Field required
                    id='form-input-password'
                    control={Input}
                    label='Contraseña'
                    placeholder='password123'
                />

                <Form.Checkbox
                    inline
                    label='I agree to the terms and conditions'
                    required
                />


                <Link to={`/home`}><Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Entrar'

                /></Link>
            </Form>
        </Grid.Column>
    </Grid>
);

function UserForm() {
    return (
        <div>
            {FormToSignIn}
        </div>
    )
}

export default UserForm