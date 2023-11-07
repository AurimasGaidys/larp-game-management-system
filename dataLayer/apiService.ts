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

export const onGetDT = async (dialogTreeId: string) => {

    const functionRef = httpsCallable(fbFunctions, "onDialogTreeCall");
    const { data } = await functionRef({ dialogTreeId: dialogTreeId });
    console.log(data);

    return data as BaseResponseDto;
}

export const onEnterCoupon = async (couponCode: string) => {

    const functionRef = httpsCallable(fbFunctions, "onEnterCouponCall");
    const { data } = await functionRef({ dto: { couponCode: couponCode } });
    console.log(data);

    return data as BaseResponseDto;
}

interface IOnGetAgentInfo {
    name: string;
    phone: string;
    avatar: string;
}

export const onSaveAgentInfo = async (dto: IOnGetAgentInfo) => {

    const functionRef = httpsCallable(fbFunctions, "onSaveAgentInfoCall");
    const { data } = await functionRef({ dto });
    console.log(data);

    return data as BaseResponseDto;
}


export const onAction= async (pathname: string, actionId: string, treeId: string, pageId: string) => {

    const functionRef = httpsCallable(fbFunctions, "onActionCall");
    const { data } = await functionRef({ actionId, treeId, pageId, pathname});
    console.log(data);

    return data as BaseResponseDto;
}

export const onGetInvestigationsCall = async () => {

    const functionRef = httpsCallable(fbFunctions, "onGetInvestigationsCall");
    const { data } = await functionRef({});
    console.log(data);

    return data as BaseResponseDto;
}

export const onGetNotesCall = async () => {

    const functionRef = httpsCallable(fbFunctions, "onGetNotesCall");
    const { data } = await functionRef({});
    console.log(data);

    return data as BaseResponseDto;
}