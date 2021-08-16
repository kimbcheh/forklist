import './App.less'
import { useEffect, useState } from 'react'
import axios from 'axios'
import NewForm from './components/NewForm'
import RestaurantList from './components/RestaurantList'
import { Col, Layout, Row } from 'antd'

const { Header, Content, Footer } = Layout

function App() {
 //  let placeholderData = [
 //   {
 //    name: 'Bakemono Bakers',
 //    suburb: 'CBD',
 //    type: 'Cafe',
 //    price: '$',
 //    link: 'https://www.bakemonobakers.com.au/',
 //    notes:
 //     'Belinda recommended the garlic cream cheese bread and take home matcha latte kit',
 //    id: 'placeholder1',
 //   },
 //   {
 //    name: 'Marko',
 //    suburb: 'South Melbourne',
 //    type: 'Restaurant',
 //    price: '$',
 //    link: undefined,
 //    notes: undefined,
 //    id: 'placeholder2',
 //   },
 //   {
 //    name: 'Aru',
 //    suburb: 'CBD',
 //    type: 'Restaurant',
 //    price: '$$$',
 //    link: 'https://www.broadsheet.com.au/melbourne/restaurants/aru-dining',
 //    notes: 'Bianca recommended the dry aged duck and claypot rice',
 //    id: 'placeholder3',
 //   },
 //  ]

 const [data, setData] = useState([])
 const [isLoading, setIsLoading] = useState(true)
 const [isError, setIsError] = useState(false)

 async function getRestaurants() {
  try {
   const response = await axios.get(
    'https://ap-southeast-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/forklist-oixeo/service/restaurants/incoming_webhook/rest-get'
   )
   setData(response.data)
   setIsLoading(false)
  } catch (error) {
   console.error(error)
   setIsError(true)
   setIsLoading(false)
  }
 }

 useEffect(() => {
  getRestaurants()
 }, [])

 async function addRestaurant(newItemData) {
  try {
   const response = await axios.post(
    'https://ap-southeast-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/forklist-oixeo/service/restaurants/incoming_webhook/rest-add',
    newItemData
   )
   setIsLoading(true)
   console.log(response)
   getRestaurants()
  } catch (error) {
   console.error(error)
  }
 }

 async function deleteRestaurant(id) {
  try {
   const response = await axios.delete(
    'https://ap-southeast-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/forklist-oixeo/service/restaurants/incoming_webhook/rest-del',
    { params: { id: id } }
   )
   setIsLoading(true)
   console.log(response)
   getRestaurants()
  } catch (error) {
   console.error(error)
  }
 }

 async function editRestaurant(editItemData) {
  try {
   const response = await axios.put(
    'https://ap-southeast-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/forklist-oixeo/service/restaurants/incoming_webhook/rest-edit',
    editItemData
   )
   setIsLoading(true)
   console.log(response)
   getRestaurants()
  } catch (error) {
   console.error(error)
  }
 }

 function deleteItem(id) {
  console.log(`mock deleted ${id}`)
 }

 //  function editItem(id, editData) {
 //   const updatedItems = data.map((item) => {
 //    if (item.id === id) {
 //     return { ...editData, id: item.id }
 //    }
 //    return item
 //   })
 //   setData(updatedItems)
 //  }

 return (
  <Layout>
   <Header style={{ backgroundColor: '#fff' }}>
    <h1>Forklist</h1>
   </Header>
   <Content style={{ backgroundColor: '#fff', padding: '0 50px' }}>
    <Row>
     <Col xs={24} lg={12} style={{ backgroundColor: 'pink' }}>
      <NewForm addRestaurant={addRestaurant} />
     </Col>
     <Col xs={24} lg={12} style={{ backgroundColor: 'orange' }}>
      {/* {!isLoading && (
       <RestaurantList
        data={data}
        deleteItem={deleteItem}
        editItem={editItem}
       />
      )} */}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Sorry there's an error!</p>}
      {!isLoading && !isError && (
       <RestaurantList
        data={data}
        deleteRestaurant={deleteRestaurant}
        editRestaurant={editRestaurant}
       />
      )}
     </Col>
    </Row>
   </Content>
   <Footer style={{ backgroundColor: '#fff' }}>Made by Kimberly Cheh</Footer>
  </Layout>
 )
}

export default App
