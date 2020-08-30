import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  headerView: {
    height: '40@ms',
    backgroundColor: '#92B6D4',
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
    fontSize: '20@ms',
    fontWeight: 'bold',
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
    backgroundColor: '#92B6D4',
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
  optionView3: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  subHeading: {
    color: '#92B6D4',
    fontSize: '22@ms',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  instructionView: {
    padding: '20@ms',
  },
  instruction: {
    fontSize: '14@ms',
    alignSelf: 'center',
    paddingTop: '10@ms',
  },
  instruction2: {
    fontSize: '14@ms',
    alignSelf: 'center',
    paddingTop: '10@ms',
    fontWeight: 'bold',
  },
  subHeading2: {
    color: '#92B6D4',
    fontSize: '22@ms',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: '20@ms',
  },
});
