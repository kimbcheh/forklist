import { Button, Form, Input, Radio } from 'antd'

const { TextArea } = Input

function FormContent({ onFinish, submitButton, formName }) {
 const [form] = Form.useForm()
 return (
  <div>
   <Form name={formName} form={form} layout='vertical' onFinish={onFinish}>
    <Form.Item
     label='Restaurant'
     name='restaurant'
     rules={[
      { required: true, message: 'Please input the name of the restaurant!' },
      {
       whitespace: true,
       message: 'Please input the name of the restaurant!',
      },
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
      {
       whitespace: true,
       message: 'Please input the suburb where the restaurant is located!',
      },
     ]}
    >
     <Input placeholder='e.g. Fitzroy' />
    </Form.Item>
    <Form.Item
     label='Type'
     name='type'
     rules={[
      {
       required: true,
       message: 'Please select the type of restaurant!',
      },
     ]}
    >
     <Radio.Group>
      <Radio value={'Restaurant'}>Restaurant</Radio>
      <Radio value={'Cafe'}>Cafe</Radio>
      <Radio value={'Bar'}>Bar</Radio>
      <Radio value={'Dessert'}>Dessert</Radio>
     </Radio.Group>
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
    <Form.Item
     label='Link'
     name='link'
     type='url'
     rules={[
      {
       type: 'url',
       message: 'Please input a valid URL!',
      },
     ]}
    >
     <Input placeholder='e.g. http://napierquarter.com.au/' />
    </Form.Item>
    <Form.Item label='Notes' name='notes'>
     <TextArea
      showCount
      maxLength={100}
      placeholder='e.g. Michelle recommended the chocolate and sea salt brownie'
     />
    </Form.Item>
    {submitButton && (
     <Form.Item>
      <Button type='primary' htmlType='submit'>
       Submit
      </Button>
     </Form.Item>
    )}
   </Form>
  </div>
 )
}

export default FormContent
