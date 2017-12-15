
var firebase = require("firebase");

var config = {
  apiKey: "AAAAKhk-5Uc:APA91bH-DHb7QAhMmqVe5S6E3W2Tv-L1qU-RLHac5flchsV3ZoaZrZt7kvUaCEZmOR2DG5RlNVXZOu7FnCXAicGZQ85QIfwtMKb_mFXsqoCnKEvmLOKL1y_4JTXFu_STE_Q7WbF6ZLBt",
  authDomain: "iot2021.firebaseapp.com",
  databaseURL: "https://iot2021-64628.firebaseio.com"
};

firebase.initializeApp(config);

var database = firebase.database();
var id = '3';

database.ref('/notifs/' + id ).set({
    action: 'Buying',
    item: 'hassen besbes',
	price: 'xx dourou',
flag: 'waiting'
	
});


