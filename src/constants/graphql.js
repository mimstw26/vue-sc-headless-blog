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