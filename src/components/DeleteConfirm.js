import { Modal } from 'antd'

function DeleteConfirm({
 modalItem,
 isDeleteModalVisible,
 setIsDeleteModalVisible,
 deleteItem,
}) {
 const handleDeleteOk = () => {
  deleteItem(modalItem.id)
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
  >
   <p>Are you sure you want to delete {modalItem.name} from your list?</p>
  </Modal>
 )
}

export default DeleteConfirm
