import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { DataStore } from 'aws-amplify';

import { Text, View } from '../../components/Themed';

import styles from './styles';
// import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';
import { Category } from '../../models';

const HomeScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      setCategories(await DataStore.query(Category));
    };
    fetchCategories();
  }, []);

  return (
    <View style={styles.container}>
      {/* List of Categories */}
      <FlatList
        data={categories}
        renderItem={({ item }) => <HomeCategory category={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
