import { Button, Form, Select } from 'antd'
import { useState } from 'react'

const { Option } = Select

function Filter({ suburbList }) {
 const [filterCriteria, setFilterCriteria] = useState()

 function onFinish(values) {
  console.log(values)
 }

 return (
  <div>
   <Form name='filter' onFinish={onFinish}>
    <Form.Item label='Filter by suburb:' name='suburbFilter'>
     <Select mode='multiple' allowClear style={{ width: '100%' }}>
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
     <Button htmlType='submit'>Filter</Button>
    </Form.Item>
   </Form>
  </div>
 )
}

export default Filter
