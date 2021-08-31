import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable } from 'react-native';
import { Episode } from '../../models';
import { MonoText } from '../StyledText';
import { View } from '../Themed';

import styles from './styles';

interface EpisodeItemProps {
  episode: Episode;
  onPress: (episode: Episode) => {};
}

const EpisodeItem = (props: EpisodeItemProps) => {
  const { episode, onPress } = props;
  return (
    <Pressable style={{ marginVertical: 10, marginHorizontal: 12 }} onPress={() => onPress(episode)}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: episode.poster }} />
        <View style={styles.titleContainer}>
          <MonoText style={styles.title}>{episode.title}</MonoText>
          <MonoText style={styles.duration}>{episode.duration}</MonoText>
        </View>
        <Feather name="download" size={24} color="white" style={{ paddingRight: 15 }} />
      </View>
      <MonoText style={styles.plot}>{episode.plot}</MonoText>
    </Pressable>
  );
};

export default EpisodeItem;
