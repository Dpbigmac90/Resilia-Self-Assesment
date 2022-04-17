CommunityFoundationAPI created by Mathew Church

To run this project MongoDB and Node.JS are required.

The following extensions are also required:
* mongoose v6.3.0
* express v4.17.3
* body-parser v1.20.0
* nodemon v2.0.15
* cors: v2.8.5

To install the above extensions you can run the following command in command line after installing the latest Node.JS (https://nodejs.org/en/download/)

npm install -g mongoose express body-parser nodemon cors

The server can be started using the following command in command prompt from the project directory:
nodemon start

Additional notification entries can be added to the server using a POST request and following this schema for a notification:
title: String (title of the notification),
description: String (a detailed description of the notification),
domain: String (a url linking to a site/domain where the user can learn more/act on notification),
icon: String ( a png file that can be added to a notification i.e. company logo)

Current address to access the server once it is running is http://localhost:4000/CommunityOutreach/notifications

The frontend can be accessed by navigating to "./Frontend/Index.html"
With the server already running opening the index.html file in your browser will load the webpage and display current notifications stored on the server.