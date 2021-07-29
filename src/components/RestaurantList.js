import TypeEmoji from './TypeEmoji'
import DeleteConfirm from './DeleteConfirm'
import EditForm from './EditForm'
import Filter from './Filter'
import { useEffect, useState } from 'react'
import { Card, Empty, Space, Tag } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

function RestaurantList({ data, deleteItem, editItem }) {
 const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
 const [isEditModalVisible, setIsEditModalVisible] = useState(false)
 const [modalItem, setModalItem] = useState(data[0])
 const [suburbList, setSuburbList] = useState(null)
 const [filterCriteria, setFilterCriteria] = useState()
 const [filteredData, setFilteredData] = useState(data)

 const showDeleteModal = (id) => {
  let dataItem = data.find((item) => item.id === id)
  setModalItem(dataItem)
  setIsDeleteModalVisible(true)
 }

 const showEditModal = (id) => {
  let dataItem = data.find((item) => item.id === id)
  setModalItem(dataItem)
  setIsEditModalVisible(true)
 }

 useEffect(() => {
  const list = data.map((item) => {
   return item.suburb
  })
  const uniqueList = [...new Set(list)]
  const orderedList = uniqueList.sort()
  setSuburbList(orderedList)
 }, [data])

 useEffect(() => {
  function bySuburb(obj) {
   if (!filterCriteria.suburb) {
    return true
   } else return obj.suburb === filterCriteria.suburb
  }
  function byType(obj) {
   if (!filterCriteria.type) {
    return true
   } else return obj.type === filterCriteria.type
  }
  function byPrice(obj) {
   if (!filterCriteria.price) {
    return true
   }
   return obj.price === filterCriteria.price
  }
  if (!filterCriteria) {
   setFilteredData(data)
   return
  } else {
   let filteredList = data.filter(bySuburb).filter(byType).filter(byPrice)
   setFilteredData(filteredList)
  }
 }, [data, filterCriteria])

 return (
  <Card>
   <Space direction='vertical' style={{ width: '100%' }}>
    <h2>Restaurant List</h2>
    {suburbList && (
     <Filter suburbList={suburbList} setFilterCriteria={setFilterCriteria} />
    )}
    {filterCriteria && (
     <p style={{ fontStyle: 'italic' }}>
      You're looking for{' '}
      {filterCriteria.type
       ? `a ${filterCriteria.type.toLowerCase()}`
       : 'a place'}{' '}
      {filterCriteria.suburb ? `located in ${filterCriteria.suburb}` : ''}{' '}
      {filterCriteria.price ? `in the ${filterCriteria.price} price range` : ''}
      ...
     </p>
    )}
    {filteredData.length < 1 && (
     <Empty description={<span>Sorry no restaurants found!</span>} />
    )}
    {filteredData.map((item) => {
     return (
      <Card
       key={item.id}
       actions={[
        <EditOutlined onClick={() => showEditModal(item.id)} />,
        <DeleteOutlined onClick={() => showDeleteModal(item.id)} />,
       ]}
      >
       <Space>
        <TypeEmoji type={item.type} />
        {item.link ? (
         <a
          href={item.link}
          style={{ fontWeight: 600, color: 'black' }}
          target='_blank'
          rel='noopener noreferrer'
         >
          {item.name} &#x2197;
         </a>
        ) : (
         <p style={{ fontWeight: 600, display: 'inline' }}>{item.name}</p>
        )}
       </Space>
       <p style={{ fontStyle: 'italic' }}>{item.notes}</p>
       <div>
        <Tag>{item.suburb}</Tag>
        <Tag color='blue'>{item.type}</Tag>
        <Tag color='green'>{item.price}</Tag>
       </div>
      </Card>
     )
    })}
   </Space>
   <DeleteConfirm
    modalItem={modalItem}
    isDeleteModalVisible={isDeleteModalVisible}
    setIsDeleteModalVisible={setIsDeleteModalVisible}
    deleteItem={deleteItem}
   />
   <EditForm
    modalItem={modalItem}
    isEditModalVisible={isEditModalVisible}
    setIsEditModalVisible={setIsEditModalVisible}
    editItem={editItem}
   />
  </Card>
 )
}

export default RestaurantList
