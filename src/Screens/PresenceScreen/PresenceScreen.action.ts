import API, { ENDPOINT } from '~Services/Configs/Api';
import { DataSubmitHitPresence, PayloadSendBiometric } from './PresenceScreen.type';
import { Store } from '../../Services/Redux/store';

const {
    PRESENCE: {HIT, REGISTER},
} = ENDPOINT;

const state = Store.getState();

export const saveBiometricId = async (payload: PayloadSendBiometric) => {
    const dataSend = payload;
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${state.auth.token}`,
            },
        };
        const request = await API.post(REGISTER, dataSend, config);
        return request;
    } catch (error) {
        return error;
    }
};

export const submitHitPresence = async (data: DataSubmitHitPresence) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${state.auth.token}`,
            },
        };
        const request = await API.post(HIT, data, config);
        return request;
    } catch (error) {
        return error;
    }
};
