import React from "react";
import { Form, Input, Button, PageHeader } from "antd";
import useUserForm from "./useUserForm";
import './style.scss';
import './responsive.scss';

const UserForm = () => {
  const {
    onFinish,
    onChangeValue,
    values,
    isValid,
    initialValues,
    id,
    history,
  } = useUserForm();

  return (
    <div className="user-form-page">
      <PageHeader title={id ? 'Edit User' : 'Add User'} onBack={() => history.push('/users')} />
      <div className="form-cnt d_flex j_content_center a_items_center">
        <div className="user-form page-cnt">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            initialValues={initialValues}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item label="name" name="name">
              <Input value={values.name} onChange={({ target: { value } }) => {
                onChangeValue('name', value)
              }} />
            </Form.Item>
            <Form.Item label="surname" name="surname">
              <Input value={values.surname} onChange={({ target: { value } }) => {
                onChangeValue('surname', value)
              }} />
            </Form.Item>
            <Form.Item label="email" name="email">
              <Input value={values.email} onChange={({ target: { value } }) => {
                onChangeValue('email', value)
              }} />
            </Form.Item>
            <Form.Item label="address" name="address">
              <Input value={values.address} onChange={({ target: { value } }) => {
                onChangeValue('address', value)
              }} />
            </Form.Item>
            <Form.Item label="phone" name="phone">
              <Input value={values.phone} onChange={({ target: { value } }) => {
                onChangeValue('phone', value)
              }} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button disabled={!isValid} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default UserForm;