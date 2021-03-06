import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    /*
    .########...#######..########.########..#######..##.....##..######..##.....##.########.########.########.....######..########.##....##.##.......########..######.
    .##.....##.##.....##....##.......##....##.....##.###...###.##....##.##.....##.##.......##..........##.......##....##....##.....##..##..##.......##.......##....##
    .##.....##.##.....##....##.......##....##.....##.####.####.##.......##.....##.##.......##..........##.......##..........##......####...##.......##.......##......
    .########..##.....##....##.......##....##.....##.##.###.##..######..#########.######...######......##........######.....##.......##....##.......######....######.
    .##.....##.##.....##....##.......##....##.....##.##.....##.......##.##.....##.##.......##..........##.............##....##.......##....##.......##.............##
    .##.....##.##.....##....##.......##....##.....##.##.....##.##....##.##.....##.##.......##..........##.......##....##....##.......##....##.......##.......##....##
    .########...#######.....##.......##.....#######..##.....##..######..##.....##.########.########....##........######.....##.......##....########.########..######.
    */
    panel: {
      padding: 20,
      backgroundColor: '#fff',
      paddingTop: 20,
    },
    header: {
      // height: 330,
      backgroundColor: '#fff',
      shadowColor: '#333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      // marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      color: 'gray',
      height: 30,
      // marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      //backgroundColor: '#ff6347',
      backgroundColor: '#0080ff',
      alignItems: 'center',
      marginVertical: 8,
    },
    panelButtonTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    /*
    .##.....##.########....###....########..########.########......######..########.##....##.##.......########..######.
    .##.....##.##.........##.##...##.....##.##.......##.....##....##....##....##.....##..##..##.......##.......##....##
    .##.....##.##........##...##..##.....##.##.......##.....##....##..........##......####...##.......##.......##......
    .#########.######...##.....##.##.....##.######...########......######.....##.......##....##.......######....######.
    .##.....##.##.......#########.##.....##.##.......##...##............##....##.......##....##.......##.............##
    .##.....##.##.......##.....##.##.....##.##.......##....##.....##....##....##.......##....##.......##.......##....##
    .##.....##.########.##.....##.########..########.##.....##.....######.....##.......##....########.########..######.
    */
    mainHeaderContainer: {
      backgroundColor: '#0080ff',
      paddingVertical: 10,
      paddingHorizontal: 10,
      height: 100,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
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
    /*
    .####.##.....##....###.....######...########.....######..########.##....##.##.......########..######.
    ..##..###...###...##.##...##....##..##..........##....##....##.....##..##..##.......##.......##....##
    ..##..####.####..##...##..##........##..........##..........##......####...##.......##.......##......
    ..##..##.###.##.##.....##.##...####.######.......######.....##.......##....##.......######....######.
    ..##..##.....##.#########.##....##..##................##....##.......##....##.......##.............##
    ..##..##.....##.##.....##.##....##..##..........##....##....##.......##....##.......##.......##....##
    .####.##.....##.##.....##..######...########.....######.....##.......##....########.########..######.
    */
    img: {
      position: 'absolute',
      width: 100,
      height: 100,
      borderRadius: 50,
      alignSelf: 'center',
      top: -50,
    },
    cameraView: {
      // position: 'absolute',
      backgroundColor: '#fff',
      width: 43,
      height: 43,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      elevation: 5,
      top: 10,
      left: 205,
    },
    imgText: {
      textAlign: 'center',
      paddingTop: 15,
      fontSize: 18,
      fontWeight: 'bold',
    },
    /*
    .########.########.##.....##.########.####.##....##.########..##.....##.########.....######..########.##....##.##.......########
    ....##....##........##...##.....##.....##..###...##.##.....##.##.....##....##.......##....##....##.....##..##..##.......##......
    ....##....##.........##.##......##.....##..####..##.##.....##.##.....##....##.......##..........##......####...##.......##......
    ....##....######......###.......##.....##..##.##.##.########..##.....##....##........######.....##.......##....##.......######..
    ....##....##.........##.##......##.....##..##..####.##........##.....##....##.............##....##.......##....##.......##......
    ....##....##........##...##.....##.....##..##...###.##........##.....##....##.......##....##....##.......##....##.......##......
    ....##....########.##.....##....##....####.##....##.##.........#######.....##........######.....##.......##....########.########
    */
    mainTextInputContainer: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    textInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    borderRight: {
      borderRightWidth: 1,
      marginHorizontal: 15,
      height: 30,
    },
});