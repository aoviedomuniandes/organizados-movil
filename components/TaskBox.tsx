import { StyleSheet, Text, View, Alert } from 'react-native';
import { IconButton } from '@react-native-material/core';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

export function TaskBox({ task }: { task: { name: string; user: string } }) {
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.taskName} numberOfLines={1}>
          {task.name}
        </Text>
      </View>

      <IconButton
        contentContainerStyle={styles.gearIcon}
        icon={(props) => (
          <Link href="/edit-task" asChild>
            <Ionicons name="ios-settings-outline" size={28} color="black" />
          </Link>
        )}
      />
      <IconButton
        contentContainerStyle={styles.trashIcon}
        icon={(props) => <FontAwesome name="trash-o" size={28} color="#711EB3" />}
        onPress={() =>
          Alert.alert('Eliminar tarea', '¿Estás seguro que deseas eliminar esta tarea?', [
            {
              text: 'Cancelar',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'Sí', onPress: () => console.log('OK Pressed') },
          ])
        }
      />
      <Text style={styles.username} numberOfLines={1}>
        {task.user}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  taskContainer: {
    marginRight: 10,
    width: '60%',
  },
  taskName: {
    fontSize: 24,
    fontWeight: '300',
  },
  badge: {
    position: 'absolute',
    right: 0,
    top: -8,
  },
  button: {
    width: 30,
    padding: 0,
    margin: 0,
  },
  username: {
    fontSize: 16,
    fontStyle: 'italic',
    width: '100%',
    marginTop: -14,
  },
  gearIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBF5FF',
    height: 'auto',
  },
  trashIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7ECFF',
    height: 'auto',
  },
});
