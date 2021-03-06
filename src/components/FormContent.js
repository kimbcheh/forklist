import { Button, Form, Input, Radio } from 'antd'

const { TextArea } = Input

function FormContent({
 onFinish,
 formName,
 preserveForm,
 initialValues,
 loadingButton,
}) {
 const [form] = Form.useForm()

 function onFormFinish(values) {
  onFinish(values)
  form.resetFields()
 }

 return (
  <div>
   <Form
    name={formName}
    form={form}
    layout='vertical'
    onFinish={onFormFinish}
    preserve={preserveForm}
    initialValues={initialValues}
   >
    <Form.Item
     label='Name'
     name='name'
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
      { required: true, message: 'Please input a URL!' },
      { whitespace: true, type: 'url', message: 'Please input a valid URL!' },
     ]}
    >
     <Input placeholder='e.g. http://napierquarter.com.au/' />
    </Form.Item>
    <Form.Item
     label='Notes'
     name='notes'
     rules={[
      { required: true, message: 'Please input some notes!' },
      { whitespace: true, message: 'Please input some notes!' },
     ]}
    >
     <TextArea
      showCount
      maxLength={100}
      placeholder='e.g. Michelle recommended the chocolate and sea salt brownie'
     />
    </Form.Item>
    <Form.Item>
     <Button type='primary' htmlType='submit' loading={loadingButton}>
      Submit
     </Button>
    </Form.Item>
   </Form>
  </div>
 )
}

export default FormContent
