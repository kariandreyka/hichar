import styled from 'styled-components';

export const Input = styled.input`
    height: 1rem;
    padding: 0 2.5rem;
    background-color: transparent;
    outline: none;
    height: 35px;
    font-size: 15px;
    border: 0;
    width: 100%;
    line-height: 3rem;
    @media (max-width: 767px) {
        width: 11rem;
    }
`;

export const Button = styled.button`
    height: 2rem;
    position: absolute;
    background-color: transparent;
    left: 12px;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    &:focus {
        outline: 0 !important;
    }
`;

export const Container = styled.div`
    display: flex;
    height: 2rem;
    align-items: center;
    border-radius: 8rem;
    background-color: rgb(37, 37, 37);
    position: relative;
    width: 50%;
    margin: 0.5rem 0.4rem 0.6rem 0;
    @media (max-width: 767px) {
        margin: 0.5rem 0.7rem 0.6rem 0;
    }
`;
