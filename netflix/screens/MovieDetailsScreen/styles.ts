import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
  },
  wrapper: {
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  match: {
    color: '#46D369',
    fontWeight: 'bold',
    marginRight: 10,
  },
  year: {
    color: '#777777',
    marginHorizontal: 5,
  },
  ageContainer: {
    backgroundColor: '#f5c242',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
  age: {
    color: 'black',
    fontWeight: 'bold',
  },

  // buttons
  playButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginVertical: 5,
    borderRadius: 3,
    flexDirection: 'row',
  },
  playButtonText: {
    color: 'black',
    fontWeight: 'bold',
    padding: 3,
    fontSize: 16,
  },
  downloadButton: {
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginVertical: 5,
    borderRadius: 3,
    flexDirection: 'row',
  },
  downloadButtonText: {
    color: 'white',
    fontWeight: 'bold',
    padding: 3,
    fontSize: 16,
  },

  // Season Picker
  seasonWrapper: {
    flexDirection: 'row',
    width: 130,
    backgroundColor: '#333333',
    borderRadius: 3,
    alignItems: 'center',
    padding: 8,
  },
});

export default styles;
