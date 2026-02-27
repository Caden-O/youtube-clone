import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import React from "react";
import { PropsWithChildren } from "react";

export type VideoItem = {
  id: number;
  thumbnail: string;
  videoTime: string;
  channelImage: string;
  title: string;
  channelName: string;
  views: string;
  posted: string;
};

type Props = {
  video: VideoItem;
};

const VideoElement: React.FC<Props> = ({ video }) => {
  return (
    <View style={styles.videoContainer}>
      {/* Video Thumbnail */}
      <View style={styles.thumbnailContainer}>
        <Image
          source={{ uri: video.thumbnail }}
          style={styles.videoThumbnail}
        />
        <View style={styles.videoTimeBadge}>
          <Text style={styles.videoTimeText}>{video.videoTime}</Text>
        </View>
      </View>
      {/* Video Information and Data */}
      <View style={styles.videoInfoContainer}>
        <Image
          source={{ uri: video.channelImage }}
          style={styles.channelProfileImage}
        />
        <View style={styles.videoInfo}>
          <Text style={styles.videoTitle}>{video.title}</Text>
          <Text style={styles.videoData}>
            {video.channelName} ● {video.views} views ● {video.posted} ago
          </Text>
        </View>
        <Image
          style={styles.ellipsisIcon}
          source={{
            uri: "https://cdn-icons-png.freepik.com/512/8560/8560609.png",
          }}
        />
      </View>
    </View>
  );
};

export default VideoElement;

const styles = StyleSheet.create({
  videoContainer: {
    marginBottom: 15,
    paddingBottom: 10,
  },
  thumbnailContainer: {
    width: "100%",
    height: 230,
  },
  videoThumbnail: {
    width: "100%",
    height: 230,
    resizeMode: "cover",
  },
  videoTimeBadge: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
  },
  videoTimeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  videoInfoContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  channelProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  videoTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  videoInfo: {
    width: "75%",
  },
  videoData: {
    fontSize: 12,
    color: "#494949",
  },
  ellipsisIcon: {
    width: 30,
    height: 30,
    marginLeft: "auto",
  },
});
