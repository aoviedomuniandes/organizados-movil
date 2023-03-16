import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function ProfileButton() {
  return (
    <Link href="/profile" asChild>
      <Pressable>
        {({ pressed }) => (
          <View style={styles.headerIcon}>
            <Text style={styles.contentIcon}>A</Text>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    backgroundColor: '#fff',
    marginRight: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    opacity: 0.8,
  },
  contentIcon: {
    color: '#0781F0',
  },
});
