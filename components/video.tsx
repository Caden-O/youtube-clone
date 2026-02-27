import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import VideoElement from "./videoElement";
import Videos from "./videos.json";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  video: VideoItem;
};

export type VideoItem = {
  id: number;
  thumbnail: string;
  videoTime: string;
  channelImage: string;
  title: string;
  channelName: string;
  channelHandle: string;
  views: string;
  posted: string;
};

// const Channel = {
//   bannerImage:
//     "https://yt3.googleusercontent.com/fDbV1Uz_xb80oqhACD04nQMJoplXpPupol56BYPOWWTgPu0M_mw82wEBUKyJBqQftls9J6jM=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
//   profilePicture:
//     "https://yt3.googleusercontent.com/ytc/AIdro_ndrznk18X0Sm4a8-tgnWB6yMUlSq_-hcCjN9SxEJ0S9PM=s160-c-k-c0x00ffffff-no-rj",
//   name: "Valve",
//   handle: "Valve",
//   subscribers: "2.54m",
// };

const Video: React.FC<Props> = ({ video }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Video player (thumbnail) */}
        <Image
          source={{
            uri: Videos[3].thumbnail,
          }}
          style={styles.mainVideo}
        />

        {/* <Ionicon name="play-skip-back"/> */}
        {/* <Ionicon name="pause"/> */}
        {/* <Ionicon name="play-skip-forward"/> */}

        {/* channel/video info + main buttons */}
        <View style={styles.allInfo}>
          {/* title */}
          <Text style={styles.title}>{Videos[3].title}</Text>

          {/* video info */}
          <View style={styles.videoInfo}>
            <Text style={styles.handle}>@{Videos[3].channelHandle}</Text>
            <Text style={styles.videoInfoText}>{Videos[3].views} views</Text>
            <Text style={styles.videoInfoText}>{Videos[3].posted} ago</Text>
          </View>
        </View>
        {/* buttons */}
        <View style={styles.buttonsSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* profile image */}
            <View style={styles.button}>
              <Image
                source={{
                  uri: Videos[3].channelImage,
                }}
                style={styles.profilePicture}
              />
            </View>
            {/* Subscribe Button */}
            <View style={styles.button}>
              <TouchableOpacity style={styles.subscribeButton}>
                <Text style={styles.subscribeText}>Subscribe</Text>
              </TouchableOpacity>
            </View>

            {/* like/dislike buttons */}
            <View style={styles.button}>
              <View style={styles.likedislikeButtons}>
                <TouchableOpacity style={styles.likeButton}>
                  <Ionicons name="thumbs-up-outline" />
                  {/* <Ionicons name="thumbs-up" /> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.dislikeButton}>
                  <Ionicons name="thumbs-down-outline" />
                  {/* <Ionicons name="thumbs-down" /> */}
                </TouchableOpacity>
              </View>
            </View>
            {/* share button */}
            <View style={styles.button}>
              <TouchableOpacity style={styles.otherButton}>
                <Ionicons name="arrow-redo-outline" />
              </TouchableOpacity>
            </View>
            {/* save button */}
            <View style={styles.button}>
              <TouchableOpacity style={styles.otherButton}>
                <Ionicons name="bookmark-outline" />
                {/* <Ionicons name="bookmark" /> */}
                <Text> Save</Text>
              </TouchableOpacity>
            </View>
            {/* report button */}
            <View style={styles.button}>
              <TouchableOpacity style={styles.otherButton}>
                <Ionicons name="flag-outline" />
                <Text> Report</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>

      {/* Videos */}
      <View style={styles.suggestedVideosContainer}>
        <FlatList
          data={Videos}
          keyExtractor={(video) => video.id.toString()}
          renderItem={({ item }) => <VideoElement video={item} />}
        />
      </View>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  videoContainer: {},
  header: {
    flexDirection: "column",
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  mainVideo: {
    width: "100%",
    height: 230,
    resizeMode: "cover",
  },
  allInfo: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
  },
  videoInfo: {
    flexDirection: "row",
  },
  buttonsSection: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  likedislikeButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    paddingRight: 5,
  },
  handle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#676767",
  },
  videoInfoText: {
    fontSize: 15,
    color: "#676767",
    paddingLeft: 8,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: "cover",
    marginLeft: 10,
  },

  subscribeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(0, 0, 0)",
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 25,
  },
  otherButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(228, 228, 228)",
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 25,
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(228, 228, 228)",
    paddingHorizontal: 20,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  dislikeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(228, 228, 228)",
    paddingHorizontal: 20,
    height: 40,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  subscribeText: {
    color: "#fff",
    fontSize: 15,
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
  suggestedVideosContainer: {
    marginBottom: 15,
    paddingVertical: 10,
  },
});
