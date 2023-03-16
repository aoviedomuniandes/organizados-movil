import { Badge } from '@react-native-material/core';
import { Alert, StyleSheet, Text, View, Pressable } from 'react-native';
import { IconButton } from '@react-native-material/core';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

export function GroupBox({ group }: { group: { name: string; notifications: string } }) {
  return (
    <View style={styles.container}>
      <Badge label={group.notifications} style={styles.badge} color="#711EB3" />
      <Link href="/group" style={{ width: '60%' }} numberOfLines={1}>
        <Text style={styles.groupTitle}>{group.name}</Text>
      </Link>
      <IconButton
        contentContainerStyle={styles.gearIcon}
        icon={(props) => (
          <Link href="/edit-group" asChild>
            <Ionicons name="ios-settings-outline" size={28} color="black" />
          </Link>
        )}
      />
      <IconButton
        contentContainerStyle={styles.trashIcon}
        icon={(props) => <FontAwesome name="trash-o" size={28} color="#711EB3" />}
        onPress={() =>
          Alert.alert('Eliminar grupo', '¿Estás seguro que deseas eliminar este grupo?', [
            {
              text: 'Cancelar',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'Sí', onPress: () => console.log('OK Pressed') },
          ])
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#FFF',
    paddingHorizontal: 32,
    paddingVertical: 20,
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gearIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBF5FF',
    height: 'auto',
  },
  groupTitle: {
    fontSize: 24,
    fontWeight: '300',
  },
  trashIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7ECFF',
    height: 'auto',
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
});
