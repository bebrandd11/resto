import React from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

//Icon Path
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const List = ({navigation}) => {
  const renderMainView = () => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {renderHeaderView()}
          {renderBody()}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderHeaderView = () => {
    return (
      <View style={styles.mainHeaderContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={25} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>ListScreen</Text>
          <View />
        </View>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ReduxData')}>
          <Text>REDUX SCREEN</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return renderMainView();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a3daff',
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
  btnView: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  btn: {
    backgroundColor: '#1ec0ff',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default List;
