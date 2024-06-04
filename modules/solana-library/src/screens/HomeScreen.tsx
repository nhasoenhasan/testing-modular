import React, { useRef } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native'

const HomeScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text }>{'HOME SCREEN'}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', alignItems: 'center', alignContent: 'center', flex: 1
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default HomeScreen;