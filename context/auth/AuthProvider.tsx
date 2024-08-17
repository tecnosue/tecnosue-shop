import { FC, useReducer, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import { IUser } from '../../interfaces';
import { AuthContext, authReducer } from './';
import tecnosueApi from '../../axiosApi/tecnosueApi';
import Cookies from 'js-cookie';
import axios from 'axios';

export interface AuthState {
    isLoggedIn: boolean;
    user?: IUser;
}


const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined,
}


export const AuthProvider:FC<{ children: React.ReactNode }> = ({ children }) => {
    const {data, status} = useSession();
    
    const [state, dispatch] = useReducer( authReducer , AUTH_INITIAL_STATE );
    const router = useRouter();

    useEffect(() => {
      if( status === 'authenticated') {
        dispatch({ type: '[Auth] - Login', payload: data?.user as IUser})
      }
    
      
    }, [status, data])
    

    /* useEffect(() => {
        checkToken();

    }, []) */

    const checkToken = async() => {

        if( ! Cookies.get('token')) {
            return;
        }

        try {
            const { data } = await tecnosueApi.get('/user/validate-token');
            const { token, user } = data;
            Cookies.set('token', token);
            dispatch({ type: '[Auth] - Login', payload: user });
           
            
        } catch (error) {
            Cookies.remove('token');
            
        }

    }


    const loginUser = async( email: string, password: string ): Promise<boolean> => {
        try {
            const { data } = await tecnosueApi.post('/user/login', {email, password});
            const { token, user } = data;
            Cookies.set('token', token);
            dispatch({ type: '[Auth] - Login', payload: user });
            return  true;
            
        } catch (error) {
            return false;
            
        }
    }  
    
    const registerUser = async(name: string, email: string, password: string ): Promise<{hasError: boolean; message?: string}> => {
        try {
            const { data } = await tecnosueApi.post('/user/register', {name, email, password});
            const { token, user } = data;
            Cookies.set('token', token);
            dispatch({ type: '[Auth] - Login', payload: user });
            return {
                hasError: false
            }
            
        } catch (error) {
            if ( axios.isAxiosError(error)){
                return{
                    hasError: true,
                    message: error.response?.data.message

                }

            }
            return {
                hasError: true,
                message: 'No se pudo crear el usuario - intente de nuevo'

            }
            
        }

    }

    const logout = () => {
        Cookies.remove('cart');
        Cookies.remove('firstName');
        Cookies.remove('lastName');
        Cookies.remove('address');
        Cookies.remove('address2');
        Cookies.remove('zip');
        Cookies.remove('city');
        Cookies.remove('country');
        Cookies.remove('phone');
        
        signOut();
        //Cookies.remove('token');
        //router.reload();
    }
 

    return (
        <AuthContext.Provider value={{
            ...state,

            //Methods
            loginUser,
            registerUser,
            logout,

        }}>
            { children }
        </AuthContext.Provider>
    )
};