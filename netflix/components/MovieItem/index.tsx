import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Image, Pressable } from 'react-native';
import { Movie } from '../../models';
import styles from './styles';
import { Storage } from 'aws-amplify';

const MovieItem = ({ movie }: { movie: Movie }) => {
  const navigation = useNavigation();
  const [imageUrl, setImageUrl] = useState('');

  const onMoviePress = () => {
    navigation.navigate('MovieDetailsScreen', { id: movie.id });
  };

  useEffect(() => {
    if (movie.poster.startsWith('http')) {
      setImageUrl(movie.poster);
      return;
    }
    Storage.get(movie.poster).then(setImageUrl);
  }, []);

  return (
    <Pressable onPress={onMoviePress}>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      ></Image>
    </Pressable>
  );
};

export default MovieItem;
