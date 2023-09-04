import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

export default function TripList() {
    return (
        <FlatList
            data={nimet}
            renderItem={ListRow}
        />
    );
}

type ItemType = {
    key: string;
};

function ListRow({item}: {item: ItemType}) {
    return <Text style={styles.item}>{item.key}</Text>;
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const nimet: ItemType[] = [
    {key: 'Devin Testinen'},
    {key: 'Dan Testinen'},
    {key: 'Dominic Testinen'},
    {key: 'Jackson Testinen'},
    {key: 'James Testinen'},
    {key: 'Joel Testinen'},
    {key: 'John Testinen'},
    {key: 'Jillian Testinen'},
    {key: 'Jimmy Testinen'},
    {key: 'Julie Testinen'},
    {key: 'Kalle Testinen'},
    {key: 'Laura Testinen'},
    {key: 'Matti Testinen'},
    {key: 'Noora Testinen'},
    {key: 'Olli Testinen'},
    {key: 'Petra Testinen'},
    {key: 'Devin Kokeilija'},
    {key: 'Dan Kokeilija'},
    {key: 'Dominic Kokeilija'},
    {key: 'Jackson Kokeilija'},
    {key: 'James Kokeilija'},
    {key: 'Joel Kokeilija'},
    {key: 'John Kokeilija'},
    {key: 'Jillian Kokeilija'},
    {key: 'Jimmy Kokeilija'},
    {key: 'Julie Kokeilija'},
    {key: 'Kalle Kokeilija'},
    {key: 'Laura Kokeilija'},
    {key: 'Matti Kokeilija'},
    {key: 'Noora Kokeilija'},
    {key: 'Olli Kokeilija'},
    {key: 'Petra Kokeilija'},
];