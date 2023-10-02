import React, {useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {Button, Modal, Portal} from 'react-native-paper';

import {Trip} from '../types/Trip';
import TripForm from './TripForm';

type Props = {
    route : {},
    trips: Trip[];
    saveTrip: (trip: Trip) => void;
    deleteTrip: (trip: Trip) => void;
};

 export function findIndexById<I, T extends {id: string}>(list: T[], id?: I): number | null | undefined {
    if (id == null) return null;
    const index = list.findIndex((x) => x.id === id);
    return index != -1 ? index : null;
}

export default function TripList({route, trips, saveTrip, deleteTrip}: Props) {
    const routeTripId = route?.params?.tripId ?? null;
    const routeTripIndex = findIndexById(trips, routeTripId);

    const [shownIndex, setShownIndex] = useState<number | null>(null);

    function ListRow({item: trip, index}: {item: Trip; index: number}) {
        return (
            <Button onPress={() => setShownIndex(index)} style={styles.item}>
                <Text style={styles.itemText}>{trip.description}</Text>
            </Button>
        );
    }

    function TripFormModal() {
        const shownTrip = shownIndex !== null ? trips[shownIndex] : null;
        return (
            <Modal
                visible={shownIndex !== null ? true : false}
                onDismiss={() => setShownIndex(null)}
                contentContainerStyle={styles.container}
            >
                <TripForm
                    initialValue={shownTrip}
                    onSubmit={(trip: Trip) => {
                        console.log('Tallennetaan matka:', shownIndex, trip);
                        saveTrip(trip);
                        setShownIndex(null);
                    }}
                    onDelete={() => {
                        console.log('Poistetaan', shownIndex);
                        deleteTrip(shownTrip);
                        setShownIndex(null);
                    }}
                />
            </Modal>
        );
    }

    return (
        <>
            <FlatList
                data={trips}
                renderItem={ListRow}
                style={styles.list}
                keyExtractor={(item: Trip) => item.id}
            />
            <Portal>
                <TripFormModal />
            </Portal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
    },
    list: {},
    item: {
        padding: 4,
        height: 44,
    },
    itemText: {
        fontSize: 18,
    },
});