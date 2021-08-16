import { useState } from 'react'
import { Modal } from 'antd'

function DeleteConfirm({
 modalItem,
 isDeleteModalVisible,
 setIsDeleteModalVisible,
 deleteRestaurant,
}) {
 const [confirmDeleteLoading, setConfirmDeleteLoading] = useState(false)

 const handleDeleteOk = () => {
  setConfirmDeleteLoading(true)
  deleteRestaurant(modalItem.id)
  setConfirmDeleteLoading(false)
  setIsDeleteModalVisible(false)
 }

 const handleDeleteCancel = () => {
  setIsDeleteModalVisible(false)
 }

 return (
  <Modal
   title={`Delete: ${modalItem.name}`}
   visible={isDeleteModalVisible}
   onOk={handleDeleteOk}
   onCancel={handleDeleteCancel}
   okText='Confirm'
   confirmLoading={confirmDeleteLoading}
  >
   <p>Are you sure you want to delete {modalItem.name} from your list?</p>
  </Modal>
 )
}

export default DeleteConfirm
