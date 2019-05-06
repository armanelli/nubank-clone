import React from "react";
import { Animated } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Container, Top, Logo, Title } from "./styles";

import logo from "~/assets/Nubank_Logo.png";

export default function Header({ translateY }) {
  let opened = false;

  function toggleMenu() {
    alert("teste");

    Animated.timing(translateY, {
      toValue: opened ? 380 : 0,
      duration: 100,
      useNativeDriver: true
    }).start(() => {
      offset = opened ? 380 : 0;
      translateY.setOffset(offset);
      translateY.setValue(0);
    });
  }

  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Rafael</Title>
      </Top>
      <Icon name="keyboard-arrow-down" onPress={() => toggleMenu()} size={20} color="#FFF" />
    </Container>
  );
}
