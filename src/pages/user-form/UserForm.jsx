import React from "react";
import { Form, Input, Button } from "antd";
import useUserForm from "./useUserForm";

const UserForm = () => {
  const {
    onFinish,
    onChange,
    values,
    isValid,
    initialValues,
  } = useUserForm();

  return (
    <div className="add-user">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={initialValues}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="name"
          name="name"
        >
          <Input value={values.name} onChange={({ target }) => {
            onChange('name', target.value)
          }} />
        </Form.Item>
        <Form.Item
          label="surname"
          name="surname"
        >
          <Input value={values.surname} onChange={({ target }) => {
            onChange('surname', target.value)
          }} />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
        >
          <Input value={values.email} onChange={({ target }) => {
            onChange('email', target.value)
          }} />
        </Form.Item>
        <Form.Item
          label="address"
          name="address"
        >
          <Input value={values.address} onChange={({ target }) => {
            onChange('address', target.value)
          }} />
        </Form.Item>
        <Form.Item
          label="phone"
          name="phone"
        >
          <Input value={values.phone} onChange={({ target }) => {
            onChange('phone', target.value)
          }} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button disabled={!isValid} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UserForm;