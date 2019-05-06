import styled from "styled-components/native";
import { Animated } from "react-native";

export const Container = styled(Animated.View)`
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  contentContainerStyle: { paddingLeft: 10, paddingRight: 10 },
  horizontal: true,
  showsHorizontalScrollIndicator: false
})``;

export const TabItem = styled.View`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #fff;
`;
