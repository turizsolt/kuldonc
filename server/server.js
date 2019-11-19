var gcm = require('node-gcm');

// Set up the sender with your GCM/FCM API key (declare this once for multiple messages)
var sender = new gcm.Sender('AAAAp79NIYc:APA91bHeCcJDKjSNT7Yi6AznscEAnc2oBujvBwJx9hvfcqwMJx3cz0J-94ePn3cDr9koqQnQNWkCiIQoii9Akp9RfYJ51Bk4Ph8QBf1q0QCdo6xzJWfPTGmh0BQmdgixD3wu6lCRRty0');

// Prepare a message to be sent
var message = new gcm.Message();

// as object
message.addNotification({
    title: 'Almafa',
    body: 'Lorem Ipsum sit doloret anum.',
    icon: 'ic_launcher'
});

// Specify which registration IDs to deliver the message to
var regTokens = [
    //'e-FVtxX_txE:APA91bGsGhLvBG-S7BJ-eefQNCjkqGV4HS0RqYY7b1kRyMm-ZY1IoHztrWTD1MypWLV-rV7TE9kM3CJzELNkvPcqG6bBJYiwKmAXlCpheJUrLn01VXXOJB1Z6TBO3AHLUpHSE1nyusIy',
    // mobilom
    // 'd7KCrVKHNUw:APA91bHbWoKwKYx0dqL_evGg2Oo7aCu0IzEnLNHf4U9BJw9l8CG3Yxzu25m0RnaJ4fcZiYLN9bsU4WUbcI-jGr44bKCnYXriTwpWS3gbxVNcHlfgxoQKpEj0JsiuTktXJEFNgjknpiIh',
    // mac desktop tuzraai chrome
    "d4hqyNaTUEwyt_Orj8CSZO:APA91bHlyOXkirsMVrfSR8iXKJoeAOBNVQC2Z8bfum24e0d8szZ7OK9qxybWj63SWLjcKyJxbu5273BTexwW1i2YzfT_Y43BYPxT2lbeLV1QF7Y5Frx-uT8QBSOYi6WF-Kr0IRifVica"
];

// Actually send the message
sender.send(message, { registrationTokens: regTokens }, function (err, response) {
    if (err) console.error("err:", err);
    else console.log(response);
});
