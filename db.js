const mysql = require('mysql2');

class DB {
    constructor() {
        this.host = process.env.DB_HOST;
        this.user = process.env.DB_USERNAME;
        this.password = process.env.DB_PASSWORD;
        this.database = process.env.DB_NAME;
        this.db = null;
        this.getInstance();
    }

    createConnection = () => {
        this.db = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        })
        this.db.connect(err => {
            if (err) {
                console.error('Error connecting to DB!');
            }
        })

        console.log('Connected to database');

        return this.db;
    }

    getInstance() {
        if (this.db == null) {
            this.db = this.createConnection();
        }
        return this.db;
    }
}

module.exports = (new DB).db;