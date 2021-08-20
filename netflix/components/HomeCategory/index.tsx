import * as React from 'react';
import { FlatList, Image, Pressable } from 'react-native';
import { MonoText } from '../StyledText';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;

  const navigation = useNavigation();

  const onMoviePress = (movie: { id: any; poster?: string }) => {
    navigation.navigate('MovieDetailsScreen', { id: movie.id });
  };

  return (
    <>
      <MonoText style={styles.title}>{category.title}</MonoText>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              onMoviePress(item);
            }}
          >
            <Image
              style={styles.image}
              source={{
                uri: item.poster,
              }}
            ></Image>
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </>
  );
};

export default HomeCategory;
