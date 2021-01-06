import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Share from 'react-native-share';
import {useNavigation} from '@react-navigation/native';

import {styles} from './style';
import files from '../../../assets/filesBase64';

//Icon Path
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const navigation = useNavigation();

  const myCustomShare = async() => {
    const shareOptions = {
      message: 'This is a test message',
      url: files.image1
      //multipale files share
      // urls: [files.image1, files.image2]
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error =>', error);
    }
  };

  const renderMainView = () => {
    return (
      <View style={styles.container}>
        {renderHeader()}
        {renderUserOrder()}
        {renderUserMenu()}
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.editIcon} onPress={() => navigation.navigate('Edit')}>
          <MaterialCommunityIcons name="account-edit-outline" size={40} />
        </TouchableOpacity>
        <Image
          source={require('../../../assets/banners/6.jpg')}
          style={styles.img}
        />
        <Text style={styles.imgText1}>John Doe</Text>
        <Text style={[styles.imgText2, {textAlign: 'center'}]}>@john_doe</Text>
        <View style={{paddingVertical: 10}}>
          <View style={styles.infoView}>
            <MaterialCommunityIcons
              name="map-marker-radius"
              size={25}
              style={styles.icon}
            />
            <Text>Gujrat, India</Text>
          </View>
          <View style={styles.infoView}>
            <MaterialIcons name="phone" size={25} style={styles.icon} />
            <Text>+91-9000000009</Text>
          </View>
          <View style={styles.infoView}>
            <MaterialCommunityIcons
              name="email"
              size={25}
              style={styles.icon}
            />
            <Text>john_doe@gmail.com</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderUserOrder = () => {
    return (
      <View style={styles.infoBoxView}>
        <View style={styles.infoBox}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>$140</Text>
          <Text style={styles.infoText}>Wallet</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>12</Text>
          <Text style={styles.infoText}>Orders</Text>
        </View>
      </View>
    );
  };

  const renderUserMenu = () => {
    return (
      <View style={styles.userMenuView}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuView}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={25}
              style={styles.userMenuIcon}
            />
            <Text>Your Favorites</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>    
          <View style={styles.menuView}>
            <MaterialIcons
              name="payment"
              size={25}
              style={styles.userMenuIcon}
              />
            <Text>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {myCustomShare()}}>
          <View style={styles.menuView}>
            <Entypo name="share" size={25} style={styles.userMenuIcon} />
            <Text>Tell your Friends</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuView}>
            <MaterialCommunityIcons
              name="account-check-outline"
              size={25}
              style={styles.userMenuIcon}
            />
            <Text>Support</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuView}>
            <Feather name="settings" size={25} style={styles.userMenuIcon} />
            <Text>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return renderMainView();
};

export default Profile;