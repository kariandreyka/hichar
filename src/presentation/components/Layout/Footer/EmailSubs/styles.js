import styled from 'styled-components';
import { Row, Col, Form, Input, Button } from 'antd';
import { Text } from '../../../Typography/styles';
import { FontTheme } from '../../../Typography/constants';

export const Container = styled(Row)`
    display: flex;
    flex-direction: column;
`;

export const Section = styled(Col)``;

export const EmailInput = styled(Input)`
    background-color: transparent;
    border: 1px solid rgb(62, 62, 62) !important;
    color: white;
    padding: 0.7rem;
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
    }
`;

export const Description = styled(Text)`
    margin-bottom: 8px;
`;

export const FormEl = styled(Form)`
    margin-top: 11px;
    display: flex;
`;

export const ButtonEl = styled(Button)`
    margin: 4px 0 0 5px;
    background-color: rgb(255, 3, 124);
    border: rgb(255, 3, 124);
    color: white;
    line-height: 2.5;
    border-radius: 7px;
    height: 2.5rem;
    padding: 7.5px 10px;
    &:hover {
        background-color: rgb(228, 4, 112);
        color: white;
    }
    &:focus {
        background-color: rgb(228, 4, 112);
        color: white;
        box-shadow: none;
    }
    &:active {
        box-shadow: none;
    }
`;

export const Link = styled.a`
    padding-left: 1px;

    &:hover span {
        text-decoration: underline;
        color: ${FontTheme.Color.lightGrayishBlue} !important;
    }
`;
