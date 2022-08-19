import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
    query {
        items {
            _id
            name
        }
    }
`

export const QUERY_ITEM = gql`
    query getItem($id: ID!) {
        item(_id: $id) {
            _id  
            name 
            createdAt    
        }
    }
`