import Ionicons from '@expo/vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {View} from 'react-native';
import {
    Button,
    MD3LightTheme as DefaultTheme,
    PaperProvider,
} from 'react-native-paper';

import TripForm from './components/TripForm';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#f080a0',
        secondary: '#f5f850',
    },
};

const Nav = createBottomTabNavigator();

const tabIcons = {
    home: ['ios-home', 'ios-home-outline'],
    other: ['ios-car', 'ios-car-outline'],
};

const getScreenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => (
        <Ionicons
            name={tabIcons[route.name][focused ? 0 : 1]}
            size={size}
            color={color}
        />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: true,
});

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <InnerApp />
        </PaperProvider>
    );
}

function InnerApp() {
    return (
        <NavigationContainer>
            <Nav.Navigator screenOptions={getScreenOptions} initialRouteName='other'>
                <Nav.Screen
                    name="home"
                    component={ButtonOnlyView}
                    options={{title: 'Aloitusruutu'}}
                />
                <Nav.Screen
                    name="other"
                    component={TripForm}
                    options={{title: 'Uusi matka'}}
                />
            </Nav.Navigator>
        </NavigationContainer>
    );
}

function ButtonOnlyView({navigation}) {
    return (
        <View>
            <Button onPress={() => navigation.navigate('other')}>
                Syötä matka
            </Button>
        </View>
    );
}
