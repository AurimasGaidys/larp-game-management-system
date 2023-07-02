import firebase from 'firebase/compat/app';
import 'firebase/compat/functions';
import { fbFunctions } from '../dataLayer/initFirebase';
import { httpsCallable } from "firebase/functions";
import { BaseResponseDto } from '../models/baseResponseDto';

const testMode = false;

export const onGetLocation = async (locationId: string) => {

    const functionRef = httpsCallable(fbFunctions, "onGetLocationCall");
    const { data } = await functionRef({ locationId: locationId });
    console.log(data);

    return data as BaseResponseDto;
}