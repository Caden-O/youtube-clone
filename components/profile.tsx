import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Videos from "./videos.json";
import VideoElement from "./videoElement";

const Channel = {
  bannerImage:
    "https://yt3.googleusercontent.com/fDbV1Uz_xb80oqhACD04nQMJoplXpPupol56BYPOWWTgPu0M_mw82wEBUKyJBqQftls9J6jM=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
  profilePicture:
    "https://yt3.googleusercontent.com/ytc/AIdro_ndrznk18X0Sm4a8-tgnWB6yMUlSq_-hcCjN9SxEJ0S9PM=s160-c-k-c0x00ffffff-no-rj",
  name: "Valve",
  handle: "Valve",
  subscribers: "2.54m",
};

const Videos2 = [
  {
    id: 1,
    thumbnail: "https://i.ytimg.com/vi/OmKrKTwtukE/maxresdefault.jpg",
    title: "Steam Hardware Announcement",
    channelImage:
      "https://yt3.googleusercontent.com/ytc/AIdro_ndrznk18X0Sm4a8-tgnWB6yMUlSq_-hcCjN9SxEJ0S9PM=s160-c-k-c0x00ffffff-no-rj",
    channelName: "Valve",
    videoTime: "6:17",
    views: "4.5m",
    posted: "2 months ago",
  },
  {
    id: 2,
    thumbnail: "https://i.ytimg.com/vi/OmKrKTwtukE/maxresdefault.jpg",
    title: "Steam Hardware Announcement",
    channelImage:
      "https://yt3.googleusercontent.com/ytc/AIdro_ndrznk18X0Sm4a8-tgnWB6yMUlSq_-hcCjN9SxEJ0S9PM=s160-c-k-c0x00ffffff-no-rj",
    channelName: "Valve",
    videoTime: "6:17",
    views: "4.5m",
    posted: "2 months ago",
  },
  {
    id: 3,
    thumbnail: "https://i.ytimg.com/vi/OmKrKTwtukE/maxresdefault.jpg",
    title: "Steam Hardware Announcement",
    channelImage:
      "https://yt3.googleusercontent.com/ytc/AIdro_ndrznk18X0Sm4a8-tgnWB6yMUlSq_-hcCjN9SxEJ0S9PM=s160-c-k-c0x00ffffff-no-rj",
    channelName: "Valve",
    videoTime: "6:17",
    views: "4.5m",
    posted: "2 months ago",
  },
];

const Profile = () => {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Banner */}
        <Image
          source={{
            uri: Channel.bannerImage,
          }}
          style={styles.banner}
        />
        {/* Channel info (Profile picture, name, @, subscribers, etc.) */}
        <View style={styles.info}>
          <Image
            source={{
              uri: Channel.profilePicture,
            }}
            style={styles.profilePicture}
          />
          <View style={styles.infoTextArea}>
            <Text style={styles.channelNameText}>{Channel.name}</Text>
            <Text style={styles.channelInfoText}>@{Channel.handle}</Text>
            <Text style={styles.channelInfoText}>
              {Channel.subscribers} subscribers
            </Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.channelInfoText}>
          Valve is an entertainment software and technology company founded in
          1996. In addition ...more
        </Text>

        {/* Subscribe Button */}
        <TouchableOpacity
          style={[styles.subscribe, subscribed && styles.subscribed]}
          onPress={() => setSubscribed((s) => !s)}
          activeOpacity={0.8}
        >
          {/* Imported Bell Icon */}
          {subscribed && (
            <MaterialIcons
              name="notifications"
              size={20}
              color="#000"
              style={{ marginRight: 8 }}
            />
          )}
          <Text
            style={
              [
                styles.subscribeText,
                subscribed && styles.subscribeTextSubscribed,
              ]
            }
          >
            {subscribed ? "Subscribed" : "Subscribe"}
          </Text>
          {subscribed && (
            <MaterialIcons
              name="keyboard-arrow-down"
              size={22}
              color="#000"
              style={{ marginLeft: 8 }}
            />
          )}
        </TouchableOpacity>

        {/* Channel Page Selector */}
        <View style={styles.selector}>
          <Text style={styles.selectionTextSelected}>Home</Text>
          <Text style={styles.selectionTextUnselected}>Videos</Text>
          <Text style={styles.selectionTextUnselected}>Playlists</Text>
        </View>
      </View>

      {/* Page Content (videos) */}
      <ScrollView style={styles.content}>
        {/* For You Section */}
        <Text style={styles.sectionText}>For You</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.HorizontalSectionBar}
        >
          {Videos2.map((video) => (
            <View style={styles.HorizontalSectionVideo} key={video.id}>
              <Image
                source={{ uri: video.thumbnail }}
                style={styles.HorizontalSectionThumbnail}
              />
              <Text style={styles.channelNameText}>{video.title}</Text>
              <Text style={styles.channelInfoText}>
                {video.views} views ● {video.posted}
              </Text>
            </View>
          ))}
        </ScrollView>
        {/* Videos Section */}
        <Text style={styles.sectionText}>Videos</Text>

        <View style={styles.videoContainer}>
          {/* Video */}
          <VideoElement video={Videos[1]} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "column",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  banner: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 5,
  },
  infoTextArea: {
    flexDirection: "column",
    paddingLeft: 10,
  },
  channelNameText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  channelInfoText: {
    fontSize: 15,
    color: "#676767",
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 50,
    resizeMode: "cover",
  },
  subscribe: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(0, 0, 0)",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 15,
    borderRadius: 25,
  },
  subscribeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  subscribed: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
  },
  subscribeTextSubscribed: {
    color: "#000",
  },
  selector: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  selectionTextSelected: {
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  selectionTextUnselected: {
    fontSize: 18,
    color: "#676767",
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  content: {
    flexDirection: "column",
    paddingTop: 15,
  },
  sectionText: {
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  HorizontalSectionBar: {
    flexDirection: "row",
    paddingBottom: 20,
  },
  HorizontalSectionVideo: {
    padding: 10,
  },
  HorizontalSectionThumbnail: {
    // width: "100%",
    // height: 230,
    width: 320,
    height: 180,
    borderRadius: 10,
  },
  videoContainer: {
    marginBottom: 15,
    paddingVertical: 10,
  },
  thumbnailContainer: {
    width: "100%",
    height: 200,
  },
  videoThumbnail: {
    width: "100%",
    height: 200,
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
