import React from 'react';
import { StyleSheet } from 'react-native';
import { AuthContextProvider } from './context/AuthContext';
import { AuthNavigation } from './navigation/AuthNavigation';

export default function App() {
    return (
        <AuthContextProvider>
            <AuthNavigation />
        </AuthContextProvider>
    );
}

const styles = StyleSheet.create({
    container: {},
});
