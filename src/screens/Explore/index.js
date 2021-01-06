import React, {useState} from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Animated,
  Image,
  Modal,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

import {styles} from './style';
import StarRating from '../../components/StarRating';
import {markers, initialMapState} from '../../helper/jsonData';

//Icon Path
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Explore = (props) => {
  const [state, setState] = useState(initialMapState);
  const [modal, setModal] = useState(false);

  const pressHandler = (id) => {
    console.log(id);
    setModal((prevModal) => {
      return prevModal.filter((item) => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 21.2281,
          longitude: 72.8286,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        >
        <Marker coordinate={{latitude: 21.2281, longitude: 72.8286}} title="Set Location" description="Here I am." />
      </MapView>
      {/* <AntDesign name="arrowleft" size={20} style={styles.arrowLeft}/> */}
      <View style={styles.searchBox}>
        <Image source={require('../../../assets/banners/google-maps.png')} style={{width: 25, height: 25, marginRight: 10}} />
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{flex: 1, padding: 0}}
        />
        <Ionicons name="ios-search" size={20} style={{alignSelf: 'center'}} />
      </View>
      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={50}
        style={styles.chipScrollView}
        contentContainerStyle={{paddingRight: 20}}>
        {state.categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.chipItem}
            onPress={() => setModal(true)}>
            {category.icon}
            <Text>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{position: 'absolute', bottom: 8, right: 8}}>
        <TouchableOpacity style={styles.locBtn}>
          <MaterialIcons name="my-location" size={25} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.locBtn,{backgroundColor: '#0080ff'}]}>
          <MaterialCommunityIcons name="directions" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" transparent={true} visible={modal}>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          {state.markers.map((marker, index) => (
            <View key={index} style={styles.card}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Ionicons
                name="ios-close-circle"
                size={30}
                style={styles.closeIcon}
                onPress={() => {setModal(!modal);}}
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardTitle}>
                  {marker.title}
                </Text>
                <StarRating ratings={marker.rating} reviews={marker.reviews} />
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
                <View style={styles.button}>
                  <TouchableOpacity
                    style={[
                      styles.signIn,
                      {borderColor: '#ff6347', borderWidth: 1},
                    ]}>
                    <Text style={[styles.textSign, {color: '#ff6347'}]}>
                      Order Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </Modal>
    </View>
  );
};

export default Explore;

// {setModal(!modal);}
// pressHandler(marker.id)