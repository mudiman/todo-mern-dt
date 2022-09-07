import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { toast } from "react-toastify";
import { useStore } from "../store/authStore";

const Login: React.FC = () => {
  const { token, login } = useStore();

  const onFinish = (values: { username: string; password: string }) => {
    console.log("Success:", values);
    login(values.username, values.password);
  };

  const onFinishFailed = (errorInfo: any) => {
    toast.success("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
