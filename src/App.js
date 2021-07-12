import './App.less'
import NewForm from './components/NewForm'
import RestaurantList from './components/RestaurantList'
import { Col, Layout, Row } from 'antd'

const { Header, Content, Footer } = Layout

function App() {
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
 return (
  <Layout>
   <Header style={{ backgroundColor: '#fff' }}>
    <h1>Forklist</h1>
   </Header>
   <Content style={{ backgroundColor: '#fff', padding: '0 50px' }}>
    <Row>
     <Col xs={24} lg={12} style={{ backgroundColor: 'pink' }}>
      <NewForm />
     </Col>
     <Col xs={24} lg={12} style={{ backgroundColor: 'orange' }}>
      <RestaurantList data={placeholderData} />
     </Col>
    </Row>
   </Content>
   <Footer style={{ backgroundColor: '#fff' }}>Made by Kimberly Cheh</Footer>
  </Layout>
 )
}

export default App
