import * as React from 'react';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import {Button, SegmentedButtons, TextInput} from 'react-native-paper';

import {cleanNumberText, parseNumber} from '../utils/numbers';
import {DateTimeField} from './DateTimeField';
import {Trip} from '../types/Trip';

type Props = {
    onSubmit: (trip: Trip) => void;
};

export default function TripForm({onSubmit}: Props) {
    const [vehicle, setVehicle] = useState('car1');
    const [description, setDescription] = useState('');
    const [timestampAtBegin, setTimestampAtBegin] = useState<Date | null>(
        null
    );
    const [timestampAtEnd, setTimestampAtEnd] = useState<Date | null>(null);
    const [odometerAtBegin, setOdometerAtBegin] = useState<string>('');
    const [odometerAtEnd, setOdometerAtEnd] = useState<string>('');
    const [routeDescription, setRouteDescription] = useState('');

    function submitForm() {
        const trip: Trip = {
            vehicleId: vehicle,
            description,
            timestampAtBegin,
            timestampAtEnd,
            odometerAtBegin: parseNumber(odometerAtBegin),
            odometerAtEnd: parseNumber(odometerAtEnd),
            routeDescription,
        };
        console.log(trip);
        //onSubmit(trip);
    }

    return (
        <ScrollView>
            <SegmentedButtons
                value={vehicle}
                onValueChange={setVehicle}
                buttons={[
                    {value: 'car1', label: 'Auto 1'},
                    {value: 'car2', label: 'Auto 2'},
                ]}
            />
            <TextInput
                label="Ajon kuvaus"
                value={description}
                onChangeText={setDescription}
            />
            <DateTimeField
                label="Aloitusaika"
                value={timestampAtBegin}
                onChange={setTimestampAtBegin}
            />
            <DateTimeField
                label="Lopetusaika"
                value={timestampAtEnd}
                onChange={setTimestampAtEnd}
            />
            <TextInput
                label="Mittarilukema alussa"
                keyboardType="numeric"
                value={odometerAtBegin}
                onChangeText={(x) => setOdometerAtBegin(cleanNumberText(x))}
            />
            <TextInput
                label="Mittarilukema lopussa"
                keyboardType="numeric"
                value={odometerAtEnd}
                onChangeText={(x) => setOdometerAtEnd(cleanNumberText(x))}
            />
            <TextInput
                label="Reitin kuvaus"
                value={routeDescription}
                onChangeText={setRouteDescription}
            />
            <Button onPress={submitForm} mode="contained">
                Tallenna
            </Button>
        </ScrollView>
    );
}
