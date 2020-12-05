import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cabecalho({ nome, curso }){
    return(
        <View>
            <Text style={styles.nome}>{ nome }</Text>
            <Text style={styles.curso} >{ curso }</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    curso: {
        color: '#727171',
    }
});