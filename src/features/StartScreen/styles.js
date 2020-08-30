import {ScaledSheet} from 'react-native-size-matters';
export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#14213D',
  },
  header: {
    alignItems: 'center',
    margin: '10@ms',
  },
  headerText: {
    color: 'white',
    fontSize: '60@ms',
    fontFamily: 'Nanum Pen Regular',
  },
  animation: {
    height: '300@vs',
    width: '200@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationBox: {
    marginVertical: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  instruction: {
    alignItems: 'center',
    flex: 2,
    justifyContent: 'center',
  },
  instructiontext: {
    fontSize: '18@ms',
    color: 'white',
  },
  instructionTextTitle: {
    margin: '8@ms',
    color: '#EE6C4D',
    fontSize: '20@ms',
    fontWeight: 'bold',
  },
  buttonBox: {flex: 1},
  button: {
    margin: '10@ms',
    backgroundColor: '#fff',
    elevation: 4,
    height: '50@ms',
    width: '100@ms',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '5@ms',
  },
  txt: {
    fontSize: '20@ms',
  },
});
