import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import {names} from "./names";

export default function App() {

  //names: ['Leslie', 'Selena']
  const namesAsObjects = names.map((item) => {
    return {name: item};
  });

// namesAsObject = [{name: 'Leslie'}, {name: 'Selena'}]

// item = {names: 'leslie'}
// item.names
// 'leslie'

  const renderName = ({item}) => {
    return <text>{item.name}</text>;
  };

  return <FlatList 
  data = {namesAsObjects} 
  renderItem={renderName} 
  keyExtractor={item => item.name}
  />;
}
  

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
