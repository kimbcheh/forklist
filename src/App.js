import './App.less'
import NewForm from './components/NewForm'
import RestaurantList from './components/RestaurantList'
import { Col, Layout, Row } from 'antd'

const { Header, Content, Footer } = Layout

function App() {
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
      <RestaurantList />
     </Col>
    </Row>
   </Content>
   <Footer style={{ backgroundColor: '#fff' }}>Made by Kimberly Cheh</Footer>
  </Layout>
 )
}

export default App
