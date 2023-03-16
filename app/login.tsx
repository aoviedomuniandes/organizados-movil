import { TextInput, IconButton } from '@react-native-material/core';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { CustomButton } from '../components/CustomButton';

export default function Login() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Login</Text>
        <TextInput label="Nombre de usuario" variant="outlined" style={styles.textInput} />
        <TextInput
          label="Contraseña"
          variant="outlined"
          trailing={(props) => (
            <IconButton icon={(props) => <Icon name="eye" {...props} />} {...props} />
          )}
          style={styles.textInput}
        />
        <CustomButton href="(tabs)/groups" title="Login" width="75%" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 2,
    backgroundColor: '#FAFCFF',
  },
  link: {
    alignSelf: 'center',
  },
  textInput: {
    width: '75%',
    paddingBottom: 20,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '300',
    paddingBottom: 20,
  },
  button: {
    width: '75%',
  },
});
