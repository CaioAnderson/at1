import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Perfil from '../assets/perfil.png';

export default function Corpo(){
    return(
        <View>
            <Image source={Perfil} style={styles.perfil}/>
        </View>
    );
}

const styles = StyleSheet.create({
    perfil : {
        height: 80,
        width: 80,
        borderRadius: 50
    }
});