import React from "react";
import { HStack, Text, Pressable, Box } from "native-base";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

function Header(props: NativeStackHeaderProps) {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <HStack
      alignItems="center"
      px={4}
      justifyContent="center"
      height={top > 20 ? 50 + top : top}
      safeAreaTop
      bgColor="white"
    >
      <Pressable
        width="25%"
        onPress={props.back && navigation.goBack}
        _pressed={{ opacity: 0.4 }}
      >
        {props.back && (
          <FontAwesome size={15} name="chevron-left" color="black" />
        )}
      </Pressable>
      <Box justifyContent="center" alignItems="center" width="50%">
        <Text fontSize="lg" fontWeight="medium">
          {props.options.title}
        </Text>
      </Box>
      <Box width="25%"></Box>
    </HStack>
  );
}

export default Header;
