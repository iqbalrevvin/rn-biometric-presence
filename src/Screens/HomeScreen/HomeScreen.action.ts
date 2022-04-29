import API, { ENDPOINT } from '~Services/Configs/Api';

export const _getAttendanceLogs = async (pageParam = 1, token: string) => {
    try {
        const data = null;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: { page: pageParam },
        };
        const request = await API.post(ENDPOINT.PRESENCE.LIST, data, config);
        return request?.data;
    } catch (error) {
        return error;
    }
};
