var FCM = require('fcm-push');

var serverKey = 'AAAAKhk-5Uc:APA91bH-DHb7QAhMmqVe5S6E3W2Tv-L1qU-RLHac5flchsV3ZoaZrZt7kvUaCEZmOR2DG5RlNVXZOu7FnCXAicGZQ85QIfwtMKb_mFXsqoCnKEvmLOKL1y_4JTXFu_STE_Q7WbF6ZLBt';
var fcm = new FCM(serverKey);

var message = {
    to: 'ddLOdkiGR4s:APA91bEXz7z5EPHd0NLfDnWWoLkWdXscJUExBqDIInKktNAACRRO6M5CckDBIpIT8FGwEWxHudkijFj0Z7Ea4jlBgsT9xZWRIlXlkIPcd4g9l7CvcBjov3ndFQmPcBx3q8VVg8RwO38C',
    notification: {
        title: 'Nizou',
        body: 'ta7foun'
    }
};

fcm.send(message, function(err, response){
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Successfully sent with response: ", response);
    }
});

//promise style
//fcm.send(message)
 //  .then(function(response){
//        console.log("Successfully sent with response: ", response);
  //  })
    //.catch(function(err){
      //  console.log("Something has gone wrong!");
        //console.error(err);
   // })
