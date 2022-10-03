import React from 'react';
import styled from 'styled-components/native';
import common from '../constants/common';
import { AppText } from './AppText';


interface Props {
    onPress?: () => void;
    backgroundColor?: string;
    padding?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    borderRadius?: number;
    width?: number;
    height?: number;
    borderWidth?: number;
    borderColor?: string;
    borderBottomWidth?: number;
    borderTopWidth?: number;
    borderLeftWidth?: number;
    borderRightWidth?: number;
    borderBottomColor?: string;
    borderTopColor?: string;
    borderLeftColor?: string;
    borderRightColor?: string;
    children: React.ReactNode;
    flex?: number;
}

function PressableButton(props: Props) {
    return (
        <ButtonContainer onPress={props.onPress}
            backgroundColor={props.backgroundColor}
            padding={props.padding}
            paddingTop={props.paddingTop}
            paddingBottom={props.paddingBottom}
            paddingLeft={props.paddingLeft}
            paddingRight={props.paddingRight}
            marginTop={props.marginTop}
            marginBottom={props.marginBottom}
            marginLeft={props.marginLeft}
            marginRight={props.marginRight}
            borderRadius={props.borderRadius}
            width={props.width}
            height={props.height}
            borderWidth={props.borderWidth}
            borderColor={props.borderColor}
            borderBottomWidth={props.borderBottomWidth}
            borderTopWidth={props.borderTopWidth}
            borderLeftWidth={props.borderLeftWidth}
            borderRightWidth={props.borderRightWidth}
            borderBottomColor={props.borderBottomColor}
            borderTopColor={props.borderTopColor}
            borderLeftColor={props.borderLeftColor}
            borderRightColor={props.borderRightColor}
            flex={props.flex}
        >
            {
                props.children
            }
        </ButtonContainer>
    );
}

const ButtonContainer = styled.Pressable<Props>`
    background-color: ${props => props.backgroundColor};
    padding: ${props => props.padding || 0}px;
    padding-top: ${props => props.paddingTop || 0}px;
    padding-bottom: ${props => props.paddingBottom || 0}px;
    padding-left: ${props => props.paddingLeft || 0}px;
    padding-right: ${props => props.paddingRight || 0}px;
    margin-top: ${props => props.marginTop || 0}px;
    margin-bottom: ${props => props.marginBottom || 0}px;
    margin-left: ${props => props.marginLeft || 0}px;
    margin-right: ${props => props.marginRight || 0}px;
    border-radius: ${props => props.borderRadius || 0}px;
    width: ${props => props.width || common.W_100_PERCENT}px;
    height: ${props => props.height ? props.height + 'px' : 'auto'};
    border-width: ${props => props.borderWidth || 0}px;
    border-color: ${props => props.borderColor || '#fff'}px;
    border-bottom-width: ${props => props.borderBottomWidth || 0}px;
    border-top-width: ${props => props.borderTopWidth || 0}px;
    border-left-width: ${props => props.borderLeftWidth || 0}px;
    border-right-width: ${props => props.borderRightWidth || 0}px;
    border-bottom-color: ${props => props.borderBottomColor || '#fff'}px;
    border-top-color: ${props => props.borderTopColor || '#fff'}px;
    border-left-color: ${props => props.borderLeftColor || '#fff'}px;
    border-right-color: ${props => props.borderRightColor || "#fff"}px;
    flex: ${props => props.flex || 0};
`;



export default PressableButton;