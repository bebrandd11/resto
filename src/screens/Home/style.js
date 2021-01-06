import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeaderContainer: {
    backgroundColor: '#3ac569',
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
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    backgroundColor: '#88dba3',
    width: 150,
    height: 150,
    margin: 5,
    lineHeight: 150,
    textAlign: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnView: {
    backgroundColor: '#88dba3',
    width: 310,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});
