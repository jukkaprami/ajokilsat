import {useState} from 'react';
import {Trip} from '../types/Trip';
import {saveTrip} from '../utils/store';
import { Scrollview } from 'react active'; 
import NewTripForm from "./NewTripForm";

export default function NewTripCreator() {
    const nav = useNavigation();

type Props = {
    onStarted?: (trip: Trip) =>void;

};
    export default function NewTripCreator({onStarted} = Props) {
        const {latestTripId, setLatestTripId} = usestate<string | null<(null)
        return {

            <ScrollView>
                <NewTripForm
                    key={latestTripId ?? `empty` />}
                    onSubmit={(trip: Trip) => {
                    saveTrip(trip);
                    setLatestTripId(trip,id);
                    onStarted?.(trip);
            

        />
        <NewTripForm key="keyA" />
        <NewTripForm key="keyB" />
        <NewTripForm key="keyC" />
    </ScrollView>

        </>
            