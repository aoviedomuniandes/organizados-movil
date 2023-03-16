import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { IconButton, TextInput } from '@react-native-material/core';
import { StyleSheet, View } from 'react-native';
import { CustomButton } from '../components/CustomButton';

export default function EditPassword() {
  return (
    <View style={styles.container}>
      <TextInput
        label="Nueva contraseña"
        variant="outlined"
        trailing={(props) => (
          <IconButton icon={(props) => <Icon name="eye" {...props} />} {...props} />
        )}
        style={styles.textInput}
        helperText="*Mínimo 8 caracteres, 1 mayúscula, 1 número y 1 símbolo"
      />
      <TextInput
        label="Confirmar contraseña"
        variant="outlined"
        trailing={(props) => (
          <IconButton icon={(props) => <Icon name="eye" {...props} />} {...props} />
        )}
        style={styles.textInput}
      />
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
