import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default function Menu({  translateY }){
    return(
        <Container style={{
            opacity:  translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
            }),
        }}>
            <Code>
                <QRCode value="https://nubank.com.br/" 
                size={80} 
                fgColor="#FFF"
                bgColor="#8B10AE"
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                    <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Perfil</NavText>
                    <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
                </NavItem>
                <NavItem>
                    <Icon name="monetization-on" size={20} color="#FFF" />
                    <NavText>Configurar conta</NavText>
                    <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar cartão</NavText>
                    <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
                </NavItem>
                <NavItem>
                    <Icon name="store" size={20} color="#FFF" />
                    <NavText>Pedir conta PJ</NavText>
                    <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText>Configurações do app</NavText>
                    <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
                </NavItem>
            </Nav>
            <SignOutButton onPress={()=> {}}>
                <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}