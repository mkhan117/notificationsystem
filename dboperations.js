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

async function addNotification(notification) {
    try {
        let pool = await sql.connect(config);
        let insertNotification = await pool.request()
            .input('Donation_Date', sql.Date)
            .input('Donor_Name', sql.NVarChar)
            .input('Donation_Amount', sql.Money)
            .execute('InsertNotification');
        return insertNotification.recordsets;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getNotifications: getNotifications
}