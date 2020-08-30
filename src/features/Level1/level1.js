import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Alert,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {AppButton} from '../../components/index';
import images from '../../utils/images';
import {styles} from './styles';
import {showToast} from '../../utils/showAlert';

import LottieView from 'lottie-react-native';
import animatedLoader from '../../assets/animation/dice.json';

const Level1 = props => {
  console.disableYellowBox = true;
  const [rolling, setRolling] = useState(false);
  const [score, setScore] = useState(0);
  const [diceRollNumber, setDiceRollNumber] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [firstRoll, setFirstRoll] = useState(true);
  const [answer, setAnswer] = useState(5);
  const [allOptions, setAllOptions] = useState([4, 3]);

  const rollDice = () => {
    if (diceRollNumber < 20) {
      setDiceRollNumber(diceRollNumber + 1);
      setRolling(true);
      setShowOptions(false);
      setFirstRoll(false);

      const answer = Math.floor(Math.random() * 6 + 1);
      setAnswer(answer);

      var array = [1, 2, 3, 4, 5, 6];
      var num1;

      array.splice(array.indexOf(answer), 1);

      //Generating random number#1
      const index1 = Math.floor(Math.random() * array.length - 1 + 1);
      num1 = array[index1];
      array.splice(array.indexOf(num1), 1);

      //Setting answers at random position
      const sortedOptions = shuffle([answer, num1]);
      setAllOptions(sortedOptions);

      setTimeout(function() {
        setRolling(false);
        setShowOptions(true);
      }, 1000);
    } else {
      limitExceed();
    }
  };

  const selectAnswer = selectedValue => {
    if (diceRollNumber < 20) {
      setDiceRollNumber(diceRollNumber + 1);
      setRolling(true);
      setShowOptions(false);
      setFirstRoll(false);

      if (selectedValue == answer) {
        showToast('Correct Answer!', 'success');
        setScore(score + 1);
      } else {
        showToast('Wrong Answer!');
      }

      const randomNumber = Math.floor(Math.random() * 6 + 1);
      setAnswer(randomNumber);

      var array = [1, 2, 3, 4, 5, 6];
      var num1;

      array.splice(array.indexOf(randomNumber), 1);

      //Generating random number#1
      const index1 = Math.floor(Math.random() * array.length - 1 + 1);
      num1 = array[index1];
      array.splice(array.indexOf(num1), 1);

      //Setting answers at random position
      const sortedOptions = shuffle([randomNumber, num1]);
      setAllOptions(sortedOptions);

      setTimeout(function() {
        setRolling(false);
        setShowOptions(true);
      }, 1000);
    } else {
      limitExceed();
    }
  };

  function shuffle(array) {
    const options = array;
    const sortedArray = [];

    //Shifting Number# 1
    const indexOne = Math.floor(Math.random() * options.length - 1 + 1);
    sortedArray.push(options[indexOne]);
    options.splice(options.indexOf(options[indexOne]), 1);

    //Shifting Number# 2
    sortedArray.push(options[0]);

    return sortedArray;
  }

  function limitExceed() {
    if (score > 6) {
      Alert.alert(
        'Congratulations',
        'You have successfully passed level 1.',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Next Level',
            onPress: () => {
              setRolling(false);
              setScore(0);
              setDiceRollNumber(0);
              setShowOptions(false);
              setFirstRoll(true);
              setAnswer(5);
              setAllOptions([4, 3]);

              props.navigation.navigate('Level2');
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      Alert.alert(
        'Alert',
        `Unfortunately you couldn't clear ${'\n'}Level 1. Lets try again!`,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              setScore(0);
              setDiceRollNumber(0);
              setFirstRoll(true);
              setShowOptions(false);
            },
          },
        ],
        {cancelable: false},
      );
    }
  }

  const renderDice = () => {
    return (
      <LottieView source={animatedLoader} autoPlay loop style={styles.loader} />
    );
  };

  const renderOptions = () => {
    return (
      <View style={styles.optionsView}>
        <View style={styles.animationBox}>
          <LottieView
            source={require('../../assets/animation/brainwave.json')}
            autoPlay
            loop
            style={styles.animation2}
          />
        </View>
        <Text style={[styles.specialInstruction, {fontWeight: 'bold'}]}>
          Use Your Brain Power
        </Text>
        <View style={styles.optionView2}>
          <ImageBackground
            source={
              (allOptions[0] == 1 && images.dice1) ||
              (allOptions[0] == 2 && images.dice2) ||
              (allOptions[0] == 3 && images.dice3) ||
              (allOptions[0] == 4 && images.dice4) ||
              (allOptions[0] == 5 && images.dice5) ||
              (allOptions[0] == 6 && images.dice6)
            }
            style={styles.optionDice}
            resizeMode="contain">
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => selectAnswer(allOptions[0])}
            />
          </ImageBackground>

          <ImageBackground
            source={
              (allOptions[1] == 1 && images.dice1) ||
              (allOptions[1] == 2 && images.dice2) ||
              (allOptions[1] == 3 && images.dice3) ||
              (allOptions[1] == 4 && images.dice4) ||
              (allOptions[1] == 5 && images.dice5) ||
              (allOptions[1] == 6 && images.dice6)
            }
            style={styles.optionDice}
            resizeMode="contain">
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => selectAnswer(allOptions[1])}
            />
          </ImageBackground>
        </View>
      </View>
    );
  };

  renderInstructions = () => {
    return (
      <View style={styles.instructionView}>
        <Text style={styles.subHeading}>Instructions To Follow</Text>
        <View style={styles.animationBox}>
          <LottieView
            source={require('../../assets/animation/instruction.json')}
            loop
            autoPlay
            style={styles.animation}
          />
        </View>
        <Text style={styles.instruction}>
          Click on Roll Dice. It will roll the dice and 2 options will appear on
          the screen.Guess the number. You will get 20 chances to roll.
          {/* Answer at
          least 7 correctly. And Boom To the next Level. */}
        </Text>
        <Text style={[styles.instruction, styles.specialInstruction]}>
          Answer at least 7 rolls correctly.{'\n'}And Boom To the next Level.
        </Text>
        <Text style={styles.instruction2}>All the Best!</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#293241'}}>
      <SafeAreaView backgroundColor={'#92B6D4'} opacity={0.95} />
      <View style={styles.headerView}>
        <Text style={styles.headerText}>DiceRoll</Text>
      </View>
      <Text style={styles.subHeading2}>LEVEL 1</Text>
      <View style={styles.scoreView}>
        <View style={styles.score}>
          <Text style={styles.headingText}>Score: </Text>
          <Text style={styles.valueText}>{score}</Text>
        </View>

        <View style={styles.score}>
          <Text style={styles.headingText}>Dice Rolled: </Text>
          <Text style={styles.valueText}>{diceRollNumber}</Text>
        </View>
      </View>
      {!firstRoll && (
        <Text style={styles.subHeading}>
          {showOptions ? 'Guess the number' : 'Rolling the dice...'}
        </Text>
      )}
      {firstRoll && renderInstructions()}

      {rolling && renderDice()}
      {showOptions && renderOptions()}
      {!rolling && <AppButton title="Roll Dice" onPress={rollDice} />}
    </View>
  );
};

export default Level1;
