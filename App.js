import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './src/Routes';
import { Persistor, Store } from './src/Services/Redux/store';

const App = () => (
    <ThemeProvider>
        <Provider store={Store}>
            <PersistGate loading={null} persistor={Persistor}>
                <Routes />
            </PersistGate>
        </Provider>
    </ThemeProvider>
);

export default App;
