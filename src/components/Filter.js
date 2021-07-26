import { Select } from 'antd'

const { Option } = Select

function Filter({ suburbList }) {
 return (
  <div>
   <p>Filter by suburbs:</p>
   <Select mode='multiple' allowClear style={{ width: '100%' }}>
    {suburbList.map((suburb) => {
     return <Option value={suburb}>{suburb}</Option>
    })}
   </Select>
  </div>
 )
}

export default Filter
