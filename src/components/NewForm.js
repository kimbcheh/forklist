import { Button, Form, Input, Radio } from 'antd'

function NewForm() {
 return (
  <Form name='new'>
   <Form.Item label='Restaurant Name' name='restaurant'>
    <Input />
   </Form.Item>
   <Form.Item label='Suburb' name='suburb'>
    <Input />
   </Form.Item>
   <Form.Item label='Price range' name='price'>
    <Radio.Group>
     <Radio value={1}>$</Radio>
     <Radio value={2}>$$</Radio>
     <Radio value={3}>$$$</Radio>
    </Radio.Group>
   </Form.Item>
   <Form.Item label='Note (optional)' name='note'>
    <Input />
   </Form.Item>
   <Form.Item>
    <Button type='primary'>Submit</Button>
   </Form.Item>
  </Form>
 )
}

export default NewForm
