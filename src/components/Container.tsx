import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

// const StyledView = styled.View`
//   background-color: "#f00";
//   flex: 1;
// `


interface ContainerProps {
    paddingLeft?: number;
    paddingRight?: number;

    backgroundColor?: string;
    children: ReactNode;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    borderRadius?: number;
    width?: number;
    height?: number;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    flex?: number;
    flexWrap?: string;
    position?: string;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    paddingTop?: number;
    paddingBottom?: number;
    borderColor?: string;
    borderWith?: number;
    borderBottomWidth?: number;
    borderTopWidth?: number;
    borderLeftWidth?: number;
    borderRightWidth?: number;
    borderBottomColor?: string;
    borderTopColor?: string;
    borderLeftColor?: string;
    borderRightColor?: string;
    testId?: string;

}
function Container(props: ContainerProps) {
    return (
        <StyledView
            paddingLeft={props.paddingLeft}
            paddingRight={props.paddingRight}
            backgroundColor={props.backgroundColor}
            marginTop={props.marginTop}
            marginBottom={props.marginBottom}
            marginLeft={props.marginLeft}
            marginRight={props.marginRight}
            borderRadius={props.borderRadius}
            width={props.width}
            height={props.height}
            justifyContent={props.justifyContent}
            alignItems={props.alignItems}
            flexDirection={props.flexDirection}
            flex={props.flex}
            flexWrap={props.flexWrap}
            position={props.position}
            top={props.top}
            bottom={props.bottom}
            left={props.left}
            right={props.right}
            paddingTop={props.paddingTop}
            paddingBottom={props.paddingBottom}
            borderWidth={props.borderWith}
            borderColor={props.borderColor}
            borderBottomWidth={props.borderBottomWidth}
            borderTopWidth={props.borderTopWidth}
            borderLeftWidth={props.borderLeftWidth}
            borderRightWidth={props.borderRightWidth}
            borderBottomColor={props.borderBottomColor}
            borderTopColor={props.borderTopColor}
            borderLeftColor={props.borderLeftColor}
            borderRightColor={props.borderRightColor}
            testID={props.testId}
        >
            {props.children}
        </StyledView>
    );
}


const StyledView = styled.View<ContainerProps>`
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : 0}px;
    padding-right: ${props => props.paddingRight ? props.paddingRight : 0}px;
    flex: 1;

    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
    margin-top: ${props => props.marginTop ? props.marginTop : 0}px;
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0}px;
    margin-left: ${props => props.marginLeft ? props.marginLeft : 0}px;
    margin-right: ${props => props.marginRight ? props.marginRight : 0}px;
    border-radius: ${props => props.borderRadius ? props.borderRadius : 0}px;
    width: ${props => props.width ? props.width : 'auto'};
    height: ${props => props.height ? props.height : 'auto'};
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};

    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'column'};
    flex: ${props => props.flex && props.flex};
    flex-wrap: ${props => props.flexWrap ? props.flexWrap : 'nowrap'};
    position: ${props => props.position ? props.position : 'relative'};
    top: ${props => props.top ? props.top : 0}px;
    bottom: ${props => props.bottom ? props.bottom : 0}px;
    left: ${props => props.left ? props.left : 0}px;
    right: ${props => props.right ? props.right : 0}px;
    padding-top: ${props => props.paddingTop ? props.paddingTop : 0}px;
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : 0}px;
    border-width: ${props => props.borderWith ? props.borderWith : 0}px;
    border-color: ${props => props.borderColor ? props.borderColor : 'transparent'};
    border-bottom-width: ${props => props.borderBottomWidth ? props.borderBottomWidth : 0}px;
    border-top-width: ${props => props.borderTopWidth ? props.borderTopWidth : 0}px;
    border-left-width: ${props => props.borderLeftWidth ? props.borderLeftWidth : 0}px;
    border-right-width: ${props => props.borderRightWidth ? props.borderRightWidth : 0}px;
    border-bottom-color: ${props => props.borderBottomColor ? props.borderBottomColor : 'transparent'};
    border-top-color: ${props => props.borderTopColor ? props.borderTopColor : 'transparent'};
    border-left-color: ${props => props.borderLeftColor ? props.borderLeftColor : 'transparent'};
    border-right-color: ${props => props.borderRightColor ? props.borderRightColor : 'transparent'};

`




export default Container;