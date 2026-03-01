import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ShortsItem } from "./shortsSuggested";
import ShortsData from "./shorts.json";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Short = ShortsData as ShortsItem[];
const screenHeight = Dimensions.get("window").height;

const SHORT_WIDTH = 400;
const SHORT_HEIGHT = screenHeight - 60;

const Shorts = () => {
  const router = useRouter();
  const short = Short[0];

  return (
    <View style={styles.container}>
      {/* Wrapper to set screen width */}
      <View style={styles.shortWrapper}>
        {/* Short */}
        <Image source={{ uri: short.thumbnail }} style={styles.short} />

        {/* Header Overlay */}
        <View style={styles.header}>
          <View style={styles.leftIcons}>
            <TouchableOpacity onPress={() => router.push("/")}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.rightIcons}>
            <Ionicons name="search" size={24} color="white" />
            <Ionicons name="menu" size={24} color="white" />
          </View>
        </View>

        {/* Sidebar Overlay */}
        <View style={styles.sidebar}>
          <Ionicons name="thumbs-up-outline" size={24} color="white" />
          <Ionicons name="thumbs-down-outline" size={24} color="white" />
          <Ionicons name="chatbox-ellipses-outline" size={24} color="white" />
          <Ionicons name="share-outline" size={24} color="white" />
          <Ionicons name="sync-outline" size={24} color="white" />
        </View>

        {/* Footer Overlay */}
        <View style={styles.footer}>
          {/* Channel Info */}
          <View style={styles.channelInfo}>
            <Image
              source={{ uri: short.channelImage }}
              style={styles.channelProfileImage}
            />
            <Text style={styles.channelName}>{short.channelName}</Text>
          </View>
          {/* Short Title */}
          <Text style={styles.shortTitle}>{short.caption}</Text>
        </View>
      </View>
    </View>
  );
};

export default Shorts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  shortWrapper: {
    width: SHORT_WIDTH,
    height: SHORT_HEIGHT,
    position: "relative",
  },
  header: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  footer: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
  },
  channelInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  channelProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  short: {
    width: SHORT_WIDTH,
    height: SHORT_HEIGHT,
    resizeMode: "cover",
    borderRadius: 20,
    marginRight: 10,
  },
  leftIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  sidebar: {
    position: "absolute",
    right: 20,
    bottom: 30,
    flexDirection: "column",
    gap: 20,
  },
  channelName: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  shortTitle: {
    color: "white",
    fontSize: 14,
  },
});
