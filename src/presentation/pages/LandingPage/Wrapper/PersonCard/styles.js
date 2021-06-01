import styled from 'styled-components';
import { Row, Col } from 'antd';

export const Container = styled(Col)`
    width: ${({ xl, sm, md }) => {
        if (xl) {
            return '15.7%';
        }
        if (md) {
            return '19%';
        }
        if (sm) {
            return '48%';
        }
    }};
`;
export const Tab = styled(Row)`
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin-top: 6px;
`;
export const ImgDiv = styled(Row)`
    position: relative;
    background-color: rgb(0 0 0 / 0%);
    background-clip: content-box;
    overflow: hidden;
    cursor: pointer;
    border-radius: 0.4rem;
    margin-bottom: 10px;
`;

export const Card = styled(Col)`
    margin-bottom: ${({ sm }) => (sm ? '10px' : '0')};
`;
export const Info = styled(Col)``;

export const Image = styled.img`
    height: ${({ xl }) => (xl ? '280px;' : '259px')};
    width: 100%;
    object-fit: cover;
    transition: transform 0.4s cubic-bezier(0.17, 0.67, 0.13, 1.02) 0s;
    &:hover {
        transform: scale(1.1);
        transition: transform 0.4s cubic-bezier(0.17, 0.67, 0.13, 1.02) 0s;
    }
`;

export const Link = styled.a`
    height: 100%;
    width: 100%;
`;

export const Title = styled.span`
    font-size: 14px;
    line-height: 10px;
    font-weight: 700;
    color: #fff;
`;

export const Subtitle = styled.span`
    font-size: 11px;
    font-weight: 400;
    line-height: 18px;
    width: 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: rgb(173, 174, 181);
`;
export const Column = styled(Col)`
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgb(173, 174, 181);
`;

export const Price = styled.span`
    font-size: 11px;
    font-weight: 500;
    line-height: 18px;
    padding-left: 5px;
`;

export const Adverb = styled.span`
    z-index: 2;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
`;

export const Span = styled.span`
    font-size: 0.6rem;
    font-weight: 500;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(16 16 16 / 85%);
    border-radius: 0.2rem;
    display: inline-flex;
    padding: 0.15rem;
    color: white;
`;

export const Mark = styled.span`
    z-index: 2;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`;

export const Svg = styled.svg`
    color: rgb(69, 255, 255);
`;
