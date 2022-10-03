import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
// import { useFetchChuckNorrisJokes } from '../sever/Server';

import { AppText } from '../components/AppText';
import Container from '../components/Container';
import common from '../constants/common';
import PressableButton from '../components/PressableButton';
import RoutConstants from '../navigation/RoutConstants';
import { errorHandler, fetchJokeCategories, handleSuccess } from '../sever/Server';
import { appLog } from '../utils';

export default function HomeScreen(props: any) {

    const [categories, setCategories] = React.useState([]);

    const _fetchJokeCategories = async () => {
        await fetchJokeCategories()
            .then((res) => {
                handleSuccess(res)
                setCategories(res.data)

            })
            .catch((err) => {
                errorHandler(err)
            })
    }

    useEffect(() => {
        _fetchJokeCategories()
    }, [])



    return (
        <Container
            backgroundColor={common.colors.white}
            paddingLeft={common.WP(5)}
            paddingRight={common.WP(5)}
        >
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <PressableButton
                        paddingTop={common.WP(2)}
                        paddingBottom={common.WP(2)}
                        borderBottomWidth={1}
                        borderBottomColor={common.colors.green200}
                        onPress={() => {
                            appLog("item", item)
                            props.navigation.navigate(RoutConstants.JokeDetailsScreen, item)
                        }}
                    >
                        <AppText>{item}</AppText>
                    </PressableButton>
                )}
                keyExtractor={(item) => item}
            />
        </Container>
    )
}

