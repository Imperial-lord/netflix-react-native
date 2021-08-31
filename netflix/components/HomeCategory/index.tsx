import React, { useEffect, useState } from 'react';
import { FlatList, Image, Pressable } from 'react-native';
import { MonoText } from '../StyledText';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Category, Movie } from '../../models';
import { DataStore, Storage } from 'aws-amplify';
import movie from '../../assets/data/movie';
import MovieItem from '../MovieItem';

interface HomeCategoryProps {
  category: Category;
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = (await DataStore.query(Movie)).filter((movie) => movie.categoryID === category.id);
      setMovies(result);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <MonoText style={styles.title}>{category.title}</MonoText>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieItem movie={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </>
  );
};

export default HomeCategory;
