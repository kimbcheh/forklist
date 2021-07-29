import './App.less'
import { useState } from 'react'
import NewForm from './components/NewForm'
import RestaurantList from './components/RestaurantList'
import { Col, Layout, Row } from 'antd'

const { Header, Content, Footer } = Layout

function App() {
 let placeholderData = [
  {
   name: 'Bakemono Bakers',
   suburb: 'CBD',
   type: 'Cafe',
   price: '$',
   link: 'https://www.bakemonobakers.com.au/',
   notes:
    'Belinda recommended the garlic cream cheese bread and take home matcha latte kit',
   id: 'placeholder1',
  },
  {
   name: 'Marko',
   suburb: 'South Melbourne',
   type: 'Restaurant',
   price: '$',
   link: undefined,
   notes: undefined,
   id: 'placeholder2',
  },
  {
   name: 'Aru',
   suburb: 'CBD',
   type: 'Restaurant',
   price: '$$$',
   link: 'https://www.broadsheet.com.au/melbourne/restaurants/aru-dining',
   notes: 'Bianca recommended the dry aged duck and claypot rice',
   id: 'placeholder3',
  },
 ]

 const [data, setData] = useState([...placeholderData])

 function newItem(newItemData) {
  setData((prevData) => [...prevData, newItemData])
 }

 function deleteItem(id) {
  const remainingItems = data.filter((item) => id !== item.id)
  setData(remainingItems)
 }

 function editItem(id, editData) {
  const updatedItems = data.map((item) => {
   if (item.id === id) {
    return { ...editData, id: item.id }
   }
   return item
  })
  setData(updatedItems)
 }

 return (
  <Layout>
   <Header style={{ backgroundColor: '#fff' }}>
    <h1>Forklist</h1>
   </Header>
   <Content style={{ backgroundColor: '#fff', padding: '0 50px' }}>
    <Row>
     <Col xs={24} lg={12} style={{ backgroundColor: 'pink' }}>
      <NewForm newItem={newItem} />
     </Col>
     <Col xs={24} lg={12} style={{ backgroundColor: 'orange' }}>
      <RestaurantList data={data} deleteItem={deleteItem} editItem={editItem} />
     </Col>
    </Row>
   </Content>
   <Footer style={{ backgroundColor: '#fff' }}>Made by Kimberly Cheh</Footer>
  </Layout>
 )
}

export default App
