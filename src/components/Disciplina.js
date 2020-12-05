import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Disciplina({ disciplina }){
    return(
        <View style={styles.container}>
            <Text style={styles.point}>.</Text>
            <Text style={styles.disciplina}>{ disciplina }</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    point: {
        fontSize: 30
    },
    disciplina: {
        fontSize: 14
    }
});
