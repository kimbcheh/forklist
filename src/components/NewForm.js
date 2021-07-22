import { nanoid } from 'nanoid'
import FormContent from './FormContent'
import { Button, Card, Form, Input, Radio } from 'antd'

const { TextArea } = Input

function NewForm({ setData }) {
 const [form] = Form.useForm()
 function onFinish(values) {
  values.id = nanoid(10)
  console.log(values)
  setData((prevData) => [...prevData, values])
  form.resetFields()
 }
 return (
  <Card>
   <h2>Add a new restaurant</h2>
   <FormContent onFinish={onFinish} submitButton={true} />
  </Card>
 )
}

export default NewForm
