import React, {useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {Button, Modal, Portal} from 'react-native-paper';

import {Trip} from '../types/Trip';
import TripForm from './TripForm';

export default function TripList() {
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
    const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

    function ListRow({item: trip}: {item: Trip}) {
        return (
            <Button
                onPress={() => {
                    setModalIsVisible(true);
                    setSelectedTrip(trip);
                }}
            >
                <Text style={styles.item}>{trip.description}</Text>
            </Button>
        );
    }

    function TripFormModal() {
        return (
            <Modal
                visible={modalIsVisible}
                onDismiss={() => setModalIsVisible(false)}
                contentContainerStyle={styles.container}
            >
                <TripForm initialValue={selectedTrip} />
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

const trips: Trip[] = [
    {vehicleId: 'car1', description: 'Käynti Devin Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti Dan Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti Dominic Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti Jackson Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti James Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti Joel Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti John Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti Jillian Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti Jimmy Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti Julie Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti Kalle Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti Laura Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti Matti Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti Noora Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti Olli Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti Petra Testisen luona'},
    {vehicleId: 'car1', description: 'Käynti Devin Kokeilijan luona'},
    {vehicleId: 'car1', description: 'Käynti Dan Kokeilijan luona'},
    {vehicleId: 'car1', description: 'Käynti Dominic Kokeilijan luona'},
    {vehicleId: 'car1', description: 'Käynti Jackson Kokeilijan luona'},
    {vehicleId: 'car1', description: 'Käynti James Kokeilijan luona'},
    {vehicleId: 'car1', description: 'Käynti Joel Kokeilijan luona'},
    {vehicleId: 'car1', description: 'Käynti John Kokeilijan luona'},
    {vehicleId: 'car1', description: 'Käynti Jillian Kokeilijan luona'},
    {vehicleId: 'car1', description: 'Käynti Jimmy Kokeilijan luona'},
    {vehicleId: 'car1', description: 'Käynti Julie Kokeilijan luona'},
    {vehicleId: 'car1', description: 'Käynti Kalle Kokeilijan luona'},
    {vehicleId: 'car1', description: 'Käynti Laura Kokeilijan luona'},
    {vehicleId: 'car1', description: 'Käynti Matti Kokeilijan luona'},
    {vehicleId: 'car1', description: 'Käynti Noora Kokeilijan luona'},
    {vehicleId: 'car1', description: 'Käynti Olli Kokeilijan luona'},
    {vehicleId: 'car1', description: 'Käynti Petra Kokeilijan luona'},
];
