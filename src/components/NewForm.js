import { Button, Card, Form, Input, Radio } from 'antd'

const { TextArea } = Input

function NewForm() {
 function onFinish(values) {
  console.log(values)
 }
 function onValuesChange(changedValues, allValues) {
  console.log(allValues)
 }
 return (
  <Card>
   <h2>Add a new restaurant</h2>
   <Form
    name='new'
    layout='vertical'
    onValuesChange={onValuesChange}
    onFinish={onFinish}
   >
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
      <Radio value={1}>$</Radio>
      <Radio value={2}>$$</Radio>
      <Radio value={3}>$$$</Radio>
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
