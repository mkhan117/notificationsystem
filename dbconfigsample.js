const config = {
    user: 'username',
    password: 'password',
    database: 'dbname',
    server: 'serverlocation',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs        
    }
}

module.exports = config;