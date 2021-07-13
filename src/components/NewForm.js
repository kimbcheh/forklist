import { Button, Card, Form, Input, Radio } from 'antd'

const { TextArea } = Input

function NewForm({ setData }) {
 const [form] = Form.useForm()
 function onFinish(values) {
  console.log(values)
  setData((prevData) => [...prevData, values])
  form.resetFields()
 }
 return (
  <Card>
   <h2>Add a new restaurant</h2>
   <Form name='new' form={form} layout='vertical' onFinish={onFinish}>
    <Form.Item
     label='Restaurant'
     name='restaurant'
     rules={[
      { required: true, message: 'Please input the name of the restaurant!' },
     ]}
    >
     <Input placeholder='e.g. Napier Quarter' />
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
     <Input placeholder='e.g. Fitzroy' />
    </Form.Item>
    <Form.Item
     label='Price'
     name='price'
     rules={[
      {
       required: true,
       message: 'Please select the price range of the restaurant!',
      },
     ]}
    >
     <Radio.Group>
      <Radio value={'$'}>$</Radio>
      <Radio value={'$$'}>$$</Radio>
      <Radio value={'$$$'}>$$$</Radio>
     </Radio.Group>
    </Form.Item>
    <Form.Item label='Notes' name='notes'>
     <TextArea
      showCount
      maxLength={100}
      placeholder='e.g. Michelle recommended the chocolate and sea salt brownie'
     />
    </Form.Item>
    <Form.Item>
     <Button type='primary' htmlType='submit'>
      Submit
     </Button>
    </Form.Item>
   </Form>
  </Card>
 )
}

export default NewForm
