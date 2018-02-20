import React from 'react'
import {
  Modal,
  Checkbox,
  Form,
  Button,
  Header
} from 'semantic-ui-react'

const LaunchModal = () => (
  <Modal trigger={<Button>Sign Up for Updates</Button>} closeIcon>
    <Header icon='signup' content='Sign Up for Updates' />
    <Modal.Content>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Modal.Content>
  </Modal>
)

export default LaunchModal