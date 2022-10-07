import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { SCREEN_NAMES, SPLASH_SCREEN_TIME } from '../constants/AppConstant';
import Homepage from '../screens/homepage';
import SplashScreen from '../screens/splash';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, SPLASH_SCREEN_TIME);

    return (
        <Stack.Navigator
            initialRouteName={loading ? SCREEN_NAMES.SPLASH : SCREEN_NAMES.HOME}
            screenOptions={{
                animationTypeForReplace: 'push',
            }}>
            {
                loading ?
                    <Stack.Screen options={{
                        headerShown: false,
                    }} name={SCREEN_NAMES.SPLASH} component={SplashScreen} />
                    :
                    <Stack.Screen name={SCREEN_NAMES.HOME} component={Homepage} />
            }
        </Stack.Navigator>
    );
};

export default AppNavigator;
