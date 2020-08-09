import React from 'react'
import { Button, Form, Input, Checkbox, Card } from 'antd'
import { useHistory } from 'react-router-dom'
import './login.less'
function Login() {
    const history = useHistory()
    const onClick = () => {
        history.push('/')
    }
    return (
        <div className="login">
            <div className="login_wrap">
                <Card title="Login" bordered={true} style={{width: 400}}>
                    <Form>
                        <Form.Item
                            label="Username"
                        >
                            <Input></Input>
                        </Form.Item>
                        <Form.Item
                            label="Password"
                        >
                            <Input.Password></Input.Password>
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={onClick} type="primary">Login</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    )
}

export default Login;