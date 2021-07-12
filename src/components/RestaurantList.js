import { Card, Space, Tag } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

let placeholderData = [
 {
  restaurant: 'Napier Quarter',
  suburb: 'Fitzroy',
  price: '$$',
  notes: 'Michelle recommended the chocolate and sea salt brownie',
 },
 {
  restaurant: 'Bakemono Bakers',
  suburb: 'CBD',
  price: '$',
  notes: '',
 },
 {
  restaurant: 'Marko',
  suburb: 'South Melbourne',
  price: '$',
  notes: '',
 },
 {
  restaurant: 'Saint Dreux',
  suburb: 'CBD',
  price: '$',
  notes: 'For wagyu katsu sandos',
 },
 {
  restaurant: 'Auterra Wine Bar',
  suburb: 'CBD',
  price: '$$',
  notes: '',
 },
 {
  restaurant: 'Palermo',
  suburb: 'CBD',
  price: '$$$',
  notes: 'For Argentinian BBQ',
 },
]

function RestaurantList() {
 return (
  <Card>
   <Space direction='vertical' style={{ width: '100%' }}>
    <h2>Restaurant List</h2>
    {placeholderData.map((item) => {
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
