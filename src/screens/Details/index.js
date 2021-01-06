import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

//Icon Path
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Details = ({route, navigation}) => {
  const data = route.params;

  const [resturent, setResturant] = useState();
  useEffect(() => {
    console.log("route data",data)
    fetch('http://192.168.1.8:3000/resto').then((data) => {
      data.json().then((result) => {
        setResturant(result);
        console.log('result', result);
      });
    });
  }, []);

  return (

    <View style={styles.container}>
      {data ?
      <>
      <View style={styles.mainHeaderContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={25} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>DetailsScreen</Text>
          <View />
        </View>
      </View>
      <Text>{data.name}</Text>
      <Text>{data.surename}</Text>
      <Text>{data.email}</Text>
      <Text>{data.address}</Text>
      </>
    : <ActivityIndicator />   }
      <View style={styles.listWrapper}>
        <Text style={styles.row}>id</Text>
        <Text style={styles.row}>name</Text>
        <Text style={styles.row}>email</Text>
        <Text style={styles.row}>address</Text>
      </View>
      <FlatList
        data={resturent}
        renderItem={({item}) => {
          return (
            <View style={styles.listWrapper}>
              <Text style={styles.row}>{item.id}</Text>
              <Text style={styles.row}>{item.name}</Text>
              <Text style={styles.row}>{item.email}</Text>
              <Text style={styles.row}>{item.address}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  mainHeaderContainer: {
    backgroundColor: '#0080ff',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  btnText: {
    backgroundColor: '#88dba3',
    paddingVertical: 10,
  },
  listWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 0.5,
  },
  row: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    flex: 1,
  },
});

export default Details;
