import { Card, Space, Tag } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

function RestaurantList({ data }) {
 return (
  <Card>
   <Space direction='vertical' style={{ width: '100%' }}>
    <h2>Restaurant List</h2>
    {data.map((item) => {
     return (
      <Card
       key={item.restaurant}
       title={item.restaurant}
       actions={[<EditOutlined />, <DeleteOutlined />]}
      >
       <p>{item.notes}</p>
       <div>
        <Tag color='purple'>{item.suburb}</Tag>{' '}
        <Tag color='green'>{item.price}</Tag>
       </div>
      </Card>
     )
    })}
   </Space>
  </Card>
 )
}

export default RestaurantList
