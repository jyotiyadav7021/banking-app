import React from 'react'
import Adminlayout from '../../Layout/Adminlayout'
import { Card, Form, Input } from 'antd'

const {Item}= Form;

const NewEmployee = () => {
  return (
    <Adminlayout >
        <div>
            <Card
            title="Add New Employee">
                <Form>
                    <Item>
                        <Input>
                        </Input>
                    </Item>
                </Form>

            </Card>
            <Card
            title="Employee List"
            className='md:col-span-2'>

            </Card>
        </div>
    </Adminlayout>
  )
}

export default NewEmployee
