import './App.less'
import { useState } from 'react'
import NewForm from './components/NewForm'
import RestaurantList from './components/RestaurantList'
import { Col, Layout, Row } from 'antd'

const { Header, Content, Footer } = Layout

function App() {
 let placeholderData = [
  {
   restaurant: 'Bakemono Bakers',
   suburb: 'CBD',
   type: 'Cafe',
   price: '$',
   link: 'https://www.bakemonobakers.com.au/',
   notes:
    'Belinda recommended the garlic cream cheese bread and take home matcha latte kit',
  },
  {
   restaurant: 'Marko',
   suburb: 'South Melbourne',
   type: 'Restaurant',
   price: '$',
   link: undefined,
   notes: undefined,
  },
  {
   restaurant: 'Aru',
   suburb: 'CBD',
   type: 'Restaurant',
   price: '$$$',
   link: 'https://www.broadsheet.com.au/melbourne/restaurants/aru-dining',
   notes: 'Bianca recommended the dry aged duck and claypot rice',
  },
 ]

 const [data, setData] = useState([...placeholderData])

 return (
  <Layout>
   <Header style={{ backgroundColor: '#fff' }}>
    <h1>Forklist</h1>
   </Header>
   <Content style={{ backgroundColor: '#fff', padding: '0 50px' }}>
    <Row>
     <Col xs={24} lg={12} style={{ backgroundColor: 'pink' }}>
      <NewForm setData={setData} />
     </Col>
     <Col xs={24} lg={12} style={{ backgroundColor: 'orange' }}>
      <RestaurantList data={data} />
     </Col>
    </Row>
   </Content>
   <Footer style={{ backgroundColor: '#fff' }}>Made by Kimberly Cheh</Footer>
  </Layout>
 )
}

export default App
