import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  image: {
    height: 75,
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
    borderRadius: 3,
  },
  titleContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    paddingVertical: 2,
  },
  duration: {
    color: '#777777',
  },
  plot: {
    color: '#777777',
    fontSize: 12,
  },
});

export default styles;
