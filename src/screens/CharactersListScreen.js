import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';
import { getCharacters } from '../services/api';
import CharacterCard from '../components/CharacterCard';

const CharactersListScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const data = await getCharacters();
      setCharacters(data.results);
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível carregar os personagens. Tente novamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCharacterPress = (characterId) => {
    navigation.navigate('CharacterDetail', { characterId });
  };

  const renderCharacter = ({ item }) => (
    <CharacterCard
      character={item}
      onPress={() => handleCharacterPress(item.id)}
    />
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00B4CC" />
        <Text style={styles.loadingText}>Carregando personagens...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={renderCharacter}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24282F',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24282F',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#FFFFFF',
  },
  listContainer: {
    paddingVertical: 8,
  },
});

export default CharactersListScreen;