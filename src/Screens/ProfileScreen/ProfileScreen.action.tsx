import API, { ENDPOINT } from '~Services/Configs/Api';

export const _getAuthenticateUser = async (token: string) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const request = await API.get(ENDPOINT.AUTH.AUTHENTICATE, config);
        return request?.data;
    } catch (error) {
        return error;
    }
};
