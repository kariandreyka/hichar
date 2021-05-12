import React from 'react';
import { Container, Link } from './styles';
import useMediaQuery from '../../../../utils/Hooks/userMediaQuery';

const PageLinks = (props) => {
    const { data } = props;
    const { sm } = useMediaQuery();

    return (
        <Container sm={sm}>
            {data.map((params) => (
                <Link href={params.pageURL}>{params.pageName}</Link>
            ))}
        </Container>
    );
};

export default PageLinks;
