import {ScaledSheet} from 'react-native-size-matters';
// import { colors } from '../../utils'

export const styles = ScaledSheet.create({
  loginButton: {
    height: '120@ms',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '20@ms',
  },
  button: {
    height: '45@ms',
    borderRadius: '7@ms',
    width: '30%',
    backgroundColor: '#3D5A80',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: '25@ms',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: '20@ms',
    color: 'white',
    fontWeight: 'bold',
  },
});
