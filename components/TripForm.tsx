import * as React from 'react';
import {ScrollView} from 'react-native';
import {Button, SegmentedButtons, TextInput} from 'react-native-paper';

import {DateTimeField} from './DateTimeField';

type Trip = {
    vehicleId: string;
    description: string;
    timestampAtBegin: Date;
    timestampAtEnd: Date;
    odometerAtBegin: number;
    odometerAtEnd: number;
    routeDescription?: string;
    // track?: TrackPoint[];
};

type Props = {
    onSubmit: (trip: Trip) => void;
};

export default function TripForm({onSubmit}: Props) {
    const [vehicle, setVehicle] = React.useState('car1');
    const [description, setDescription] = React.useState('');
    const [routeDescription, setRouteDescription] = React.useState('');

    function submitForm() {
        const trip: Trip = {
            vehicleId: vehicle,
            description,
            timestampAtBegin: new Date(),
            timestampAtEnd: new Date(),
            odometerAtBegin: 0,
            odometerAtEnd: 0,
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
            <DateTimeField label="Aloitusaika" />
            <DateTimeField label="Lopetusaika" />
            <TextInput label="Mittarilukema alussa" keyboardType="numeric" />
            <TextInput label="Mittarilukema lopussa" keyboardType="numeric" />
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
