import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerView: {
      marginTop: 10,
      paddingHorizontal: 20,
    },
    editIcon: {
        position: 'absolute',
        top: 55,
        right: 40,
    },
    img: {
      width: 100,
      height: 100,
      borderRadius: 50,
      alignSelf: 'center',
    },
    imgText1: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 10,
    },
    infoView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    icon: {
      paddingRight: 10,
      color: '#383A3F',
    },
    infoBoxView: {
      flexDirection: 'row',
      height: 65,
    },
    infoBox: {
      flex: 1,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderRightWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      borderColor: '#c9d6de',
    },
    infoText: {
      fontSize: 12,
    },
    userMenuView: {
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    menuView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    userMenuIcon: {
      color: '#F16B6F',
      marginRight: 20,
    },
  });