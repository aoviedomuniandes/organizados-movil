import { Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { GroupBox } from '../../components/GroupBox';

const groups = [
  { name: 'Oficina', notifications: '3' },
  { name: 'Casa', notifications: '0' },
  { name: 'Viaje a Cancún', notifications: '+9' },
  { name: '¡¡¡LOS MEJORES!!!', notifications: '7' },
  { name: 'Amigos', notifications: '2' },
  { name: 'Oficina2', notifications: '3' },
  { name: 'Casa2', notifications: '0' },
  { name: '2Viaje a Cancún', notifications: '+9' },
  { name: '2¡¡¡LOS MEJORES!!!', notifications: '7' },
  { name: 'Amigos2', notifications: '2' },
];

export default function Grupos() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mis grupos</Text>
      <FlatList
        data={groups}
        keyExtractor={(item) => String(item.name)}
        renderItem={({ item }) => <GroupBox group={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#FAFCFF',
  },
  title: {
    display: 'flex',
    fontSize: 32,
    fontWeight: '300',
    textAlign: 'center',
    paddingVertical: 25,
  },
});
