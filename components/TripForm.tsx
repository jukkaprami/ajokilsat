import * as React from 'react';
import {ScrollView} from 'react-native';
import {Button, SegmentedButtons, TextInput} from 'react-native-paper';

import {DateTimeField} from './DateTimeField';

export default function TripForm() {
    const [vehicle, setVehicle] = React.useState('car1');

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
            <TextInput label="Ajon kuvaus" />
            <DateTimeField label="Aloitusaika" />
            <DateTimeField label="Lopetusaika" />
            <TextInput label="Mittarilukema alussa" keyboardType="numeric" />
            <TextInput label="Mittarilukema lopussa" keyboardType="numeric" />
            <TextInput label="Reitin kuvaus" />
            <Button mode="contained">Tallenna</Button>
        </ScrollView>
    );
}
