import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

import NextLink from 'next/link';
import { getSession, signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { Box, Button, Chip, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../../components/layouts'
import { validations } from '../../utils';
import { ErrorOutline } from '@mui/icons-material';
import { AuthContext } from '../../context/auth';


type FormData = {
    email: string;
    password: string;
    name: string;
  };


const RegisterPage = () => {

    const router = useRouter();
    const {registerUser} = useContext(AuthContext);

    const { register, handleSubmit,  formState: { errors } } = useForm<FormData>();
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const onRegisterForm = async ({ name, email, password }: FormData) => {

        setShowError(false);
        const {hasError, message} = await registerUser(name, email, password);

        if ( hasError) {
            setShowError(true);
            setErrorMessage(message!);
            setTimeout(() =>{ setShowError(false) }, 3000);
            return;

        }

        await signIn('credentials', { email, password});



        // const destination = router.query.p?.toString() || '/';
        // router.replace(destination);
        

    }
    return (
      <AuthLayout title={'Login'}>
        <form onSubmit={ handleSubmit(onRegisterForm)}>
            <Box sx={{ width: 350, padding:'10px 20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h1' component="h1">Crear cuenta</Typography>
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
                        label="Nombre completo" 
                        variant="filled" 
                        fullWidth
                        {...register('name',{
                            required: 'este campo es requerido',
                            minLength: { value: 2, message:'Minimo 2 caracteres'}
                        })}
                        error={ !!errors.name}
                        helperText={ errors.name?.message}
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
                            Crear cuenta
                        </Button>
                    </Grid>
        
                    <Grid item xs={12} display='flex' justifyContent='end'>
                        <NextLink href={ router.query.p ? `/auth/login?p=${router.query.p}`: '/auth/login'} passHref>
                          
                                ¿Ya tienes cuenta?
                           
                        </NextLink>
                    </Grid>
                </Grid>
            </Box>
        </form>
      </AuthLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    
    const session = await getSession({ req });

    const { p = '/' } = query;

    if ( session ) {
        return {
            redirect: {
                destination: p.toString(),
                permanent: false
            }

        }
    }

    return {
        props: { }
    }
}

export default RegisterPage