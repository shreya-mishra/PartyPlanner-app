import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { APP_NAME, SPLASH_SCREEN_TIME } from '../constants/AppConstant';
import Homepage from '../screens/homepage';
import SplashScreen from '../screens/splash';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, SPLASH_SCREEN_TIME);
    }, []);

    return (
        <Stack.Navigator
            initialRouteName={loading ? APP_NAME.SPLASH : APP_NAME.HOME}
            screenOptions={{
                animationTypeForReplace: 'push',
            }}>
            {
                loading ?
                    <Stack.Screen options={{
                        headerShown: false,
                    }} name={APP_NAME.SPLASH} component={SplashScreen} />
                    :
                    <Stack.Screen name={APP_NAME.HOME} component={Homepage} />
            }
        </Stack.Navigator>
    );
};

export default AppNavigator;
