import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export type ShortsItem = {
  id: number;
  channelName: string;
  channelImage: string;
  thumbnail: string;
  caption: string;
};

type Props = {
  short: ShortsItem;
};
const ShortsElement: React.FC<Props> = ({ short }) => {
  return (
    <View style={styles.shortCard}>
      <Image source={{ uri: short.thumbnail }} style={styles.thumbnailImage} />
      <Text style={styles.ellipsis}>⋮</Text>
      <Text style={styles.caption} numberOfLines={2}>
        {short.caption}
      </Text>
    </View>
  );
};

export default ShortsElement;

const styles = StyleSheet.create({
  shortCard: {
    width: "48%",
    marginBottom: 12,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  caption: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 12,
    fontWeight: "500",
    color: "#fff",
  },
  thumbnailImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  ellipsis: {
    position: "absolute",
    top: 8,
    right: 8,
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
