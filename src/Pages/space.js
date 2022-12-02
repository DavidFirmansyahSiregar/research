import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space, Upload } from 'antd';

export const spasi = () => (
  <Space>
    Space
    <Button type="primary">Button</Button>
    <Upload>
      <Button>
        <UploadOutlined /> Click to Upload
      </Button>
    </Upload>
    <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
      <Button>Confirm</Button>
    </Popconfirm>
  </Space>
);