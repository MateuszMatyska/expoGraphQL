import React from 'react'
import { SafeAreaView, Text} from 'react-native'
import { gql, useQuery } from '@apollo/client'
import {styles} from './styles'

const CHAPTERS_QUERY = gql`
  query Chapters {
    chapters {
      id
      number
      title
    }
  }
`

const HomeScreen = () => {
    const { data, loading } = useQuery(CHAPTERS_QUERY)
    console.log(data);

    return <SafeAreaView style={styles.container}>
        <Text>Download Data</Text>
    </SafeAreaView>
}

export default HomeScreen;