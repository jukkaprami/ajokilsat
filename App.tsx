import Ionicons from '@expo/vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {
    MD3LightTheme as DefaultTheme,
    PaperProvider,
} from 'react-native-paper';

import NewTripCreator from './components/NewTripCreator';
import TripList from './components/TripList';
import {Trip} from './types/Trip';
import {deleteTrip, loadTrips, saveTrip} from './utils/store';

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
    newTrip: ['ios-car', 'ios-car-outline'],
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
    const [trips, setTrips] = React.useState<Trip[]>(loadTrips());

    function TripListScreen() {
        return (
            <TripList
                trips={trips}
                saveTrip={saveTrip}
                deleteTrip={deleteTrip}
            />
        );
    }

    function NewTripScreen({navigation}) {
        return (
            <NewTripCreator
                onStarted={() => {
                    setTrips(loadTrips());
                    navigation.navigate('home');
                }}
            />
        );
    }

    return (
        <NavigationContainer>
            <Nav.Navigator screenOptions={getScreenOptions}>
                <Nav.Screen
                    name="home"
                    component={TripListScreen}
                    options={{title: 'Aloitusruutu'}}
                />
                <Nav.Screen
                    name="newTrip"
                    component={NewTripScreen}
                    options={{title: 'Uusi matka'}}
                />
            </Nav.Navigator>
        </NavigationContainer>
    );
}