import React from 'react'
import {styles} from '../screens/Explore/style';

//Icon Path
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Images = [
    { image: require("../../assets/banners/food-banner1.jpg") },
    { image: require("../../assets/banners/food-banner2.jpg") },
    { image: require("../../assets/banners/food-banner3.jpg") },
    { image: require("../../assets/banners/food-banner4.jpg") },
    { image: require("../../assets/banners/food-banner5.jpg") },
];

export const markers = [
    {
      coordinate: {
        latitude: 22.6293867,
        longitude: 88.4354486,
      },
      title: "Amazing Food Place",
      description: "This is the best food place",
      image: Images[0].image,
      rating: 4,
      reviews: 99,
      id: '1',
    },
    {
      coordinate: {
        latitude: 22.6345648,
        longitude: 88.4377279,
      },
      title: "Second Amazing Food Place",
      description: "This is the second best food place",
      image: Images[1].image,
      rating: 5,
      reviews: 102,
      id: '2',
    },
    {
      coordinate: {
        latitude: 22.6281662,
        longitude: 88.4410113,
      },
      title: "Third Amazing Food Place",
      description: "This is the third best food place",
      image: Images[2].image,
      rating: 3,
      reviews: 220,
      id: '3',
    },
    {
      coordinate: {
        latitude: 22.6341137,
        longitude: 88.4497463,
      },
      title: "Fourth Amazing Food Place",
      description: "This is the fourth best food place",
      image: Images[3].image,
      rating: 4,
      reviews: 48,
      id: '4',
    },
    {
      coordinate: {
        latitude: 22.6292757,
        longitude: 88.444781,
      },
      title: "Fifth Amazing Food Place",
      description: "This is the fifth best food place",
      image: Images[4].image,
      rating: 4,
      reviews: 178,
      id: '5',
    },
];

export const initialMapState = {
    markers,
    categories: [
      {
        name: 'Fastfood Center',
        icon: <MaterialCommunityIcons name="food-fork-drink" size={18} style={styles.chipsIcon}/>
      },
      {
        name: 'Restaurant',
        icon: <Ionicons name="ios-restaurant" size={18} style={styles.chipsIcon}/>
      },
      {
        name: 'Dineouts',
        icon: <Ionicons name="md-restaurant" size={18} style={styles.chipsIcon}/>
      },
      {
        name: 'Snacks Corner',
        icon: <MaterialCommunityIcons name="food" size={18} style={styles.chipsIcon}/>
      },
      {
        name: 'Hotel',
        icon: <Fontisto name="hotel" size={18} style={styles.chipsIcon}/>
      },
    ],
  };