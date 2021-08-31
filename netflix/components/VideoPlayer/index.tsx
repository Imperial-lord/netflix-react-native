import { Storage } from 'aws-amplify';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Episode } from '../../models';
import { View, Text } from '../Themed';

import styles from './styles';

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;
  const [videoUrl, setVideoUrl] = useState('');

  const [status, setStatus] = useState({});
  const video = useRef<Playback>(null);

  useEffect(() => {
    if (episode.video.startsWith('http')) {
      setVideoUrl(episode.video);
      return;
    }
    Storage.get(episode.video)
      .then(setVideoUrl)
      .catch(() => {
        console.log('Rejected');
      });
  }, [episode]);

  useEffect(() => {
    if (!video) return;
    (async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync({ uri: videoUrl }, {}, false);
    })();
  }, [videoUrl]);

  if (!video) return <ActivityIndicator color="white" />;

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: videoUrl,
        }}
        posterSource={{ uri: episode.poster }}
        posterStyle={{ resizeMode: 'cover' }}
        usePoster={true}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayer;
