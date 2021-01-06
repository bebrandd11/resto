import React, {useState, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {styles} from './style';
import DropDown from '../../components/DropDown';

//Icon Path
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  const [data, setData] = useState({
    name: 'john',
    surename: 'doe',
    email: 'johndoe@gmail.com',
    address: 'surat',
  });

  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <TouchableOpacity
            onPress={() => {
              setCount((c) => c + 1);
            }}>
            <Text>Count +</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCount((c) => c - 1);
            }}>
            <Text>Count -</Text>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, setCount]);

  const {name, surename, email, address} = data;
  const renderMainView = () => {
    return (
      <View style={styles.container}>
        {renderHeader()}
        {renderBody()}
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.mainHeaderContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={25} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Resto HomeScreen</Text>
          <View />
        </View>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View style={styles.bodyContainer}>
        <DropDown />
        <View style={styles.textContainer}>
          <Text
            style={styles.textView}
            onPress={() => alert('Hello My Name Is John.')}>
            {name}
          </Text>
          <Text style={styles.textView}>{surename}</Text>
          <Text style={styles.textView}>{email}</Text>
          <Text style={styles.textView}>{address}</Text>
          <Text style={styles.textView}>{count}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', data)}
          style={styles.btnView}>
          <Text>Go to DetailScreen</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return renderMainView();
};

export default Home;
