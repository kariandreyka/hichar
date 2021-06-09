import React from 'react';
import { Row, Form } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SocialButton, Title, Desc, DescRow, Section, Text, InputItem, LogTitle, FormLog, Link } from './styles';
import { AppleIcon } from '../../fonts/FontAwesome';
import { setUserInfo } from '../../../../utils/Redux/Auth/action.js';

const LoginForm = (props) => {
    const dispatch = useDispatch();

    const location = useLocation();
    const [form] = Form.useForm();
    const history = useHistory();
    console.log(location);
    const { setVisible } = props;
    const validateMessages = {
        required: 'is required!',
        types: {
            email: '$its not a valid email!',
        },
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFinish = (values) => {
        const obj = {
            email: `${values.user.email}`,
            password: `${values.password}`,
        };
        console.log('Received values of form: ', values);
        form.resetFields();
        setTimeout(() => {
            try {
                dispatch(setUserInfo(obj));
            } catch (err) {
                console.log(err, 'err');
            }

            if (location.pathname === '/login') {
                history.goBack();
                return;
            }
            setVisible(false);
        }, 500);
    };
    return (
        <Row style={{ justifyContent: 'center' }}>
            <Title>Log in to Cameo</Title>
            <Row style={{ width: '100%' }}>
                <SocialButton>CONTINUE WITH FACEBOOK</SocialButton>
            </Row>
            <Row style={{ width: '100%' }}>
                <SocialButton style={{ background: 'rgb(0, 0, 0)', justifyContent: 'space-around' }}>
                    <AppleIcon />
                    <span>CONTINUE WITH APPLE</span>
                </SocialButton>
            </Row>
            <Section style={{ borderBottom: '1px solid white' }}>
                <Text style={{ color: 'rgb(173 174 181)' }}>OR</Text>
            </Section>
            <FormLog
                form={form}
                initialValues={{ remember: false }}
                name="normal_login"
                validateMessages={validateMessages}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical">
                <FormLog.Item
                    label={<LogTitle>Email or username</LogTitle>}
                    name={['user', 'email']}
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <InputItem refs="email" placeholder="you@example.com" />
                </FormLog.Item>
                <FormLog.Item
                    label={<LogTitle>Pasword</LogTitle>}
                    refs="password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}>
                    <InputItem.Password placeholder="Password" />
                </FormLog.Item>
                <Row style={{ width: '100%' }}>
                    <SocialButton
                        className="login-form-button"
                        style={{ background: 'rgb(69, 255, 255)', justifyContent: 'space-around', borderRadius: '6px' }}
                        htmlType="submit">
                        <span style={{ color: 'black' }}>Login With Email</span>
                    </SocialButton>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <DescRow>
                        <Desc style={{ textAlign: 'center' }}>
                            By signing up, you agree to Cameo's <Link href="#">Terms of Service</Link> , including{' '}
                            <Link href="#">Additional Terms</Link>, and
                            <Link href="#"> Privacy Policy</Link>
                        </Desc>
                    </DescRow>
                    <DescRow>
                        <Desc>
                            <Link>Forgot your password?</Link>{' '}
                        </Desc>
                    </DescRow>
                    <DescRow>
                        <Desc>
                            Don't have an account? <Link href="#">Sign up</Link>
                        </Desc>
                    </DescRow>
                </Row>
            </FormLog>
        </Row>
    );
};

export default LoginForm;
