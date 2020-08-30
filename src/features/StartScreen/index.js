import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

export default (StartScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={'#92B6D4'} opacity={0.95} />
      <View style={styles.header}>
        <Text style={styles.headerText}>DiceRoll</Text>
      </View>

      <View style={styles.animationBox}>
        <LottieView
          source={require('../../assets/animation/start_screen_animation.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
      <View style={styles.instruction}>
        <Text style={[styles.instructionTextTitle]}>Instructions to Play:</Text>
        <Text style={styles.instructiontext}>Roll Dice</Text>
        <Text style={styles.instructiontext}>Memorize</Text>
        <Text style={styles.instructiontext}>Guess</Text>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Level1')}>
          <Text style={styles.txt}>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
