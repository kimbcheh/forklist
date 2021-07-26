import TypeEmoji from './TypeEmoji'
import DeleteConfirm from './DeleteConfirm'
import EditForm from './EditForm'
import Filter from './Filter'
import { useEffect, useState } from 'react'
import { Card, Space, Tag } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

function RestaurantList({ data, deleteItem, editItem }) {
 const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
 const [isEditModalVisible, setIsEditModalVisible] = useState(false)
 const [modalItem, setModalItem] = useState(data[0])
 const [suburbList, setSuburbList] = useState(null)
 const [filterCriteria, setFilterCriteria] = useState()

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

 return (
  <Card>
   <Space direction='vertical' style={{ width: '100%' }}>
    <h2>Restaurant List</h2>
    {suburbList && (
     <Filter suburbList={suburbList} setFilterCriteria={setFilterCriteria} />
    )}
    {data.map((item) => {
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
          {item.restaurant} &#x2197;
         </a>
        ) : (
         <p style={{ fontWeight: 600, display: 'inline' }}>{item.restaurant}</p>
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
