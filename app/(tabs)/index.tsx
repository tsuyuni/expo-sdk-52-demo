import { View, StyleSheet, Button } from "react-native";
import { useAudioPlayer } from "expo-audio";

const App = () => {
  const player = useAudioPlayer({
    uri: "https://github.com/tsuyuni/expo-sdk-52-demo/blob/main/assets/songs/maou_inst_14_shining_star.mp3",
  });

  return (
    <View style={styles.container}>
      <Button
        title="Play Sound"
        onPress={() => {
          player.play();
          console.log(player);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});

export default App;
