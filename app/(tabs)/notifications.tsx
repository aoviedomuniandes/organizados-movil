import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { NotificationBox } from '../../components/NotificationBox';

const notifications = [
  { taskName: 'Sacar al perro', group: 'Oficina', action: 'added' },
  { taskName: 'Comprar el mercado', group: '¡¡¡LOS MEJORES!!!', action: 'completed' },
  { taskName: 'Tarea 1', group: 'Casa', action: 'deleted' },
];

export default function Grupos() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => String(item.taskName)}
        renderItem={({ item }) => <NotificationBox notification={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 30,
    height: '100%',
    backgroundColor: '#FAFCFF',
  },
});
