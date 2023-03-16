import { IconButton } from '@react-native-material/core';
import { StyleSheet, Text, View } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { CustomButton } from '../components/CustomButton';

export default function CreateGroup() {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30, width: '78%' }}>
        <Text style={styles.label}>Nombre</Text>
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
              color: '#AAA',
            }}>
            Ingrese el nombre del grupo
          </Text>
          <Feather name="edit" size={28} color="#711EB3" />
        </View>
      </View>

      <View
        style={{
          marginTop: 30,
          width: '78%',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <Text style={styles.label}>Miembros</Text>
        <IconButton
          style={{ marginLeft: 40 }}
          contentContainerStyle={styles.gearIcon}
          icon={(props) => <AntDesign name="adduser" size={28} color="black" />}
        />
      </View>
      <View
        style={{
          height: 200,
          width: '75%',
          backgroundColor: '#EBF5FF',
          borderColor: '#D9D9D9',
          borderWidth: 1,
          marginBottom: 30,
        }}></View>
      <CustomButton href="(tabs)/groups" title="Crear" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: -100,
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
  link: {
    alignSelf: 'center',
  },
  trashIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#711EB3',
    height: 'auto',
  },
  textInput: {
    width: '50%',
    paddingTop: 20,
  },
  button: {
    width: '50%',
    alignSelf: 'center',
  },
  gearIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBF5FF',
    height: 'auto',
  },
});
