import TypeEmoji from './TypeEmoji'
import { useState } from 'react'
import { Card, Modal, Popconfirm, Space, Tag } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

function RestaurantList({ data, deleteItem }) {
 const [isEditModalVisible, setIsEditModalVisible] = useState(false)
 const [modalItem, setModalItem] = useState(data[0])

 const showEditModal = (id) => {
  let dataItem = data.find((item) => item.id === id)
  setModalItem(dataItem)
  setIsEditModalVisible(true)
 }

 const handleEditOk = () => {
  setIsEditModalVisible(false)
 }

 const handleEditCancel = () => {
  setIsEditModalVisible(false)
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
   <Modal
    title={`Edit: ${modalItem.restaurant}`}
    visible={isEditModalVisible}
    onOk={handleEditOk}
    onCancel={handleEditCancel}
   >
    <p>{modalItem.restaurant}</p>
   </Modal>
  </Card>
 )
}

export default RestaurantList
