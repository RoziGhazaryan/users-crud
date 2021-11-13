import React from "react";
import { Form, Input, Button } from "antd";
import useUserForm from "./useUserForm";

const UserForm = () => {
  const {
    name,
    surname,
    age,
    gender,
    info,
    onChangeName,
    onChangeSurname,
    onChangeAge,
    onChangeGender,
    onChangeInfo,
    onFinishFailed,
    onFinish
  } = useUserForm();

  return (
    <div className="add-user">
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
          label="name"
          name="name"
          rules={[{ required: true, message: 'Please input the name!' }]}
        >
          <Input value={name} onChange={onChangeName} />
        </Form.Item>
        <Form.Item
          label="surname"
          name="surname"
          rules={[{ required: true, message: 'Please input the surname!' }]}
        >
          <Input value={surname} onChange={onChangeSurname} />
        </Form.Item>
        <Form.Item
          label="age"
          name="age"
        >
          <Input value={age} onChange={onChangeAge} />
        </Form.Item>
        <Form.Item
          label="gender"
          name="gender"
        >
          <Input value={gender} onChange={onChangeGender} />
        </Form.Item>
        <Form.Item
          label="info"
          name="info"
        >
          <Input value={info} onChange={onChangeInfo} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UserForm;