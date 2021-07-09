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
     <Col span={12}>Content Left</Col>
     <Col span={12}>Content Right</Col>
    </Row>
   </Content>
   <Footer style={{ backgroundColor: '#fff' }}>Made by Kimberly Cheh</Footer>
  </Layout>
 )
}

export default App
