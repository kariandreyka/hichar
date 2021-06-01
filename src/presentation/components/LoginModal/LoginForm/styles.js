import styled from 'styled-components';
import { Button, Form, Input, Row } from 'antd';

export const SocialButton = styled(Button)`
    width: 100%;
    margin: 0.3rem 0;
    background: linear-gradient(rgb(24 119 242), rgb(24 119 242));
    border: none;
    color: #fff;
    font-weight: 500;
    font-size: 80%;
    height: 38px;
    &:hover {
        background: linear-gradient(rgb(24 119 242), rgb(24 119 242));
        color: #fff;
    }
    &:active {
        background: linear-gradient(rgb(24 119 242), rgb(24 119 242));
        color: #fff;
        box-shadow: none;
    }
    &:focus {
        background: linear-gradient(rgb(24 119 242), rgb(24 119 242));
        color: #fff;
        box-shadow: none;
    }
`;

export const Title = styled.h2`
    font-weight: 600;
`;

export const Section = styled(Row)`
    margin: 10px 0;
    border-bottom: 1px solid rgb(221 221 221);
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    margin-bottom: 20px;
`;

export const Text = styled.span`
    position: absolute;
    width: 15%;
    top: -10px;
    background: rgb(28 28 28);
    text-align: center;
    font-size: 12px;
    line-height: 1.3rem;
`;

export const InputItem = styled(Input)`
    background-color: transparent;
    border: 1px solid rgb(62, 62, 62) !important;
    color: white;
    padding: 0.6rem;
    border-radius: 5px;
    &:focus {
        outline: none;
        border: 1px solid rgb(248, 248, 248) !important;
        box-shadow: none;
        background-color: transparent !important;
    }
    &:active {
        background-color: transparent !important;
    }
    &:hover {
        background-color: transparent !important;
        border: 1px solid rgb(62, 62, 62) !important;
        box-shadow: none !important;
    }
    .ant-form-item-has-error .ant-initem-has-error {
        background-color: transparent !important;
    }
`;

export const LogTitle = styled.span`
    color: white;
    font-size: 12px;
    font-weight: 500;
`;

export const FormLog = styled(Form)`
    .ant-input {
        background-color: transparent !important;
    }
    .ant-form-item {
        margin-bottom: 12px;
    }
    .ant-form-item-label {
        padding: 0 0 1px !important;
    }
    .ant-input-affix-wrapper {
        background-color: transparent !important;
        border: 1px solid rgb(62, 62, 62) !important;
        color: white;
        padding: 0.6rem !important;
        border-radius: 5px;
        box-shadow: none !important;
    }
    .anticon svg {
        color: rgb(255 255 255);
    }
    .ant-input-affix-wrapper > input.ant-input {
        color: rgb(240 248 255);
    }
`;

export const Desc = styled.span`
    font-size: 11px;
    color: rgb(173 174 181);
`;

export const DescRow = styled(Row)`
    margin: 5px 5px;
`;

export const Link = styled.a`
    font-weight: 700;
    color: #fff;
`;
