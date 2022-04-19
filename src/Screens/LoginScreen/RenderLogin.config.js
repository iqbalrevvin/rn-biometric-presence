import PropTypes from 'prop-types';

const defaultProps = {
    navigation: {
        navigate: () => { },
    },
};

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
};

const inputNameConstant = {
    EMAIL: 'email',
    PASSWORD: 'password',
};

const emailFormValidation = {
    required: 'Email wajib di isi!',
    pattern: {
        value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
        message: 'Contoh format valid: emailanda@email.com',
    },
};

const passwordFormValidation = {
    required: 'Password wajib di isi!',
    minLength: {
        value: 6,
        message: 'Lanjutkan minimal hingga 6 karakter',
    },
};

export default {
    defaultProps,
    propTypes,
    inputNameConstant,
    emailFormValidation,
    passwordFormValidation,
};
