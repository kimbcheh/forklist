import { Button, Form, Radio, Select } from 'antd'

const { Option } = Select

function Filter({ suburbList, setFilterCriteria }) {
 const [form] = Form.useForm()
 function onFinish(values) {
  console.log(values)
  setFilterCriteria(values)
 }
 function clearFilter() {
  setFilterCriteria()
  form.resetFields()
 }

 return (
  <div>
   <Form name='filter' onFinish={onFinish} form={form}>
    <Form.Item label='Filter by suburb:' name='suburb'>
     <Select allowClear style={{ width: '100%' }}>
      {suburbList.map((suburb) => {
       return (
        <Option value={suburb} key={suburb}>
         {suburb}
        </Option>
       )
      })}
     </Select>
    </Form.Item>
    <Form.Item label='Filter by type' name='type'>
     <Radio.Group>
      <Radio value={'Restaurant'}>Restaurant</Radio>
      <Radio value={'Cafe'}>Cafe</Radio>
      <Radio value={'Bar'}>Bar</Radio>
      <Radio value={'Dessert'}>Dessert</Radio>
     </Radio.Group>
    </Form.Item>
    <Form.Item label='Filter by price' name='price'>
     <Radio.Group>
      <Radio value={'$'}>$</Radio>
      <Radio value={'$$'}>$$</Radio>
      <Radio value={'$$$'}>$$$</Radio>
     </Radio.Group>
    </Form.Item>
    <Form.Item>
     <Button htmlType='submit' type='primary'>
      Filter
     </Button>
    </Form.Item>
    <Form.Item>
     <Button htmlType='button' onClick={clearFilter}>
      Clear filter
     </Button>
    </Form.Item>
   </Form>
  </div>
 )
}

export default Filter
