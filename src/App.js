import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from './components/Title';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
});

export default () => (
    <View style={styles.wrapper}>
        <Text>The application has started succesfully!</Text>
        <Title />
    </View>
);
