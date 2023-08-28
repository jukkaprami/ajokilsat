import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';

import {getRoundedTime} from '../utils/timeUtils';

export function DateTimeField({label}: {label: string}) {
    const [value, setValue] = React.useState(getRoundedTime(60));

    function openPicker(
        mode: 'date' | 'time',
        initialValue: Date,
        callback: (x: Date) => void
    ) {
        DateTimePickerAndroid.open({
            mode,
            value: initialValue,
            onChange: (event: {type: string}, x: Date) => {
                if (event.type === 'set') callback(x);
            },
            is24Hour: true,
        });
    }

    const openTimePicker = (initialValue: Date) =>
        openPicker('time', initialValue, (x) => setValue(x));
    const openDatePicker = () =>
        openPicker('date', value, (x) => {
            setValue(x);
            openTimePicker(x);
        });

    return (
        <View style={style.container}>
            <Text variant="labelLarge">{label}</Text>
            <Button onPress={openDatePicker}>{value.toLocaleString()}</Button>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around'
    }
});
