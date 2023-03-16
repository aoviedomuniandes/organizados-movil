import { Badge, Button } from '@react-native-material/core';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from '@react-native-material/core';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export function NotificationBox({
  notification,
}: {
  notification: { taskName: string; action: string; group: string };
}) {
  const formatAction = (action: string) => {
    if (action === 'added') {
      return 'ha sido agregada';
    } else if (action === 'completed') {
      return 'ha sido completada';
    } else if (action === 'deleted') {
      return 'ha sido eliminada';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.taskName} numberOfLines={1}>
          {notification.taskName}
        </Text>
      </View>
      <Text style={styles.action} numberOfLines={1}>
        {formatAction(notification.action)}
      </Text>
      <IconButton
        contentContainerStyle={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#EBF5FF',
          height: 'auto',
        }}
        icon={(props) => <FontAwesome name="check" size={18} color="#000" />}
      />
      <Text style={styles.group} numberOfLines={1}>
        {notification.group}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  taskContainer: {
    marginRight: 10,
    minWidth: '15%',
    maxWidth: '35%',
  },
  taskName: {
    fontSize: 24,
    fontWeight: '300',
  },
  badge: {
    position: 'absolute',
    right: 0,
    top: -8,
  },
  button: {
    width: 30,
    padding: 0,
    margin: 0,
  },
  action: {
    textAlign: 'left',
    flex: 1,
    fontSize: 14,
    marginTop: 8,
  },
  group: {
    fontSize: 16,
    fontStyle: 'italic',
    width: '100%',
  },
});
