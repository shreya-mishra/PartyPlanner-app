import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import React from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
function DetailsScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Details'>;
}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default DetailsScreen;
