function getCall() {
    $.ajax({

        // Our url to make request 
        url: 'http://localhost:4000/CommunityOutreach/notifications',
        headers: {
            'Content-Type': 'application/json'
        },
        // Type of Request
        type: "GET",
        // Format of data
        dataType: "json",

        // Function to call when to
        // request is ok 
        success: function (data) {
            var notifications = document.getElementById("notifications");
            data.forEach(element => {
                var div = document.createElement("div");
                div.innerHTML = '<b>Title: </b>' + element.title + '<b> Description: </b>' + element.description + '<b> Domain: </b>' + element.url + '<b> Icon: </b>' + element.icon;
                notifications.appendChild(div);
            });

        },

        // Error handling 
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });
}
$(document).ready(getCall());