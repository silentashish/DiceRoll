import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  headerView: {
    marginTop: '5@ms',
    // backgroundColor: '#92B6D4',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  diceImage: {
    height: '130@ms',
    width: '130@ms',
    alignSelf: 'center',
  },
  optionDice: {
    height: '130@ms',
    width: '130@ms',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceView: {
    height: '50%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: '45@ms',
    fontFamily: 'Nanum Pen Regular',
  },
  scoreView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: '20@ms',
  },
  score: {
    height: '45@ms',
    width: '45%',
    backgroundColor: '#EE6C4D',
    borderRadius: '5@ms',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10@ms',
    flexDirection: 'row',
  },
  headingText: {
    color: 'white',
    fontSize: '16@ms',
    fontWeight: 'bold',
  },
  valueText: {
    color: 'white',
    fontSize: '16@ms',
    fontWeight: 'bold',
  },
  loader: {
    width: '200@ms',
    height: '200@ms',
    alignSelf: 'center',
  },
  optionButton: {
    height: '70%',
    width: '70%',
    backgroundColor: 'white',
    borderRadius: '5@ms',
    opacity: 0.1,
  },
  optionsView: {
    width: '80%',
    alignSelf: 'center',
  },
  optionView2: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  subHeading: {
    color: '#EE6C4D',
    fontSize: '22@ms',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  subHeading2: {
    color: '#92B6D4',
    fontSize: '22@ms',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: '20@ms',
  },
  instructionView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10@ms',
  },
  instruction: {
    marginHorizontal: '30@ms',
    fontSize: '16@ms',
    paddingTop: '10@ms',
    textAlign: 'center',
    color: '#ffffff',
  },
  specialInstruction: {
    fontSize: '18@ms',
  },
  instruction2: {
    fontSize: '20@ms',
    alignSelf: 'center',
    marginTop: '30@ms',
    fontWeight: 'bold',
    color: 'white',
  },
  animationBox: {
    marginVertical: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    height: '100@vs',
    width: '100@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
