import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import MainRoutes from './main.routes';
import AuthRoutes from './auth.routes';

export interface ThemeProps{
    toggleTheme(): void;
}

const Routes : React.FC<ThemeProps> = ({ toggleTheme })=>{

    const signed : Boolean = true;

    const { colors, title } = useContext(ThemeContext);

    return signed ? <MainRoutes toggleTheme={toggleTheme} /> : <AuthRoutes />;

}

export default Routes;