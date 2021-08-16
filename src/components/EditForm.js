import { useState } from 'react'
import FormContent from './FormContent'
import { Modal } from 'antd'

function EditForm({
 isEditModalVisible,
 setIsEditModalVisible,
 modalItem,
 editRestaurant,
}) {
 const [confirmEditLoading, setConfirmEditLoading] = useState(false)

 function onFinish(values) {
  setConfirmEditLoading(true)
  values.id = modalItem.id
  console.log(values)
  editRestaurant(values)
  setConfirmEditLoading(false)
  setIsEditModalVisible(false)
 }

 const handleEditCancel = () => {
  setIsEditModalVisible(false)
 }
 return (
  <Modal
   title={`Edit: ${modalItem.name}`}
   visible={isEditModalVisible}
   onCancel={handleEditCancel}
   footer={null}
   destroyOnClose
  >
   <FormContent
    formName='edit'
    preserveForm={false}
    initialValues={modalItem}
    onFinish={onFinish}
    loadingButton={confirmEditLoading}
   />
  </Modal>
 )
}

export default EditForm
