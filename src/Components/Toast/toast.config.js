import React from 'react';
import { BaseToast, ErrorToast, InfoToast } from 'react-native-toast-message';
import styles from './toast.style';

/*
  1. Create the config
*/
export const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: (props) => (
      <BaseToast
        {...props}
        style={styles.toastStyle('success')}
        text1Style={styles.text1}
        text2Style={styles.text2}
        />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: (props) => (
      <ErrorToast
        {...props}
        style={styles.toastStyle('error')}
        text1Style={styles.text1}
        text2Style={styles.text2}
        />
    ),
    info: (props) => (
      <InfoToast
        {...props}
        style={styles.toastStyle('info')}
        text1Style={styles.text1}
        text2Style={styles.text2}
        />
    ),

};
