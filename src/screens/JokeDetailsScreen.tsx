import { FlatList, View } from 'react-native'
import React from 'react'
import { useFetchDetails } from '../sever/Server';
import { AppText } from '../components/AppText';
import { IDetails } from '../types/Types';
import styled from 'styled-components/native';
import moment from 'moment';
import Container from '../components/Container';
import common from '../constants/common';

export default function JokeDetailsScreen(props: any) {
    const data = useFetchDetails(props.route.params);
    const jokeDetails: IDetails = data?.data?.data
    // appLog("jokeDetails", jokeDetails.icon_url)



    return (
        <Container
            paddingLeft={common.WP(5)}
            paddingRight={common.WP(5)}
            backgroundColor={common.colors.white}
            flex={1}
        >
            {/* <IconImage
                source={{ uri: jokeDetails?.icon_url }}
            /> */}
            <Container
                flexDirection='row'
                flex={0.05}
                justifyContent='space-between'
                alignItems='center'
                borderBottomWidth={1}
                borderBottomColor={common.colors.grey300}
            >
                <AppText>Date</AppText>
                <AppText>{moment(jokeDetails?.created_at).format("DD-MM-YYYY")}</AppText>
            </Container>
            <Container
                flexDirection='row'
                flex={0.05}
                justifyContent='space-between'
                alignItems='center'
                borderBottomWidth={1}
                borderBottomColor={common.colors.grey300}
            >
                <AppText>Category</AppText>
                <AppText> {jokeDetails?.categories[0]}</AppText>
            </Container>
            <AppText
            >Details</AppText>
            <AppText>{jokeDetails?.value}</AppText>
        </Container>
    )
}

const IconImage = styled.Image`
    width: 50px;
    height: 50px;
`

// const styles = StyleSheet.create({
//     image: {
//         width: 50,
//         height: 50,
//     }
// })

