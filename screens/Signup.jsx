import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {DropdownComponent} from '../components/Dropdown';

const option = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
];

const Signup = () => {
  const [gender, setGender] = useState();
  return (
    <View>
      <Text>Name</Text>
      <TextInput style={styles.logBox} returnKeyType="next" />
      <Text>Email</Text>
      <TextInput
        style={styles.logBox}
        keyboardType="email-address"
        returnKeyType="next"
      />
      <DropdownComponent />
      <Text> Gender</Text>
      <RadioForm
        radio_props={option}
        initial={1}
        animation={true}
        onPress={value => {
          setGender(value);
        }}
      />
      <Text>{gender}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  logBox: {
    padding: 10,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});

export default Signup;
