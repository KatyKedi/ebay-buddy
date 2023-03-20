import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`

export const ADD_ITEM = gql`
  mutation addItem($name: String!, $description: String, $size: String, $weight: Float, $section: String!) {
    addItem(name: $name, description: $description, size: $size, weight: $weight, section: $section) {
      name
      description
      size
      weight
      section
    }
  }
`

export const EDIT_ITEM = gql`
  mutation editItem($id: ID!, $name: String!, $description: String, $size: String, $weight: Float, $section: String!) {
    editItem(_id: $id, name: $name, description: $description, size: $size, weight: $weight, section: $section) {
      name
      description
      size
      weight
      section
    }
  }
`

export const DELETE_ITEM = gql`
  mutation deleteItem($id: ID!) {
    deleteItem(_id: $id) {
      _id
    }
  }`

export const ADD_SECTION = gql`
  mutation addSection($name: String!, $full: Boolean) {
    addSection(name: $name, full: $full) {
      name
      full
    }
  }
`

export const EDIT_SECTION = gql`
  mutation editSection($id: ID!, $name: String!, $full: Boolean) {
    editSection(_id: $id, name: $name, full: $full) {
      name
      full
    }
  }
`

export const DELETE_SECTION = gql`
  mutation deleteSection($id: ID!) {
    deleteSection(_id: $id) {
      _id
    }
  }
`