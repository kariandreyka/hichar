import React, { useState } from 'react';
import { Form, Button, Input, Alert } from 'antd';
import { Container, Section, EmailInput, Description, Title, ButtonEl, FormEl, Link } from './styles';

const validateMessages = {
    required: 'not valid',
    types: {
        email: 'Invalid email address',
        number: 'not valid',
    },
    number: {
        range: 'not valid',
    },
};
const Message = () => (
    <Alert message="You have succesfully Subsciribe Mail List" type="success" showIcon action={<Button size="small" type="text" />} closable />
);

const Email = () => {
    const [isSubscribed, setSubcribe] = useState(false);
    const [form] = Form.useForm();
    const onFinish = (values) => {
        form.resetFields();

        console.log(isSubscribed);
        setTimeout(() => {
            setSubcribe(values.user.email);
        }, 1000);
    };
    return (
        <Container>
            <Section>
                <Title>Join our mailing list</Title>
                <Description>Be the first to know about the newest stars and best deals on Cameo</Description>
            </Section>
            <Section>
                <FormEl form={form} onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item style={{ width: '69%', marginBottom: '0' }} name={['user', 'email']} rules={[{ type: 'email' }]}>
                        <EmailInput refs="email" type="email" placeholder="Email address" />
                    </Form.Item>
                    <Form.Item style={{ marginBottom: '0' }}>
                        <ButtonEl type="reset" htmlType="submit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </ButtonEl>
                    </Form.Item>
                </FormEl>
            </Section>
            <Section>{isSubscribed && <Message />} </Section>
            <Section>
                <span style={{ color: 'rgb(173, 174, 181)', fontSize: '12px' }}>
                    Emails subject to <Link href="#">privacy policy</Link>{' '}
                </span>
            </Section>
        </Container>
    );
};

export default Email;
