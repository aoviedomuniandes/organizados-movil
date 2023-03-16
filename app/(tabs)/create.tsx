import { StyleSheet, View } from 'react-native';
import { CustomButton } from '../../components/CustomButton';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <CustomButton
        href="/create-task"
        title="Tarea"
        styles={{ marginBottom: 30, marginTop: 0 }}
        width="75%"
      />
      <CustomButton
        href="/create-group"
        title="Grupo"
        styles={{ marginBottom: 30, marginTop: 0 }}
        width="75%"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    alignSelf: 'center',
  },
  button: {
    width: '75%',
    marginBottom: 30,
  },
});
