import React from 'react'
import {
  Modal,
  Checkbox,
  Form,
  Button,
  Header
} from 'semantic-ui-react'

const LaunchModal = () => (
  <Modal trigger={<Button primary circular style={{ fontFamily: 'helvetica' }}>Sign Up for Updates</Button>} closeIcon >
    <Header icon='signup' content='Sign Up for Updates' />
    <Modal.Content>
      <Form action='https://formspree.io/jbongi@crowdcoverage.io' method='POST'>
        <Form.Field required>
          <label>Name</label>
          <input placeholder='Name' type='text' name='name' />
        </Form.Field>
        <Form.Field required>
          <label>Email</label>
          <input placeholder='Email' type='email' name='_replyto' />
        </Form.Field>
        <Form.Field required>
          <label>What are you interested in? </label>
          <select>
            <option>Token Pre-Sale</option>
            <option>Updates on the Dapp</option>
            <option>General Token Sale</option>
          </select>
        </Form.Field>
        <Form.Field >
          <label>Please add any specific notes here</label>
          <textarea>

          </textarea>
        </Form.Field>
        <Button type='submit' value='send'>Submit</Button>
      </Form>
    </Modal.Content>
  </Modal>
)

export default LaunchModal