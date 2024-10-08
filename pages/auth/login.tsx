import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import NextLink from 'next/link';
import { getSession, signIn, getProviders, LiteralUnion, ClientSafeProvider } from 'next-auth/react';
import { useForm } from "react-hook-form";

import { ErrorOutline } from '@mui/icons-material';
import { Box, Button, Chip, Divider, Grid, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../../components/layouts';
import { validations } from '../../utils';
import { useRouter } from 'next/router';
import { BuiltInProviderType } from 'next-auth/providers';

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {

  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [showError, setShowError] = useState(false);

  const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);

  useEffect(() => {
    getProviders().then(prov => setProviders(prov));
  }, []);

  const onLoginUser = async ({ email, password }: FormData) => {
    setShowError(false);
    
    // Puedes agregar un callbackUrl si deseas redirigir a una URL específica
    const result = await signIn('credentials', { email, password, redirect: false });
    
    if (result?.error) {
      setShowError(true);
      return;
    }

    // Redirige al usuario a la página deseada (o a la página de inicio si no se especifica)
    const destination = router.query.p?.toString() || '/';
    router.push(destination);
  };

  return (
    <AuthLayout title={'Ingresar'}>
      <form onSubmit={handleSubmit(onLoginUser)}>
        <Box sx={{ width: 350, padding: '10px 20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h1' component="h1">Iniciar Sesión</Typography>
              <Chip
                label="Usuario/contraseña incorrecto"
                color="error"
                icon={<ErrorOutline />}
                className="fadeIn"
                sx={{ display: showError ? 'flex' : 'none' }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                type='email'
                label="Correo"
                variant="filled"
                fullWidth
                {...register('email', {
                  required: 'Este campo es requerido',
                  validate: validations.isEmail,
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
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
                  minLength: { value: 6, message: 'Mínimo 6 caracteres' },
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" color="secondary" className='circular-btn' size='large' fullWidth>
                Ingresar
              </Button>
            </Grid>

            <Grid item xs={12} display='flex' justifyContent='end'>
              <NextLink
                href={router.query.p ? `/auth/register?p=${router.query.p}` : '/auth/register'}
                passHref
              >
                ¿No tienes cuenta?
              </NextLink>
            </Grid>

            <Grid item xs={12} display='flex' flexDirection='column' justifyContent='end'>
              <Divider sx={{ width: '100%', mb: 2 }} />
              {providers && Object.values(providers).map((provider) => {
                if (provider.id === 'credentials') return null;

                return (
                  <Button
                    key={provider.id}
                    variant='outlined'
                    fullWidth
                    color='primary'
                    sx={{ mb: 1 }}
                    onClick={() => signIn(provider.id)}
                  >
                    {provider.name}
                  </Button>
                );
              })}
            </Grid>

          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const session = await getSession({ req });
  const { p = '/' } = query;

  if (session) {
    return {
      redirect: {
        destination: p.toString(),
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default LoginPage;
