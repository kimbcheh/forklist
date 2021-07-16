import { useEffect } from 'react'
import { Form, Input, Modal, Radio } from 'antd'

const { TextArea } = Input

function EditForm({
 isEditModalVisible,
 setIsEditModalVisible,
 modalItem,
 editItem,
}) {
 const [form] = Form.useForm()

 useEffect(() => {
  form.setFieldsValue(modalItem)
 }, [form, modalItem])

 const handleEditOk = () => {
  form.validateFields().then((values) => {
   editItem(modalItem.id, values)
  })
  setIsEditModalVisible(false)
 }

 const handleEditCancel = () => {
  setIsEditModalVisible(false)
 }
 return (
  <Modal
   title={`Edit: ${modalItem.restaurant}`}
   visible={isEditModalVisible}
   onOk={handleEditOk}
   onCancel={handleEditCancel}
   destroyOnClose
  >
   <Form
    form={form}
    name='edit'
    layout='vertical'
    preserve={false}
    initialValues={modalItem}
   >
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
   </Form>
  </Modal>
 )
}

export default EditForm
