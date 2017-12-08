
package com.example.hassen.iot2021;


import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.iid.FirebaseInstanceIdService;

/**
 * Created by hassen on 08/12/17.
 */

public class AwesomeClass extends FirebaseInstanceIdService {

    @Override
    public void onTokenRefresh() {
        // Get updated InstanceID token.
        String refreshedToken = FirebaseInstanceId.getInstance().getToken();
        Log.d("faza", "Refreshed token: " + refreshedToken);
        System.out.println("----------------------------");
        System.out.println(refreshedToken);
        System.out.println("----------------------------");

        // If you want to send messages to this application instance or
        // manage this apps subscriptions on the server side, send the
        // Instance ID token to your app server.
       //sendRegistrationToServer(refreshedToken);
    }
}
