import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { Container, Span, Svg, Mark, Column, Adverb, Card, Image, Info, Link, ImgDiv, Tab } from './styles';
import userMediaQuery from '../../../../../utils/Hooks/userMediaQuery';
import LoginModal from '../../../../components/LoginModal/index';
import { Text } from '../../../../components/Typography/styles';

const PersonCard = (props) => {
    const { xs, sm, lg, md, xl } = userMediaQuery();
    const [visible, setVisible] = useState(false);
    const [isMouseOn, setMouseOn] = useState(false);
    const [isModelOrMark, setModalOrMark] = useState(false);
    const { data } = props;
    const userInfo = useSelector((state) => state.userInfo);

    const handleCancel = () => {
        setVisible(false);
    };

    const markClickHandler = () => {
        if (!userInfo) {
            setVisible(true);
        } else {
            setModalOrMark(!isModelOrMark);
        }
    };

    const mouseEnter = () => {
        setMouseOn(true);
    };
    const mouseLeave = () => {
        setMouseOn(false);
    };

    const BookMark = () => (
        <Mark onClick={markClickHandler}>
            <Row style={{ width: '1.4rem', height: '1.4rem', backgroundColor: 'rgb(28, 28, 28)', alignItems: 'center', justifyContent: 'center' }}>
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill={isModelOrMark ? 'rgb(69, 255, 255)' : 'none'}
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
                                    style={{ height: '.8rem', marginRight: '2px' }}
                                    src="https://cdn.cameo.com/static/assets/icons/group28x28.svg"
                                    alt=""
                                />
                                <Text size="tiny" weight="medium">
                                    Charity
                                </Text>
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
                                    <Text weight="extraBold" family="secondary">
                                        {data.name}
                                    </Text>
                                </Col>
                                <Column>
                                    <Text family="secondary" color="grey" size="tiny">
                                        {data.title}
                                    </Text>
                                </Column>
                            </Row>
                        </Link>
                    </Info>
                </Row>
                <Tab>
                    <Col>
                        <Text style={{ marginRight: '5px' }} size="tiny">
                            From
                        </Text>
                        <Text size="description" weight="bold" family="secondary">
                            {data.price}
                        </Text>
                    </Col>
                    <Col>
                        <img src="https://cdn.cameo.com/static/assets/icons/zap.svg" style={{ height: '.9rem', paddingRight: '3px' }} alt="" />
                        <Text size="description" weight="bold" family="secondary">
                            24hr
                        </Text>
                    </Col>
                </Tab>
            </Card>
            <LoginModal visible={visible} onCancel={handleCancel} setVisible={setVisible} />
        </Container>
    );
};
export default PersonCard;
