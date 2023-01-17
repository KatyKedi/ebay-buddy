import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
    query {
        items {
            _id
            name
            section
        }
    }
`

export const QUERY_ITEM = gql`
    query getItem($id: ID!) {
        item(_id: $id) {
            _id  
            name 
            description
            createdAt 
            size
            weight  
            section 
        }
    }
`

export const QUERY_SECTIONS = gql`
    query {
        sections {
            _id
            name
            full
        }
    }
`