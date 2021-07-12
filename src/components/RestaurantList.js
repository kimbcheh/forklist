import { Card, Tag } from 'antd'

function RestaurantList() {
 return (
  <div>
   <p>RestaurantList component</p>
   <Card style={{ width: '400px' }} title='Napier Quarter'>
    <p>Michelle recommended the chocolate and sea salt brownie</p>
    <div>
     <Tag color='purple'>Fitzroy</Tag> <Tag color='green'>$$</Tag>
    </div>
   </Card>
  </div>
 )
}

export default RestaurantList
