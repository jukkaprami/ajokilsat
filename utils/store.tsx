import { Trip } from "../types/Trip";

function getTrips(): Trip[] {
        return[];
}

export function saveTrip(trip:Trip): void {
    trips.findIndex((x) => x.id == trip.id);
    if (index < 0) { // Ei löyntynyt id:llä => Uusi matka
    trips.push; // Lisätään annettu trip listan trips loppuun
    }   else {
    trips[index] = trip; // Päivitetään ko. indexisissä olevaa trippiä
    }
}

export function deletetrip({id}: {id: string}): void {
    const index = trips.findIndex((x) =>x.id === id);
    if (index < 0) {
        throw new Error(`Matkaa id:llä ${id} ei löydy`);
    }
    trips.splice(index, 1); // Poista 1 alkio kohdasta lindex
}

}

const trips: Trip[] = [
    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Devin Testisen luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Dan Testisen luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Dominic Testisen luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Jackson Testisen luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti James Testisen luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Joel Testisen luona'},
    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti John Testisen luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Jillian Testisen luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Jimmy Testisen luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Julie Testisen luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Kalle Testisen luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Laura Testisen luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Matti Testisen luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Noora Testisen luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Olli Testisen luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Petra Testisen luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Devin Kokeilijan luona'},

    {
        id: newId(),
         vehicleId: 'car1',
        description: 'Käynti Dan Kokeilijan luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Dominic Kokeilijan luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Jackson Kokeilijan luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti James Kokeilijan luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Joel Kokeilijan luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti John Kokeilijan luona'},
    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Jillian Kokeilijan luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Jimmy Kokeilijan luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Julie Kokeilijan luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Kalle Kokeilijan luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Laura Kokeilijan luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Matti Kokeilijan luona'},

    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Noora Kokeilijan luona'},
    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Olli Kokeilijan luona'},
    {
        id: newId(),
        vehicleId: 'car1',
        description: 'Käynti Petra Kokeilijan luona'},
];