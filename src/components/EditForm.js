import FormContent from './FormContent'
import { Modal } from 'antd'

function EditForm({
 isEditModalVisible,
 setIsEditModalVisible,
 modalItem,
 editRestaurant,
}) {
 function onFinish(values) {
  values.id = modalItem.id
  console.log(values)
  editRestaurant(values)
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
   />
  </Modal>
 )
}

export default EditForm
