import gql from 'graphql-tag'

export const ALL_POSTS_QUERY = gql`
  query TMTestContentType{
    allTmtestcontenttype {
      results {
        body
        id
        publishdate
        abstract    
        picture
        title  
      }
    }
  }
`

export const SINGLE_POST_QUERY = gql`
  query Tmtestcontenttype($tmtestcontenttypeId: String!) {
  tmtestcontenttype(id: $tmtestcontenttypeId) {
    body
    abstract
    id
    picture
    publishdate
    title
  }
}
`