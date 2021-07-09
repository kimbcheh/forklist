import { Button, Form, Input, Radio } from 'antd'

const { TextArea } = Input

function NewForm() {
 return (
  <Form name='new'>
   <Form.Item
    label='Restaurant Name'
    name='restaurant'
    rules={[
     { required: true, message: 'Please input the name of the restaurant!' },
    ]}
   >
    <Input />
   </Form.Item>
   <Form.Item
    label='Suburb'
    name='suburb'
    rules={[
     {
      required: true,
      message: 'Please input the suburb where the restaurant is located!',
     },
    ]}
   >
    <Input />
   </Form.Item>
   <Form.Item
    label='Price range'
    name='price'
    rules={[
     {
      required: true,
      message: 'Please select the price range of the restaurant!',
     },
    ]}
   >
    <Radio.Group>
     <Radio value={1}>$</Radio>
     <Radio value={2}>$$</Radio>
     <Radio value={3}>$$$</Radio>
    </Radio.Group>
   </Form.Item>
   <Form.Item label='Note (optional)' name='note'>
    <TextArea showCount maxLength={100} />
   </Form.Item>
   <Form.Item>
    <Button type='primary' htmlType='submit'>
     Submit
    </Button>
   </Form.Item>
  </Form>
 )
}

export default NewForm
