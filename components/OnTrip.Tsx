import {ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import {getTrip, loadTrips} from '../utils/store';
import {useEffect, useState} from 'react';
import {Trip} from '../types/Trip';
import TripForm from './TripForm';

type Props = {
    route?: {params?: {tripId?: string}};
    onSave?: (trip: trip) => void;
};

export default function OnTrip({route}: Props) {
    const [trip, setTrip] = useState<Trip | null>(null);
    const tripId = route?.params?.tripId;

    useEffect(() => {
        if (tripId) {
            getTrip(tripId).then(setTrip).catch((err) => console.log(err));
        } else {
            setTrip(null);
        }
    }, [tripId]);

    useEffect(() => {
        async function getTripById() {
            if (tripId) {
                getTrip(tripId).then(setTrip);
        } else {
            setTrip(null);
        }

    {
        return (
        <ScrollView>
            {trip ? (
                <TripForm
                    key={tripId}
                    initialValue={trip}
                    onSubmit={async (trip) =>
                        {await saveTrip(trip);
                        onSave?.(trip); }}
                />
            }
        </ScrollView>
    );
    }