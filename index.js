import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumsList';

const App = () => (
  <View>
   < Header headerText={'Albums'} />
   <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
