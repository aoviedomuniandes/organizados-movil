import { IconButton } from '@react-native-material/core';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/images/profile-picture.png')} />
        <IconButton
          style={{ position: 'absolute', bottom: -15, right: -28 }}
          contentContainerStyle={styles.trashIcon}
          icon={(props) => <FontAwesome name="camera" size={20} color="#FFF" />}
        />
      </View>
      <View style={{ marginTop: 30, width: '78%' }}>
        <Text style={styles.label}>Nombre de usuario</Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#AAA',
            paddingBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              fontSize: 16,
            }}>
            USUARIO_10
          </Text>
          <Link href="/edit-name">
            <Feather name="edit" size={28} color="#711EB3" />
          </Link>
        </View>
      </View>
      <View style={{ marginTop: 30, width: '78%' }}>
        <Text style={styles.label}>Correo electrónico</Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#AAA',
            paddingBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              fontSize: 16,
            }}>
            TEST@TEST.COM
          </Text>
          <Link href="/edit-email">
            <Feather name="edit" size={28} color="#711EB3" />
          </Link>
        </View>
      </View>
      <Link href="/update-password" style={{ marginTop: 100 }}>
        <Text
          style={{
            textDecorationLine: 'underline',
            textDecorationColor: '#711EB3',
            color: '#711EB3',
          }}>
          Cambiar contraseña
        </Text>
      </Link>
      <Link href="/" style={{ marginTop: 30 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons name="logout" size={24} color="#711EB3" />
          <Text
            style={{
              color: '#711EB3',
              marginLeft: 5,
            }}>
            Cerrar sesión
          </Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  label: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'left',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  trashIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#711EB3',
    height: 'auto',
  },
});
