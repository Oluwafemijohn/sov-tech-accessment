import { StyleProp, StyleSheet, Text, TextProps, TextStyle, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import common from '../constants/common';
import styled, { DefaultTheme } from 'styled-components/native';
import { StyledComponent } from 'styled-components';


interface AppTextProps {
    color?: string;
    fontSize?: number;
    fontWeight?: string;
    textAlign?: string;
    fontFamily?: string;
    lineHeight?: number;
    letterSpacing?: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    borderBottomWidth?: number;
    borderBottomColor?: string;
    children?: ReactNode;
    onPress?: () => void;
}


export const AppText = ({
    color,
    fontSize,
    fontWeight,
    textAlign,
    fontFamily,
    lineHeight,
    letterSpacing,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    paddingTop,
    paddingBottom,
    paddingLeft,
    borderBottomWidth,
    borderBottomColor,
    children,
    onPress,

}: AppTextProps) => <StyledText
    onPress={onPress}
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    textAlign={textAlign}
    fontFamily={fontFamily}
    lineHeight={lineHeight}
    letterSpacing={letterSpacing}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
    marginBottom={marginBottom}
    paddingTop={paddingTop}
    paddingBottom={paddingBottom}
    paddingLeft={paddingLeft}
    borderBottomWidth={borderBottomWidth}
    borderBottomColor={borderBottomColor}
>{children}</StyledText>




const StyledText = styled.Text<AppTextProps>`
    color: ${props => props.color ? props.color : common.colors.black};
    font-size: ${props => props.fontSize ? props.fontSize : common.WP(4)}px;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};

    line-height: ${props => props.lineHeight ? props.lineHeight : common.WP(5)}px;
    letter-spacing: ${props => props.letterSpacing ? props.letterSpacing : 0}px;
    margin-left: ${props => props.marginLeft ? props.marginLeft : 0}px;
    margin-right: ${props => props.marginRight ? props.marginRight : 0}px;
    margin-top: ${props => props.marginTop ? props.marginTop : 0}px;
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0}px;
    padding-top: ${props => props.paddingTop ? props.paddingTop : 0}px;
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : 0}px;
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : 0}px;
    border-bottom-width: ${props => props.borderBottomWidth ? props.borderBottomWidth : 0}px;
    border-bottom-color: ${props => props.borderBottomColor ? props.borderBottomColor : common.colors.white};
`

// const styles = StyleSheet.create({
//     container: {
//         color: common.colors.textColor,
//         fontSize: common.WP(4),
//     },
// })

