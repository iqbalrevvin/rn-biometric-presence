import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import Routes from './src/Routes';
import { Persistor, Store } from './src/Services/Redux/store';
import { toastConfig } from '~Components/Toast/toast.config';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <Routes />
          <Toast config={toastConfig} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
