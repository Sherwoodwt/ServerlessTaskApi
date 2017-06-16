import * as mysql from 'mysql';
import * as info from 'secretInfo';

// Models
import { User } from 'models';

const connection = mysql.createConnection({
    host: info.host,
    user: info.user,
    password: info.password,
    database: info.database,
    port: 3306,
});

export const getUserById = (id: number) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM User WHERE id=${id}`, (error, result) => {
            if (error) { reject(error) }
            resolve(result[0]);
        });
    });
}

export const getUsersPaged = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM User`, (error, result) => {
            if (error) { reject(error) }
            resolve(result);
        });
    });
}

export const createUser = (user: User) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO User (email, password, username, date_joined, notification_arn) VALUES (
            '${user.email}',
            '${user.password}',
            '${user.username}',
            '${user.date_joined}',
            '${user.notification_arn}'
        )`;
        connection.query(query, (error, result) => {
            if (error) { reject(error) }
            resolve(result);
        });
    });
}
