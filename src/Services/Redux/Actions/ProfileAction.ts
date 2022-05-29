import Action from '../ConstantReducer';

interface PayloadProfileAction {
    profile: {
        nama_lengkap: string;
        jenis_kelamin: string;
        email: string;
        no_telp: string;
        divisi_id: number;
        device_id: string;
        device_name: string;
        divisi: {
            nama: string;
        };
        jam_kerja_id: number;
        jam_kerja: {
            nama: string;
            jam_masuk_mulai: string;
            jam_masuk_selesai: string;
            jam_pulang_mulai: string;
            jam_pulang_selesai: string;
        };
    }
}

// eslint-disable-next-line max-lines-per-function
export const setProfileAction = (payload: PayloadProfileAction) => ({
    type: Action.Profile.SET_PROFILE,
    payload: {
        fullname: payload.profile.nama_lengkap,
        gender: payload.profile.jenis_kelamin,
        email: payload.profile.email,
        phone: payload.profile.no_telp,
        deviceId: payload.profile.device_id,
        deviceName: payload.profile.device_name,
        divisionId: payload.profile.divisi_id,
        divisionName: payload.profile.divisi.nama,
        workHoursId: payload.profile.jam_kerja_id,
        workHoursName: payload.profile.jam_kerja.nama,
        workHoursInStart: payload.profile.jam_kerja.jam_masuk_mulai,
        workHoursInEnd: payload.profile.jam_kerja.jam_masuk_selesai,
        workHoursOutStart: payload.profile.jam_kerja.jam_pulang_mulai,
        workHoursOutEnd: payload.profile.jam_kerja.jam_pulang_selesai,
    },
});
