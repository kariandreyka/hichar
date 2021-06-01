import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Container, Span, Svg, Mark, Column, Adverb, Card, Image, Info, Link, ImgDiv, Title, Subtitle, Tab, Price } from './styles';
import userMediaQuery from '../../../../../utils/Hooks/userMediaQuery';
import LoginModal from '../../../../components/LoginModal/index';

const PersonCard = (props) => {
    const { xs, sm, lg, md, xl } = userMediaQuery();
    const [visible, setVisible] = useState(false);
    const [isMouseOn, setMouseOn] = useState(false);
    const { data } = props;

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    const mouseEnter = () => {
        setMouseOn(true);
    };
    const mouseLeave = () => {
        setMouseOn(false);
    };

    const BookMark = () => (
        <Mark onClick={() => setVisible(true)}>
            <Row style={{ width: '1.2rem', height: '1.2rem', backgroundColor: 'rgb(28, 28, 28)', alignItems: 'center', justifyContent: 'center' }}>
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </Svg>
            </Row>
        </Mark>
    );

    return (
        <Container sm={sm} xs={xs} md={md} lg={lg} xl={xl} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <Card sm={sm}>
                <ImgDiv>
                    <Col>
                        <Link>
                            <Image xl={xl} src={data.imgSource} alt="card" />
                        </Link>
                    </Col>
                    <Adverb>
                        {data.charity && (
                            <Span>
                                <img
                                    style={{ height: '.6rem', marginRight: '2px' }}
                                    src="https://cdn.cameo.com/static/assets/icons/group28x28.svg"
                                    alt=""
                                />
                                <span>Charity</span>
                            </Span>
                        )}
                    </Adverb>
                    {isMouseOn && <BookMark />}
                </ImgDiv>
                <Row>
                    <Info>
                        <Link href="#">
                            <Row style={{ display: 'flex', flexDirection: 'column' }}>
                                <Col>
                                    <Title>{data.name}</Title>
                                </Col>
                                <Column>
                                    <Subtitle>{data.title}</Subtitle>
                                </Column>
                            </Row>
                        </Link>
                    </Info>
                </Row>
                <Tab>
                    <Col>
                        <span style={{ fontSize: '10px' }}>From</span>
                        <Price>{data.price}</Price>
                    </Col>
                    <Col>
                        <img src="https://cdn.cameo.com/static/assets/icons/zap.svg" style={{ height: '.7rem', paddingRight: '3px' }} alt="" />
                        <span style={{ fontWeight: '700', fontSize: '10.5px' }}>24hr</span>
                    </Col>
                </Tab>
            </Card>
            <LoginModal visible={visible} onCancel={handleCancel} setVisible={setVisible} />
        </Container>
    );
};
export default PersonCard;
