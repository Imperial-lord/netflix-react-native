import * as React from 'react';
import { FlatList, Image } from 'react-native';
import { Text, View } from '../../components/Themed';

import styles from './styles';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* List of Categories */}
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
