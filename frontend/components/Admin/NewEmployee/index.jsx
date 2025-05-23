import React from 'react'
import Adminlayout from '../../Layout/Adminlayout'
import { Button, Card, Form, Input, Table } from 'antd'
import { DeleteOutlined, EditOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const {Item}= Form;

const NewEmployee = () => {

    const columns =[
        {
            title : "Profile",
            
            key:"profile"
        },
        {
            title : "Fullname",
            dataIndex:"fullname",
            key:"fullname"
        },
        {
            title : "Email",
            dataIndex:"email",
            key:"email"
        },
        {
            title : "Address",
            dataIndex:"address",
            key:"address"
        },
        {
            title : "Action",
            
            key:"action",
            render:()=>(
                <div className='flex gap-1'>
                    <Button 
                    type='text'
                    className='!bg-pink-100 !text-pink-500'
                    icon={<EyeInvisibleOutlined/>}></Button>
                    <Button 
                    type='text'
                    className='!bg-green-100 !text-green-500'
                    icon={<EditOutlined/>}></Button>
                    <Button 
                    type='text'
                    className='!bg-rose-100 !text-rose-500'
                    icon={<DeleteOutlined/>}></Button>
                </div>
            )
        },
    ]


  return (
    <Adminlayout >
        <div>
            <Card
            title="Add New Employee">
                <Form>
                    <Item
                    label="Profile"
                    name="xyz">
                        <Input type="file">
                        </Input>
                    </Item>
                    <div className='grid md:grid-cols-2 gap-x-2'>
                        <Item
                        name="fullname"
                        label="Fullname"
                        rules={[{required:true}]}>
                            <Input></Input>

                        </Item>
                        <Item
                        name="mobile"
                        label="Mobile"
                        rules={[{required:true}]}>
                            <Input type='number'></Input>

                        </Item>
                        <Item
                        name="email"
                        label="Email Id"
                        rules={[{required:true}]}>
                            <Input></Input>

                        </Item>
                        <Item
                        name="password"
                        label="Password"
                        rules={[{required:true}]}>
                            <Input ></Input>

                        </Item>

                    </div>
                    <Item
                    label="address"
                    name="Address">
                      <Input.TextArea/> 
                    </Item>
                    <Item>
                        <Button 
                        type="text"
                        htmlType='submit'
                        className='!bg-blue-500 !text-white !font-bold !w-full'>
                            Submit
                        </Button>
                    </Item>
                </Form>

            </Card>
            <Card
            title="Employee List"
            className='md:col-span-2'>
                <Table
                columns={columns}
                dataSource={[{},{}]}></Table>

            </Card>
        </div>
    </Adminlayout>
  )
}

export default NewEmployee
