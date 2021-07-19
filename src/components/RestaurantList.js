import TypeEmoji from './TypeEmoji'
import DeleteConfirm from './DeleteConfirm'
import EditForm from './EditForm'
import { useState } from 'react'
import { Card, Popconfirm, Space, Tag } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

function RestaurantList({ data, deleteItem, editItem }) {
 const [isEditModalVisible, setIsEditModalVisible] = useState(false)
 const [modalItem, setModalItem] = useState(data[0])

 const showEditModal = (id) => {
  let dataItem = data.find((item) => item.id === id)
  setModalItem(dataItem)
  setIsEditModalVisible(true)
 }

 return (
  <Card>
   <Space direction='vertical' style={{ width: '100%' }}>
    <h2>Restaurant List</h2>
    {data.map((item) => {
     return (
      <Card
       key={item.id}
       actions={[
        <EditOutlined onClick={() => showEditModal(item.id)} />,
        <Popconfirm
         title='Are you sure to delete this restaurant?'
         onConfirm={() => {
          deleteItem(item.id)
         }}
         okText='Yes'
         cancelText='No'
        >
         <DeleteOutlined />
        </Popconfirm>,
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
   <DeleteConfirm />
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
