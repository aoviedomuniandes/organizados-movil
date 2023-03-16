import { Link } from 'expo-router';
import { Text, StyleSheet, Pressable } from 'react-native';

export function CustomButton({
  href,
  title,
  styles,
  width = '50%',
}: {
  href: string;
  title: string;
  styles?: Object;
  width?: string;
}) {
  return (
    <Link href={href} style={{ ...localStyles.link, ...styles }} asChild>
      <Pressable style={{ ...localStyles.pressable, width }}>
        <Text style={localStyles.title}>{title}</Text>
      </Pressable>
    </Link>
  );
}

const localStyles = StyleSheet.create({
  link: {
    alignSelf: 'center',
    marginTop: 40,
  },
  pressable: { backgroundColor: '#0781F0', borderRadius: 50 },
  title: {
    color: '#FFF',
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingVertical: 7,
    fontWeight: '500',
    letterSpacing: 1,
  },
});
