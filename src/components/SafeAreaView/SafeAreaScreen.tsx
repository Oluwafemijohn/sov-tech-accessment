import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import common from '../../constants/common';
import Container from '../Container';


export default function SafeAreaScreen(props: any) {
  return (
    <SafeAreaScreenStyle>
      <StatusBar />
      <Container
        testId={props.testId}
        backgroundColor={common.colors.white}
      >
        {props.children}
      </Container>
    </SafeAreaScreenStyle>
  );
}

const SafeAreaScreenStyle = styled.SafeAreaView`
    flex: 1;
    background-color: "#f00";
`




// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//   },
//   view: {
//     flex: 1,
//   },
// });


