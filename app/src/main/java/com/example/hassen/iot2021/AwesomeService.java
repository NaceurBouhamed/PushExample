
package com.example.hassen.iot2021;
import android.util.Log;
import com.google.firebase.messaging.*;
import com.google.firebase.messaging.FirebaseMessagingService;

public class AwesomeService extends FirebaseMessagingService {

@Override
public void onMessageReceived(RemoteMessage remoteMessage) {
    // ...

    // TODO(developer): Handle FCM messages here.
    // Not getting messages here? See why this may be: https://goo.gl/39bRNJ
    Log.d("fazazaboura", "From: " + remoteMessage.getFrom());

    // Check if message contains a data payload.
    if (remoteMessage.getData().size() > 0) {
        Log.d("fazazaboura", "Message data payload: " + remoteMessage.getData());

        if (/* Check if data needs to be processed by long running job */ true) {
            // For long-running tasks (10 seconds or more) use Firebase Job Dispatcher.
            System.out.println("zza");
        } else {
            // Handle message within 10 seconds
            System.out.println("azz");
        }

    }

    // Check if message contains a notification payload.
    if (remoteMessage.getNotification() != null) {
        Log.d("notif ready", "Message Notification Body: " + remoteMessage.getNotification().getBody());
    }

    // Also if you intend on generating your own notifications as a result of a received FCM
    // message, here is where that should be initiated. See sendNotification method below.
}

}
