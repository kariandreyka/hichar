import styled from 'styled-components';
import { Modal } from 'antd';
import { between } from 'polished';

export const LoginModal = styled(Modal)`
    max-width: ${between('370px', '310px')};
    min-height: 15rem;
    border-radius: 10px;
    box-shadow: 0 0 3px 2px #1a1a1a;
    background: rgb(28 28 28);
    .ant-modal-header {
        padding-top: 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .ant-modal {
        top: 80px;
    }
    .ant-modal-content {
        background-color: rgb(28 28 28) !important;
        border-radius: 10px;
        padding: 25px;
        padding-bottom: 0px;
        box-shadow: none;
    }

    .ant-modal-footer {
        display: none;
    }

    .ant-modal-body {
        padding: 0 0 0 0;
        padding-bottom: 0px;
        min-height: 400px;
    }
    .ant-modal-close {
        color: #fff;
    }
`;
