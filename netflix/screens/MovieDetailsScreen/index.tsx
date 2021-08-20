import React from 'react';
import { View } from '../../components/Themed';
import { MonoText } from '../../components/StyledText';
import { Image, Pressable, FlatList, processColor } from 'react-native';
import { MaterialIcons, Entypo, Feather, AntDesign, Ionicons } from '@expo/vector-icons';

import styles from './styles';
import movie from '../../assets/data/movie';
import EpisodeItem from '../../components/EpisodeItem';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import VideoPlayer from '../../components/VideoPlayer';

const firstSeason = movie.seasons.items[0];
const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const [currentEpisode, setCurrentEpisode] = useState(firstSeason.episodes.items[0]);
  const seasonNames = movie.seasons.items.map((season) => season.name);

  return (
    <View>
      {/* <Image style={styles.image} source={{ uri: firstEpisode.poster }} /> */}
      <VideoPlayer episode={currentEpisode} />

      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => <EpisodeItem episode={item} onPress={setCurrentEpisode} />}
        style={{ marginBottom: 250 }}
        ListHeaderComponent={
          <View style={styles.wrapper}>
            <MonoText style={styles.title}>{movie.title}</MonoText>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MonoText style={styles.match}>98% match</MonoText>
              <MonoText style={styles.year}>{movie.year}</MonoText>
              <View style={styles.ageContainer}>
                <MonoText style={styles.age}>12+</MonoText>
              </View>
              <MonoText style={styles.year}>{movie.numberOfSeasons} Seasons</MonoText>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>

            {/* Play Button */}
            <Pressable
              onPress={() => {
                console.warn('Play');
              }}
              style={styles.playButton}
            >
              <Entypo name="controller-play" size={16} color="black" />
              <MonoText style={styles.playButtonText}>Play</MonoText>
            </Pressable>

            {/* Download Button */}
            <Pressable
              onPress={() => {
                console.warn('Download');
              }}
              style={styles.downloadButton}
            >
              <Feather name="download" size={16} color="white" />
              <MonoText style={styles.downloadButtonText}> Download</MonoText>
            </Pressable>

            <MonoText style={{ marginVertical: 5 }}>{movie.plot}</MonoText>
            <MonoText style={{ color: '#777777', fontSize: 12 }}>Cast: {movie.cast}</MonoText>
            <MonoText style={{ color: '#777777', fontSize: 12 }}>Creator: {movie.creator}</MonoText>

            {/* Row with icon buttons */}
            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
              <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                <AntDesign name="plus" size={20} color="white" />
                <MonoText style={{ color: '#777777', marginTop: 5 }}>My List</MonoText>
              </View>
              <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                <Feather name="thumbs-up" size={20} color="white" />
                <MonoText style={{ color: '#777777', marginTop: 5 }}>Rate</MonoText>
              </View>
              <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                <Ionicons name="share-social" size={20} color="white" />
                <MonoText style={{ color: '#777777', marginTop: 5 }}>Share</MonoText>
              </View>
            </View>

            <View style={styles.seasonWrapper}>
              <Picker
                selectedValue={currentSeason.name}
                onValueChange={(itemValue, itemIndex) => {
                  setCurrentSeason(movie.seasons.items[itemIndex]);
                }}
                dropdownIconColor={'white'}
                style={{ color: 'white', width: 130 }}
              >
                {seasonNames.map((seasonName) => (
                  <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                ))}
              </Picker>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
