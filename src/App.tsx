import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import dark from './styles/Themes/dark';
import light from './styles/Themes/light';


import React from 'react';
import Routes from './routes';

const App: React.FC = () => {

    return (
        <>
            <ThemeProvider theme={dark}>
                <GlobalStyles />
                <Routes />
            </ThemeProvider>
        </>
    );
}
export default App;