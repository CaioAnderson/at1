import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Cabecalho from './src/components/Cabecalho';
import Corpo from './src/components/Corpo';
import Disciplina from './src/components/Disciplina';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho nome="Caio Anderson" curso="Sistemas de Informação" />
        <Corpo />
      </View>
      <View style={styles.areaDisciplinas}>
        <Text style={styles.title}>Disciplinas matriculadas:</Text>
        <Disciplina disciplina="Projetos de interface para dispositivos móveis." />
        <Disciplina disciplina="Estrutura de dados." />
        <Disciplina disciplina="Probabilidade e Estatistica." />
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    marginTop: 40
  },
  header : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  areaDisciplinas: {
    marginTop: 50
  }
});
