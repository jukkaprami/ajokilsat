import Ionicons from '@expo/vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {
    Button,
    SafeAreaView,
    StatusBar,
    StatusBarStyle,
    StyleSheet,
    Text,
    View,
} from 'react-native';

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
        <NavigationContainer>
            <Nav.Navigator screenOptions={getScreenOptions}>
                <Nav.Screen
                    name="home"
                    component={ButtonOnlyView}
                    options={{title: 'Aloitusruutu'}}
                />
                <Nav.Screen
                    name="other"
                    component={StatusBarTogglerView}
                    options={{title: 'Toinen juttu'}}
                />
            </Nav.Navigator>
        </NavigationContainer>
    );
}

function ButtonOnlyView({navigation}) {
    return (
        <View>
            <Button
                title="Avaa juttu"
                onPress={() => navigation.navigate('other')}
            />
        </View>
    );
}

function StatusBarTogglerView() {
    const [hidden, setHidden] = useState(false);
    const changeStatusBarVisibility = () => setHidden(!hidden);

    return (
        <View style={styles.container}>
            <StatusBar {...{hidden, ...styles.statusBar}} />
            <Text style={styles.textStyle}>
                StatusBar Visibility:{'\n'}
                {hidden ? 'Hidden' : 'Visible'}
            </Text>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Toggle StatusBar"
                    onPress={changeStatusBarVisibility}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffe0e0',
    },
    statusBar: {
        animated: true,
        backgroundColor: '#f080a0',
        barStyle: 'default' as StatusBarStyle,
    },
    buttonsContainer: {
        padding: 10,
    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 8,
    },
});
