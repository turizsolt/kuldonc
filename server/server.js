var gcm = require('node-gcm');

// Set up the sender with your GCM/FCM API key (declare this once for multiple messages)
var sender = new gcm.Sender('AAAAp79NIYc:APA91bHeCcJDKjSNT7Yi6AznscEAnc2oBujvBwJx9hvfcqwMJx3cz0J-94ePn3cDr9koqQnQNWkCiIQoii9Akp9RfYJ51Bk4Ph8QBf1q0QCdo6xzJWfPTGmh0BQmdgixD3wu6lCRRty0');

// Prepare a message to be sent
var message = new gcm.Message();

// as object
message.addNotification({
            "title": "Zsiri say's",
            "body": "Kapja be az egész világ!!!",
            "requireInteraction": "true",
            "icon": "logo192.png",
            "click_action": "https://zsirim-e75c6.firebaseapp.com/", //http://fahrplan.zsiri.eu/" // "
            // "ledColor": [0, 255, 0, 1],
            // "channel": "default",
            // "vibrationPattern": [2000, 1000, 500, 500, 500, 500, 500, 500], //??
            "content-available": 1,

});
message.addData('ledColor', [0, 0, 255, 1]);

/*message.addData({

        "notification": {
            "title": "111 Background Message Title",
            "body": "222 Background message body"
        },
        "webpush": {
            "fcm_options": {
                "link": "https://dummypage.com"
            }
        }

});*/

/*
}
{
    title: 'Almafa',
    body: 'Lorem Ipsum sit doloret anum.',
    icon: 'ic_launcher'
});
*/

// Specify which registration IDs to deliver the message to
var regTokens = [
    //'e-FVtxX_txE:APA91bGsGhLvBG-S7BJ-eefQNCjkqGV4HS0RqYY7b1kRyMm-ZY1IoHztrWTD1MypWLV-rV7TE9kM3CJzELNkvPcqG6bBJYiwKmAXlCpheJUrLn01VXXOJB1Z6TBO3AHLUpHSE1nyusIy',
    // mobilom
    // 'd7KCrVKHNUw:APA91bHbWoKwKYx0dqL_evGg2Oo7aCu0IzEnLNHf4U9BJw9l8CG3Yxzu25m0RnaJ4fcZiYLN9bsU4WUbcI-jGr44bKCnYXriTwpWS3gbxVNcHlfgxoQKpEj0JsiuTktXJEFNgjknpiIh',
    // mac desktop tuzraai chrome
    // "d4hqyNaTUEwyt_Orj8CSZO:APA91bHlyOXkirsMVrfSR8iXKJoeAOBNVQC2Z8bfum24e0d8szZ7OK9qxybWj63SWLjcKyJxbu5273BTexwW1i2YzfT_Y43BYPxT2lbeLV1QF7Y5Frx-uT8QBSOYi6WF-Kr0IRifVica"

    "ekCoQJnl-KA4CFfcHpx8HP:APA91bGiri4a-X1_FIWuVxgcncCZSShF-BYb2X5IvHhTuSb7NgAGz0DiSyzE2YW4J2K4go86AMAj4AOjjFivC3j2ZFMMSlKQx5VyX6CEH2UCkn7Jn26Z7ZyeXo98QaQgY0tfQ0RL1dV5",
    "eVWG7e8HzoN6zNTiwBGVZW:APA91bGtq2lnKQALPHzEeCYHWMfTTt9zq6k9Gv6PwJzft79wC9m6972d8CAC4we9C-Q8vkduWlj2moE2_9RFe0wXKy-LSOHt7sDEX_37ugxc51nGTd3dQ5aWhZxlbT5f4NsupYCmCzYJ",
    "cy6s90NjH1_DyYF37KqwMd:APA91bFepiXm4t7xM8hZe_J9tstwf-V887aOboofzmz6ydS69Pt8AVUi5e2z6MU4c5QBiDXslX4TdV_ZHn7_GAaUs8oGSo0zvRjBOyuJI3vJ0ZfJQjZ2H1hhGk9FqWy3rnv2hAMGbEy6",
];

// Actually send the message
sender.send(message, { registrationTokens: regTokens }, function (err, response) {
    if (err) console.error("err:", err);
    else console.log(response);
});
