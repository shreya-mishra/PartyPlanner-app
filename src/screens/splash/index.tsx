import React from 'react';
import { View, ImageBackground } from 'react-native';
import { SplashScreenStyle } from './Style';

const SplashScreen = () => {
    return (
        <View style={SplashScreenStyle.container}>
            <ImageBackground source={require('../../assets/splash/splash.png')} resizeMode="cover" style={SplashScreenStyle.image} />
        </View>
    );
};

export default SplashScreen;
