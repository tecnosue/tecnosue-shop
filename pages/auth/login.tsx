import NextLink from 'next/link';
import { useContext,  useState } from 'react';
import { useForm } from "react-hook-form";

import { ErrorOutline } from '@mui/icons-material';
import { Box, Button, Chip, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../../components/layouts'
import { validations } from '../../utils';
import {tecnosueApi} from '../../api';
import { AuthContext } from '../../context';
import { useRouter } from 'next/router';

type FormData = {
  email: string,
  password: string,
};

const LoginPage = () => {

    const router = useRouter();
    const { loginUser} = useContext( AuthContext);

    const { register, handleSubmit,  formState: { errors } } = useForm<FormData>();
    const [showError, setShowError] = useState(false);

    const onLoginUser = async ({email, password }: FormData) => {

        setShowError(false);

        const isValidLogin = await loginUser( email, password );

        if ( !isValidLogin ) {
            setShowError(true);
            setTimeout(() =>{ setShowError(false) }, 3000);
            return;

        }

        


        //TODO : volver a la pantalla que estaba el usuario
        router.replace('/');
    }

    return (
      <AuthLayout title={'Ingresar'}>
        <form onSubmit={ handleSubmit(onLoginUser)}>
            <Box sx={{ width: 350, padding:'10px 20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h1' component="h1">Iniciar Sesión</Typography>
                        <Chip
                            label="Usuario/contraseña incorrecto"
                            color="error"
                            icon={ <ErrorOutline />}
                            className="fadeIn"
                            sx={{ display: showError ? 'flex': 'none'}}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        type='email' 
                        label="Correo" 
                        variant="filled" 
                        fullWidth
                        {...register('email',{
                            required: 'este campo es requerido',
                            validate: validations.isEmail


                        })}
                        error={ !!errors.email}
                        helperText={ errors.email?.message}
                        
                        
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                        label="Contraseña" 
                        type='password' 
                        variant="filled" 
                        fullWidth 
                        {...register('password', {
                            required: 'Este campo es requerido',
                            minLength: { value: 6, message:'Minimo 6 caracteres'}
                        })}
                        error={ !!errors.password}
                        helperText={ errors.password?.message}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type="submit" color="secondary" className='circular-btn' size='large' fullWidth>
                            Ingresar
                        </Button>
                    </Grid>

                    <Grid item xs={12} display='flex' justifyContent='end'>
                        <NextLink href="/auth/register" passHref>
                            <Link underline='always'>
                                ¿No tienes cuenta?
                            </Link>
                        </NextLink>
                    </Grid>
                </Grid>
            </Box>
        </form>
      </AuthLayout>
    )
}

export default LoginPage