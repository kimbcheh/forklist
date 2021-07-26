import { Button, Form, Select } from 'antd'

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
