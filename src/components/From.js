import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Select, Modal, Alert } from 'antd';
import '../components/Button.css';
import { products } from '../data/Product'


const { Option } = Select;


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const App = () => {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);

  const onFinish = (values) => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
    form.resetFields(); // รีเซ็ตค่าฟอร์มเมื่อปิด Modal
    Modal.success({
      content: 'Book Success',
    });
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Form
        {...formItemLayout}
        variant="filled"
        style={{
          maxWidth: 600,
          width:'100vw'
        }}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          label="Name for Book"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
            {
              pattern: /^[0-9]+$/,
              message: 'Please enter a valid phone number!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Select Product"
          name="product"
        >
          <Select>
            {products.map(product => (
              <Option key={product.id} value={product.name}>{product.name}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Date"
          name="date"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Book
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Booking Details"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Name: {form.getFieldValue('name')}</p>
        <p>Phone: {form.getFieldValue('phone')}</p>
        <p>Services: {form.getFieldValue('product')}</p>
        <p>Date: {form.getFieldValue('date')?.format('YYYY-MM-DD')}</p>
      </Modal>
    </div>
  );
};

export default App;
