import { Card, Tag } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

function RestaurantList() {
 return (
  <Card>
   <h2>Restaurant List</h2>
   <Card
    title='Napier Quarter'
    actions={[<EditOutlined />, <DeleteOutlined />]}
   >
    <p>Michelle recommended the chocolate and sea salt brownie</p>
    <div>
     <Tag color='purple'>Fitzroy</Tag> <Tag color='green'>$$</Tag>
    </div>
   </Card>
   <Card title='Aru' actions={[<EditOutlined />, <DeleteOutlined />]}>
    <p>Khanh Nguyen's new restaurant</p>
    <div>
     <Tag color='purple'>CBD</Tag> <Tag color='green'>$$$</Tag>
    </div>
   </Card>
   <Card title='Marko' actions={[<EditOutlined />, <DeleteOutlined />]}>
    <div>
     <Tag color='purple'>South Melbourne</Tag> <Tag color='green'>$</Tag>
    </div>
   </Card>
  </Card>
 )
}

export default RestaurantList
