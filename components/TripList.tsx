import React, {useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {Button, Modal, Portal} from 'react-native-paper';

import {Trip} from '../types/Trip';
import {deleteTrip, loadTrips, saveTrips} from '../utils/store';
import Tripfrom from './Tripform'

export default function TripList() {
    const [shownIndex, setShownIndex] = useState<number | null>(null);

    function ListRow({item: trip, index}: {item: Trip; index: number}) {
        return (
            <Button onPress={() => setShownIndex(index)}>
                <Text style={styles.item}>{trip.description}</Text>
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
                        console.log('Tallennettu matka:', shownIndex, trip);
                        saveTrip[Trip];
                        setShownIndex(null);
                    }}
                    onDelete={() => {
                        console.log('Poistetaan', shownIndex);
                        deletetrip{shownTrip};
                        setShownIndex(null);
                    }}
                />
            </Modal>
        );
    }

    return (
        <>
            <FlatList data={trips} renderItem={ListRow} style={styles.list} />
            <Portal>
                <TripFormModal />
            </Portal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
    },
    list: {},
    item: {
        padding: 2,
        fontSize: 20,
        height: 40,
    },
});


