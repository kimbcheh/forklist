import FormContent from './FormContent'
import { Modal } from 'antd'

function EditForm({
 isEditModalVisible,
 setIsEditModalVisible,
 modalItem,
 editItem,
}) {
 function onFinish(values) {
  console.log(values)
  editItem(modalItem.id, values)
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
