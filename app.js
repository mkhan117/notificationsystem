fetch("http://localhost:8090/api/notifications")
    .then(res => res.json())
    .then(json => {
        let notificationTable = `<tr>
                                    <th>Date</th>
                                    <th>Notification</th>
                                </tr>`;

        json.forEach(notification => {
            notificationTable += `<tr>
                                    <td>${notification.Date}</td>
                                    <td>${notification.Message}</td>
                                  </tr>`;
        });

        document.getElementById("notificationslist").innerHTML = notificationTable;
    })