import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { Switch, View, Text } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const [isEnabled, setisEnabled] = useState(false);

  const toggleSwitch = () => setisEnabled((prevState) => !prevState);

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          initialRouteName="index"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0781F0',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '400',
            },
          }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="registry" options={{ title: 'Registro' }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="profile" options={{ presentation: 'modal', title: 'Mi cuenta' }} />
          <Stack.Screen
            name="edit-name"
            options={{ presentation: 'modal', title: 'Editar nombre' }}
          />
          <Stack.Screen
            name="edit-email"
            options={{ presentation: 'modal', title: 'Editar correo' }}
          />
          <Stack.Screen
            name="update-password"
            options={{ presentation: 'modal', title: 'Actualizar contraseña' }}
          />
          <Stack.Screen
            name="create-task"
            options={{ presentation: 'modal', title: 'Nueva tarea' }}
          />
          <Stack.Screen
            name="group"
            options={{
              presentation: 'modal',
              title: 'Oficina',
              headerRight: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color: '#FFF' }}>Ver mis tareas</Text>
                  <Switch
                    trackColor={{ false: '#AAD7FF', true: '#AAD7FF' }}
                    thumbColor="#fff"
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="edit-task"
            options={{ presentation: 'modal', title: 'Actualizar tarea' }}
          />
          <Stack.Screen
            name="create-group"
            options={{ presentation: 'modal', title: 'Nuevo grupo' }}
          />
          <Stack.Screen
            name="edit-group"
            options={{ presentation: 'modal', title: 'Actualizar grupo' }}
          />
        </Stack>
      </ThemeProvider>
    </>
  );
}
