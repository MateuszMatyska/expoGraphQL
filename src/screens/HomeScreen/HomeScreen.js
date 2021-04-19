import React from 'react'
import { SafeAreaView, Text} from 'react-native'
import { gql, useQuery } from '@apollo/client'
import {styles} from './styles'

// const CHAPTERS_QUERY = gql`
//   query Chapters {
//     chapters {
//       id
//       number
//       title
//     }
//   }
// `

const query = gql`
  query Luke {
    person @rest(type: "Person", path: "people/1/") {
      name
    }
  }
`;

const HomeScreen = () => {
    // const { data, loading } = useQuery(CHAPTERS_QUERY)
    // console.log(data);

    const { data, loading } = useQuery(query)
    console.log(data);

    return <SafeAreaView style={styles.container}>
        <Text>Download Data</Text>
    </SafeAreaView>
}

export default HomeScreen;