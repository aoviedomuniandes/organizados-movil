import { TextInput } from '@react-native-material/core';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { CustomButton } from '../components/CustomButton';

export default function EditTask() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

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
            Ingrese el nombre de la tarea
          </Text>
          <Feather name="edit" size={28} color="#711EB3" />
        </View>
      </View>
      <View style={{ marginTop: 30, width: '78%' }}>
        <Text style={styles.label}>Responsable</Text>
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
          <Feather name="edit" size={28} color="#711EB3" />
        </View>
      </View>
      <View style={{ marginTop: 30, width: '78%' }}>
        <Text style={styles.label}>Fecha</Text>
      </View>
      <TextInput
        label="Fecha"
        variant="outlined"
        style={styles.textInput}
        placeholder="mm/dd/aaaa"
        value="01/12/2024"
      />
      <TextInput
        label="Hora"
        variant="outlined"
        style={styles.textInput}
        placeholder="00:00"
        value="15:00 pm"
      />
      <View style={{ flexDirection: 'row', marginTop: 25, marginBottom: 25 }}>
        <Checkbox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          color="#6750A4"
        />
        <Text
          style={{
            marginLeft: 7,
          }}>
          Requiere evidencia
        </Text>
      </View>
      <CustomButton href="/group" title="Actualizar" />
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
});
