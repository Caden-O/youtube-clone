import Profile from "@/components/profile";
import Home from "@/components/home";
import { View } from "react-native";
import { Redirect } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
      {/* <Profile /> */}
      <Redirect href="/(tabs)/home" />
    </View>
  );
}
