export interface IndexProps {
    navigation: any;
    route: any;
    profileState: ProfileStateType;
}

export interface ProfileStateType {
    fullname: string;
    email: string;
    phone: string;
    divisionId: number;
    divisionName: string;
    workHoursId: number;
    workHoursName: string;
    workHoursInStart: string;
    workHoursInEnd: string;
    workHoursOutStart: string;
    workHoursOutEnd: string;
}

export interface Props {
    navigation: any;
    route: any;
    profileState: ProfileStateType
};
