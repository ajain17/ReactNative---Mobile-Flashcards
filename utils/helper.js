import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

const NOTIFICATIONKEY = "FLASHCARDS:notification";

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATIONKEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: "Start a quiz now!",
    body: "Don't forget to quiz yourself today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATIONKEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          Notifications.cancelAllScheduledNotificationsAsync();
          let tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          tomorrow.setHours(20);
          tomorrow.setMinutes(0);

          Notifications.scheduleLocalNotificationAsync(createNotification(), {
            time: tomorrow,
            repeat: "day"
          });

          AsyncStorage.setItem(NOTIFICATIONKEY, JSON.stringify(true));
        });
      }
    })
    .catch(function(error) {
      console.log(
        "There has been a problem with your operation: " + error.message
      );
    });
}
