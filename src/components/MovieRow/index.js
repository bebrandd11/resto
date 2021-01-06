import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MovieRow = ({item}) => {
  return (
    <View style={styles.container}>
        <Image source={{uri: item.Poster}} style={styles.poster} />
      <Text style={styles.title}>{item.Title}</Text>
      <View style={styles.iconContainer}>
      <FontAwesome name='heart-o' size={35} color='red' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
    },
    poster: {
        height: 100,
        width: 70,
        resizeMode: 'contain',
    },
    title: {
        flex: 2,
        fontSize: 22,
        fontWeight: '300',
        marginLeft: 10,
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default MovieRow;
