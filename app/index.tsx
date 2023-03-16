import { View, Image, Text, SafeAreaView, StyleSheet } from 'react-native';
import { CustomButton } from '../components/CustomButton';

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={require('../assets/images/main-logo.png')} />
        <Text style={styles.title}>Organizados</Text>
        <CustomButton href="/login" title="Login" />
        <CustomButton href="/registry" title="Registro" />
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
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
