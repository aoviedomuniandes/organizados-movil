import { TextInput } from '@react-native-material/core';
import { StyleSheet, View } from 'react-native';
import { CustomButton } from '../components/CustomButton';

export default function EditName() {
  return (
    <View style={styles.container}>
      <TextInput label="Nombre de usuario" variant="outlined" style={styles.textInput} />
      <CustomButton href="(tabs)/groups" title="Actualizar" styles={{ marginTop: 0 }} />
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
  textInput: {
    width: '75%',
    paddingBottom: 20,
  },
  button: {
    width: '75%',
  },
  link: {
    alignSelf: 'center',
  },
});
