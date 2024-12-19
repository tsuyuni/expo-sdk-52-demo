import { useEvent } from "expo";
import {
  isPictureInPictureSupported,
  useVideoPlayer,
  VideoSource,
  VideoView,
} from "expo-video";
import { StyleSheet, View, Button } from "react-native";

const videoSource: VideoSource = {
  uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  metadata: {
    title: "Big Buck Bunny",
    artwork:
      "https://i.vimeocdn.com/video/20963649-f02817456fc48e7c317ef4c07ba259cd4b40a3649bd8eb50a4418b59ec3f5af5-d?mw=3000&mh=1245&q=70",
  },
};

const VideoScreen = () => {
  const player = useVideoPlayer(videoSource, (player) => {
    player.showNowPlayingNotification = true;
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  return (
    <View style={styles.contentContainer}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
        // startsPictureInPictureAutomatically
      />
      <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? "Pause" : "Play"}
          onPress={() => {
            console.log(isPictureInPictureSupported());
            // if (isPlaying) {
            //   player.pause();
            // } else {
            //   player.play();
            // }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});

export default VideoScreen;
