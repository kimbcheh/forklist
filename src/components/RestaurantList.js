import { Card, Tag } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

function RestaurantList() {
 return (
  <div>
   <p>RestaurantList component</p>
   <Card
    title='Napier Quarter'
    actions={[<EditOutlined />, <DeleteOutlined />]}
   >
    <p>Michelle recommended the chocolate and sea salt brownie</p>
    <div>
     <Tag color='purple'>Fitzroy</Tag> <Tag color='green'>$$</Tag>
    </div>
   </Card>
  </div>
 )
}

export default RestaurantList
