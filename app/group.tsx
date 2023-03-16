import { Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { GroupBox } from '../components/GroupBox';
import { TaskBox } from '../components/TaskBox';

const tasks = [
  { name: 'Tarea 1', user: 'usuario_01' },
  { name: 'Escribir el correo', user: 'usuario_01' },
  { name: 'Sacar la basura', user: 'usuario_01' },
  { name: 'Reunión semanal de equipo', user: 'usuario_01' },
];

export default function Grupos() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.name)}
        renderItem={({ item }) => <TaskBox task={item} />}
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
});
