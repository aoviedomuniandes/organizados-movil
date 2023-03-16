import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { ProfileButton } from '../../components/ProfileButton';
import { StyleSheet, View } from 'react-native';
import { Badge } from '@react-native-material/core';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0781F0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '400',
        },
        tabBarStyle: {
          backgroundColor: '#0781F0',
          display: 'flex',
        },
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: '#AAD7FF',
      }}>
      <Tabs.Screen
        name="groups"
        options={{
          title: 'Mis grupos',
          headerTitle: '@Usuario_10',
          tabBarIcon: ({ color }) => <TabBarIcon name="group" color={color} />,
          headerRight: () => <ProfileButton />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Crear',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Lo nuevo',
          tabBarIcon: ({ color }) => (
            <View>
              <Badge label={3} style={styles.badge} color="#711EB3" />
              <TabBarIcon name="bell" color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: -10,
    top: -3,
    zIndex: 1,
  },
});
