import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');

export const styles = ScaledSheet.create({
  container: {
    width,
    height,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundView: {
    position: 'absolute',
    width,
    height,
    backgroundColor: '#fff',
    // opacity: 0.3
  },
  loader: {
    width: '200@ms',
    height: '200@ms'
  }
});
