var config = require('./dbconfig');
const sql = require('mssql');

async function getNotifications() {
    try {
        let pool = await sql.connect(config);
        let notifications = await pool.request().query("SELECT * from NotificationMessages");
        return notifications.recordset;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getNotifications: getNotifications
}