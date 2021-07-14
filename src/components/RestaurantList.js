import TypeEmoji from './TypeEmoji'
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
       actions={[<EditOutlined />, <DeleteOutlined />]}
      >
       <Space>
        <TypeEmoji type={item.type} />
        {item.link ? (
         <a
          href={item.link}
          style={{ fontWeight: 600, color: 'black' }}
          target='_blank'
          rel='noopener noreferrer'
         >
          {item.restaurant} &#x2197;
         </a>
        ) : (
         <p style={{ fontWeight: 600, display: 'inline' }}>{item.restaurant}</p>
        )}
       </Space>
       <p style={{ fontStyle: 'italic' }}>{item.notes}</p>
       <div>
        <Tag>{item.suburb}</Tag>
        <Tag color='blue'>{item.type}</Tag>
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
