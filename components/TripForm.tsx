import {useState} from 'react';
import {ScrollView} from 'react-native';
import {Button, SegmentedButtons, TextInput} from 'react-native-paper';

import {Trip} from '../types/Trip';
import {newId} from '../utils/newId';
import {cleanNumberText, parseNumber} from '../utils/numbers';
import {dateToTimestamp, timestampToDate} from '../utils/time';
import {DateTimeField} from './DateTimeField';

type Props = {
    initialValue?: Trip | null;
    onSubmit?: (trip: Trip) => void;
    onDelete?: () => void;
};

export default function TripForm({
    onSubmit,
    initialValue: iv,
    onDelete,
}: Props) {
    const defaultCar = 'car1';

    const [id] = useState(iv?.id ?? newId());
    const [vehicle, setVehicle] = useState(iv?.vehicleId ?? defaultCar);
    const [description, setDescription] = useState(iv?.description ?? '');
    const [timestampAtBegin, setTimestampAtBegin] = useState<Date | null>(
        timestampToDate(iv?.timestampAtBegin)
    );
    const [timestampAtEnd, setTimestampAtEnd] = useState<Date | null>(
        timestampToDate(iv?.timestampAtEnd)
    );
    const [odometerAtBegin, setOdometerAtBegin] = useState<string>(
        iv?.odometerAtBegin?.toString() ?? ''
    );
    const [odometerAtEnd, setOdometerAtEnd] = useState<string>(
        iv?.odometerAtEnd?.toString() ?? ''
    );
    const [routeDescription, setRouteDescription] = useState(
        iv?.routeDescription ?? ''
    );

    function submitForm() {
        const trip: Trip = {
            id,
            vehicleId: vehicle,
            description,
            timestampAtBegin: dateToTimestamp(timestampAtBegin),
            timestampAtEnd: dateToTimestamp(timestampAtEnd),
            odometerAtBegin: parseNumber(odometerAtBegin),
            odometerAtEnd: parseNumber(odometerAtEnd),
            routeDescription,
        };
        onSubmit?.(trip);
        console.debug(trip);
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
            {onSubmit ? (
                <Button onPress={submitForm} mode="contained">
                    Tallenna
                </Button>
            ) : null}
            {onDelete ? (
                <Button onPress={() => onDelete()} mode="outlined">
                    Poista
                </Button>
            ) : null}
        </ScrollView>
    );
}