import API, { ENDPOINT } from '~Services/Configs/Api';

export const submitSignin = async (data) => {
    try {
        const request = await API.post(ENDPOINT.AUTH.LOGIN, data);
        return request;
    } catch (error) {
        return error;
    }
};
