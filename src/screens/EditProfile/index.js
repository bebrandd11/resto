import React, { useState } from 'react';
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';

import {styles} from './style';

//Icon Path
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const EditProfile = () => {
  const navigation = useNavigation();

  const [image, setImage] = useState(require('../../../assets/banners/6.jpg'));

  /*
  ..######.....###....##.....##.########.########.....###...
  .##....##...##.##...###...###.##.......##.....##...##.##..
  .##........##...##..####.####.##.......##.....##..##...##.
  .##.......##.....##.##.###.##.######...########..##.....##
  .##.......#########.##.....##.##.......##...##...#########
  .##....##.##.....##.##.....##.##.......##....##..##.....##
  ..######..##.....##.##.....##.########.##.....##.##.....##
  */

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      // width: 300,
      // height: 300,
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  }

  /*
  .########...#######..########.########..#######..##.....##..######..##.....##.########.########.########
  .##.....##.##.....##....##.......##....##.....##.###...###.##....##.##.....##.##.......##..........##...
  .##.....##.##.....##....##.......##....##.....##.####.####.##.......##.....##.##.......##..........##...
  .########..##.....##....##.......##....##.....##.##.###.##..######..#########.######...######......##...
  .##.....##.##.....##....##.......##....##.....##.##.....##.......##.##.....##.##.......##..........##...
  .##.....##.##.....##....##.......##....##.....##.##.....##.##....##.##.....##.##.......##..........##...
  .########...#######.....##.......##.....#######..##.....##..######..##.....##.########.########....##...
  */

  const renderInner = () => {
    return (
      <View style={styles.panel}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.panelTitle}>Upload Photo</Text>
          <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
        </View>
        <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
          <Text style={styles.panelButtonTitle}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
          <Text style={styles.panelButtonTitle}>Choose From Library</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={() => bs.current.snapTo(1)}>
          <Text style={styles.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle}></View>
        </View>
      </View>
    );
  };

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  /*
  .##.....##....###....####.##....##.##.....##.####.########.##......##
  .###...###...##.##....##..###...##.##.....##..##..##.......##..##..##
  .####.####..##...##...##..####..##.##.....##..##..##.......##..##..##
  .##.###.##.##.....##..##..##.##.##.##.....##..##..######...##..##..##
  .##.....##.#########..##..##..####..##...##...##..##.......##..##..##
  .##.....##.##.....##..##..##...###...##.##....##..##.......##..##..##
  .##.....##.##.....##.####.##....##....###....####.########..###..###.
  */

  const renderMainView = () => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <BottomSheet
            ref={bs}
            snapPoints={[330, 0]}
            renderContent={renderInner}
            renderHeader={renderHeader}
            initialSnap={1}
            callbackNode={fall}
            enabledGestureInteraction={true}
          />
              {renderHeaderView()}
          <Animated.View
            style={{
              // margin: 20,
              opacity: Animated.add(0.3, Animated.multiply(fall, 1.0)),
            }}>
            {renderImageView()}
            {renderEditTextInput()}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  /*
  .##.....##.########....###....########..########.########.
  .##.....##.##.........##.##...##.....##.##.......##.....##
  .##.....##.##........##...##..##.....##.##.......##.....##
  .#########.######...##.....##.##.....##.######...########.
  .##.....##.##.......#########.##.....##.##.......##...##..
  .##.....##.##.......##.....##.##.....##.##.......##....##.
  .##.....##.########.##.....##.########..########.##.....##
  */

  const renderHeaderView = () => {
    return (
      <View style={styles.mainHeaderContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={25} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>EditProfile</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons name="check" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  /*
  .####.##.....##....###.....######...########
  ..##..###...###...##.##...##....##..##......
  ..##..####.####..##...##..##........##......
  ..##..##.###.##.##.....##.##...####.######..
  ..##..##.....##.#########.##....##..##......
  ..##..##.....##.##.....##.##....##..##......
  .####.##.....##.##.....##..######...########
  */

  const renderImageView = () => {
    return (
      <View style={styles.mainImageContainer}>
        <Image
          source={image}
          style={styles.img}
        />
        <TouchableOpacity
          style={styles.cameraView}
          onPress={() => bs.current.snapTo(0)}>
          <Ionicons name="ios-camera-outline" size={25} color="#0080ff" />
        </TouchableOpacity>
        <Text style={styles.imgText}>John Doe</Text>
      </View>
    );
  };

  /*
  .########.########.##.....##.########.####.##....##.########..##.....##.########
  ....##....##........##...##.....##.....##..###...##.##.....##.##.....##....##...
  ....##....##.........##.##......##.....##..####..##.##.....##.##.....##....##...
  ....##....######......###.......##.....##..##.##.##.########..##.....##....##...
  ....##....##.........##.##......##.....##..##..####.##........##.....##....##...
  ....##....##........##...##.....##.....##..##...###.##........##.....##....##...
  ....##....########.##.....##....##....####.##....##.##.........#######.....##...
  */

  const renderEditTextInput = () => {
    return (
      <View style={styles.mainTextInputContainer}>
        <View style={styles.textInputContainer}>
          <FontAwesome name="user" size={25} style={{paddingHorizontal: 4}} />
          <View style={styles.borderRight}>
            <Text></Text>
          </View>
          <TextInput placeholder="First Name" />
        </View>
        <View style={styles.textInputContainer}>
          <FontAwesome name="user" size={25} style={{paddingHorizontal: 4}} />
          <View style={styles.borderRight}>
            <Text></Text>
          </View>
          <TextInput placeholder="Last Name" />
        </View>
        <View style={styles.textInputContainer}>
          <MaterialCommunityIcons name="email" size={25} style={styles.icon} />
          <View style={styles.borderRight}>
            <Text></Text>
          </View>
          <TextInput
            placeholder="Enter Your Email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.textInputContainer}>
          <MaterialIcons name="phone" size={25} style={styles.icon} />
          <View style={styles.borderRight}>
            <Text></Text>
          </View>
          <TextInput placeholder="Enter Your Number" keyboardType="numeric" />
        </View>
        <View style={styles.textInputContainer}>
          <MaterialCommunityIcons
            name="map-marker-radius"
            size={25}
            style={styles.icon}
          />
          <View style={styles.borderRight}>
            <Text></Text>
          </View>
          <TextInput placeholder="Enter Your Address" />
        </View>
        <TouchableOpacity style={styles.panelButton}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return renderMainView();
};

export default EditProfile;
