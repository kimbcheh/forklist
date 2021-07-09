import './App.less'
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
     <Col xs={24} md={12} style={{ backgroundColor: 'pink' }}>
      Content Left (form to add restaurant)
     </Col>
     <Col xs={24} md={12} style={{ backgroundColor: 'orange' }}>
      Content Right (list of restaurant cards)
     </Col>
    </Row>
   </Content>
   <Footer style={{ backgroundColor: '#fff' }}>Made by Kimberly Cheh</Footer>
  </Layout>
 )
}

export default App
