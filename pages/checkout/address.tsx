import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import Cookies from 'js-cookie';
import { useForm } from "react-hook-form";

import { ShopLayout } from '../../components/layouts';
import { countries } from "../../utils";
import { CartContext } from '../../context';


type FormData = {
    firstName: string;
    lastName : string;
    address  : string;
    address2?: string;
    zip      : string;
    city     : string;
    country  : string;
    phone    : string;
}


const getAddressFromCookies = ():FormData => {
    return {
        firstName : Cookies.get('firstName') || '',
        lastName  : Cookies.get('lastName') || '',
        address   : Cookies.get('address') || '',
        address2  : Cookies.get('address2') || '',
        zip       : Cookies.get('zip') || '',
        city      : Cookies.get('city') || '',
        country   : Cookies.get('country') || countries[16].code,
        phone     : Cookies.get('phone') || '',
    }
}

const AddressPage = () => {

    const router = useRouter();
    const { updateAddress } = useContext(CartContext);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
       defaultValues: getAddressFromCookies()
    });

    useEffect(() => {
        reset(getAddressFromCookies());     
    }, [reset]);
    
    const onSubmitAddress = (data: FormData) => {
        updateAddress(data);
        router.push('/checkout/summary');
    };

    return (
        <ShopLayout title="Dirección" pageDescription="Confirmar dirección del destino">
            <form onSubmit={ handleSubmit( onSubmitAddress ) }>
                <Typography variant="h1" component='h1'>Dirección</Typography>

                <Grid container spacing={ 2 } sx={{ mt: 2 }}>
                    <Grid item xs={12} sm={ 6 }>
                        <TextField
                            label='Nombre'
                            variant="filled"
                            fullWidth 
                            { ...register('firstName', {
                                required: 'Este campo es requerido'
                            })}
                            error={ !!errors.firstName }
                            helperText={ errors.firstName?.message }
                        />
                    </Grid>
                    <Grid item xs={12} sm={ 6 }>
                        <TextField
                            label='Apellido'
                            variant="filled"
                            fullWidth
                            { ...register('lastName', {
                                required: 'Este campo es requerido'
                            })}
                            error={ !!errors.lastName }
                            helperText={ errors.lastName?.message }
                        />
                    </Grid>

                    <Grid item xs={12} sm={ 6 }>
                        <TextField
                            label='Dirección'
                            variant="filled"
                            fullWidth
                            { ...register('address', {
                                required: 'Este campo es requerido'
                            })}
                            error={ !!errors.address }
                            helperText={ errors.address?.message }
                        />
                    </Grid>
                    <Grid item xs={12} sm={ 6 }>
                        <TextField 
                            label='Dirección 2 (opcional)' 
                            variant="filled" 
                            fullWidth 
                            { ...register('address2')}
                        />
                    </Grid>

                    <Grid item xs={12} sm={ 6 }>
                        <TextField 
                            label='Código Postal'
                            variant="filled"
                            fullWidth
                            { ...register('zip', {
                                required: 'Este campo es requerido'
                            })}
                            error={ !!errors.zip }
                            helperText={ errors.zip?.message }
                        />
                    </Grid>
                    <Grid item xs={12} sm={ 6 }>
                        <TextField
                            label='Ciudad'
                            variant="filled"
                            fullWidth
                            { ...register('city', {
                                required: 'Este campo es requerido'
                            })}
                            error={ !!errors.city }
                            helperText={ errors.city?.message }
                        />
                    </Grid>
                
                    <Grid item xs={12} sm={ 6 }>
                        <FormControl variant="filled" fullWidth error={ !!errors.country }>
                            <InputLabel>País</InputLabel>
                            <Select
                                native
                                defaultValue={ getAddressFromCookies().country }
                                { ...register('country', {
                                    required: 'Este campo es requerido'
                                })}
                            >
                                {
                                    countries.map( country => (
                                        <option key={ country.code } value={ country.code }>
                                            { country.name }
                                        </option>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={ 6 }>
                        <TextField
                            label='Teléfono'
                            variant="filled"
                            fullWidth
                            { ...register('phone', {
                                required: 'Este campo es requerido'
                            })}
                            error={ !!errors.phone }
                            helperText={ errors.phone?.message }
                        />
                    </Grid>

                </Grid>

                <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
                    <Button type="submit" color="secondary" className="circular-btn" size="large">
                        Revisar pedido
                    </Button>
                </Box>
            </form>
        </ShopLayout>
    )
}

export default AddressPage;