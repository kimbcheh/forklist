import { nanoid } from 'nanoid'
import FormContent from './FormContent'
import { Card } from 'antd'

function NewForm({ addRestaurant }) {
 function onFinish(values) {
  values.id = nanoid(10)
  console.log(values)
  addRestaurant(values)
 }
 return (
  <Card>
   <h2>Add a new restaurant</h2>
   <FormContent onFinish={onFinish} formName='new' />
  </Card>
 )
}

export default NewForm
