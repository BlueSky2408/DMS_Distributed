/**
Mr : Dang Xuan Truong
Email: truongdx@runsystem.net
 */
// import { colors } from '@constants/colors';
import { Typography } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
// @ts-ignore
// import iconToastSuccess from '@assets/icons/iconToastSuccess.svg';
import * as React from 'react';
import { toast } from 'react-toastify';
import './style.css';

// const Zoom = cssTransition({
//   enter: 'zoomIn',
//   exit: 'zoomOut',
//   duration: 2000,
//   appendPosition: false,
//   collapse: true,
//   collapseDuration: 300
// });
const optionErrors = {
    autoClose: 5000,
    className: 'toast-error-container toast-error-container-after',
};

const optionSuccess = {
    autoClose: 2000,
    className: 'toast-success-container toast-success-container-after',
};
const optionWarning = {
    autoClose: 2000,
    className: 'toast-warning-container toast-warning-container-after',
};
function ViewToast(props) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {props.children}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'left',
            }}
            >
                {/* <Typography style={{
                fontSize: 18,
                fontFamily: 'SVN-Poppins',
                fontWeight: 500,
                color: colors.colorText,
                textTransform: 'uppercase',
            }}
            > {props.title}
            </Typography> */}
                <Typography style={{
                    fontSize: 15,
                    fontFamily: 'SVN-Poppins',
                    // color: colors.green,
                    fontWeight: 600,
                }}
                >
                    {props.message}
                </Typography>
            </div>
        </div>
    );
}

export const toastError = (error) => {
    let message = null;
    if (typeof error === 'object' && error.message) {
        ({ message } = error);
    }
    if (message !== null && typeof message !== 'undefined') {
        toast.error(
            <ViewToast
                title="thất bại"
                message={message}
            >
                {/* <CancelOutlinedIcon
                    fontSize="large"
                    style={{
                        color: '#FB2A4F',
                        margin: '0px 15px 0px 10px',
                    }}
                /> */}
            </ViewToast>,
            optionErrors,
        );
    }
};

export const toastSuccess = (message) => {
    if (message !== null && typeof message !== 'undefined') {
        toast.success(
            <ViewToast
                title="thành công"
                message={message}
            >
                {/* <CheckCircleOutlineIcon
                    fontSize="large"
                    style={{
                        color: colors.green,
                        margin: '0px 15px 0px 10px',
                    }}
                /> */}
                {/* <img
                    src={iconToastSuccess}
                    alt="success"
                    style={{ margin: '0px 15px 0px 10px' }}
                /> */}
            </ViewToast>,
            optionSuccess,
        );
    }
};
export const toastWarning = (warning) => {
    let message = null;
    if (typeof warning === 'object' && warning.message) {
        ({ message } = warning);
    }
    if (message !== null && typeof message !== 'undefined') {
        toast.warning(
            <ViewToast
                title="cảnh báo"
                message={message}
            >
                <ErrorOutlineOutlinedIcon
                    fontSize="large"
                    style={{
                        // color: 'gold',
                        margin: '0px 15px 0px 10px',
                    }}
                />
            </ViewToast>,
            optionWarning,
        );
    }
};

