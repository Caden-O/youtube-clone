import { StyleSheet, Text, View, ScrollView, Image, StatusBar, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

// chip bar category data
// horizontal scroll bar 
const ChipBar = [
    {
        id: 1,
        category: "Search"
    },
    {
        id: 2,
        category: "All"
    },
    {
        id: 3,
        category: "Music"
    },
    {
        id: 4,
        category: "Movies & TV"
    },
    {
        id: 5,
        category: "Hype"
    },
    {
        id: 6,
        category: "Live"
    },
    {
        id: 7,
        category:  "Gaming"
    },
    {
        id: 8,
        category: "News"
    },
    {
        id: 9,
        category: "Sports"
    },
    {
        id: 10,
        category: "Education"
    },
    {
        id: 11,
        category: "Entertainment"
    }

];

// posts
const Videos = [
    {
        id: 1,
        thumbnail: "https://i.ytimg.com/vi/80M6sAU9DY4/maxresdefault.jpg",
        title: "Ken Carson - overseas (Official Music Video)",
        channelImage: "https://yt3.googleusercontent.com/vFYGeLht-OM6QTHQ-kH9550gYVQi8jZAMQUsquOh-IKCfDk7y-Dvhe5OWLvKWdaMUmSl9T88=s900-c-k-c0x00ffffff-no-rj",
        channelName: "Ken Carson", 
        videoTime: "2:23",
        views: "9.8M",
        posted: "1 year"
    },
    {
        id: 2,
        thumbnail: "https://i.ytimg.com/vi/OmKrKTwtukE/maxresdefault.jpg",
        title: "Steam Hardware Announcement",
        channelImage:"https://yt3.googleusercontent.com/ytc/AIdro_ndrznk18X0Sm4a8-tgnWB6yMUlSq_-hcCjN9SxEJ0S9PM=s900-c-k-c0x00ffffff-no-rj",
        channelName: "Valve",
        videoTime: "6:17",
        views: "4.5M",
        posted: "2 months",
    },

    {
        id: 3,
        thumbnail: "https://i.ytimg.com/vi/Olw6FU8bo4o/maxresdefault.jpg",
        title: "Hollow Knight 10-player Infection Tag",
        channelImage:"https://yt3.googleusercontent.com/zmidUZaYpj9C3vH7FMUK91PHdHzJb2F6jOH1sB1FyPpu0M8jPlG-W4jZqyIwwoN-VFzeUjlu=s160-c-k-c0x00ffffff-no-rj",
        channelName: "fireb0rn",
        videoTime: "27:14",
        views: "334K",
        posted: "3 years",
    },

];

const HomePage = () => {
  const [selectedChip, setSelectedChip] = useState(2);

  return (
    <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            {/* Top Bar - Left */}
            <Image 
            source={{uri: "https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png"}}
            style={styles.logo}
            />
            {/* Top Bar - Right */}
            <View style={styles.rightIcons}>
                <Image 
                source={{uri: "https://i.fbcd.co/products/original/932a38d48f7a3d1ec26002e38092643f132589eac5b3c88381a5afcb48762169.jpg"}}
                style={styles.broadCastIcon}
                />
                <Image 
                source={{uri: "https://www.svgrepo.com/show/342442/bell.svg"}}
                style={styles.notificationIcon}
                />
                <Image 
                source={{uri: "https://cdn.iconscout.com/icon/free/png-256/free-search-icon-svg-download-png-1604561.png"}}
                style={styles.searchIcon}
                />
            </View>
        </View>
        {/* Chip Bar */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipBarContainer}>
            {
                ChipBar.map((chip)=>(
                <TouchableOpacity key={chip.id} onPress={() => setSelectedChip(chip.id)} style={selectedChip === chip.id ? styles.chipSelected : styles.chip}>
                    <Text style={selectedChip === chip.id ? styles.chipCategorySelected : styles.chipCategory}>{chip.category}</Text>
                </TouchableOpacity>
                ))
            }
        </ScrollView>

        {/* Videos Section */}
        <FlatList 
            data ={Videos}
            keyExtractor={(video) => video.id.toString()}
            renderItem={({item})=>(
                <View style={styles.videoContainer}>
                    {/* Video Thumbnail */}
                    <View style={styles.thumbnailContainer}>
                        <Image source={{uri:item.thumbnail}} style={styles.videoThumbnail} />
                        <View style={styles.videoTimeBadge}>
                            <Text style={styles.videoTimeText}>{item.videoTime}</Text>
                        </View>
                    </View>
                    {/* Video Information and Data */}
                    <View style={styles.videoInfoContainer}>
                        <Image source={{uri:item.channelImage}} style={styles.channelProfileImage} />
                        <View style={styles.videoInfo}>
                            <Text style={styles.videoTitle}>{item.title}</Text>
                            <Text style={styles.videoData}>{item.channelName} ● {item.views} views ● {item.posted} ago</Text>
                        </View>
                        <Image style={styles.ellipsisIcon} source={{uri:"https://cdn-icons-png.freepik.com/512/8560/8560609.png"}} />
                    </View>
                </View>
            )}
        />

        {/* Alert Button */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => alert("Alert Button pressed!")} style={styles.alertButton}>
                <Text style={styles.alertButtonText}>Alert Button</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        flexDirection: "column",
        paddingTop:StatusBar.currentHeight,
        backgroundColor: "#fff",
    },
    header:
    {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15
    },
    logo:
    {
        width: 92,
        height: 50
    },
    broadCastIcon:
    {
        width: 38,
        height: 38
    },
    notificationIcon:
    {
        width: 20,
        height: 24,
        marginLeft: 13
    },
    searchIcon:
    {
        width: 25,
        height: 25,
        marginLeft: 12
    }
    ,
    rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    chipBarContainer:
    {
        flexDirection: "row",
        paddingHorizontal: 12,
        paddingBottom: 30,
    },
    chip:
    {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 9,
        backgroundColor: "#eae5e5",
        height: 36
    },
    chipSelected:
    {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 9,
        backgroundColor: "#000",
        height: 36
    },
    chipCategory:
    {
        color: "#333",
        fontSize: 14,
        fontWeight: "500"
    },
    chipCategorySelected:
    {
        color: "#fff",
        fontSize: 14,
        fontWeight: "500"
    },
    videoContainer:
    {
        marginBottom: 15,
        paddingBottom: 10,
    },
    thumbnailContainer:
    {
        width: "100%",
        height: 300,
    },
    videoThumbnail:
    {
        width: "100%",
        height: 300,
        resizeMode: "cover"
    },
    videoTimeBadge:
    {
        position: "absolute",
        bottom: 8,
        right: 8,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 4,
    },
    videoTimeText:
    {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
    },
    videoInfoContainer:
    {
        flexDirection: "row",
        paddingHorizontal: 15,
        marginBottom: 10,
        marginTop: 10
    },
    channelProfileImage:
    {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    videoTitle:
    {
        fontWeight: "bold",
        fontSize: 18,
    },
    videoInfo:
    {
        width: "75%"
    },
    videoData:
    {
        fontSize: 12,
        color: "#494949"
    },
    ellipsisIcon:
    {
        width: 30,
        height: 30,
        marginLeft: "auto"
    },
    alertButton:
    {
        width: 200,
        padding: 8,
        backgroundColor: "red",
        borderRadius: 10,
        alignItems: "center",
    },
    alertButtonText: {
        color: "white",
        fontWeight: "bold",
    }
})