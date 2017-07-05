import * as mysql from 'mysql';
import * as info from 'secretInfo';

// Models
import { Task } from 'models';

const connectionInfo = {
    host: info.host,
    user: info.user,
    password: info.password,
    database: info.database,
    port: 3306,
};

export const getTaskById = (id: number): Promise<any> => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(connectionInfo);
        connection.query(`SELECT * FROM Task WHERE id=${id}`, (error, result) => {
            if (error) { reject(error) }
            else { resolve(result[0]); }
            connection.end();
        });
    });
}

export const taskExists = (id: number): Promise<any> => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(connectionInfo);
        connection.query(`SELECT COUNT(*) as result FROM Task WHERE id=${id}`, (error, result) => {
            if (error) { reject(error) }
            else { resolve(result[0].result > 0); }
            connection.end();
        });
    });
}

export const getTasksPaged = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(connectionInfo);
        connection.query(`SELECT * FROM Task`, (error, result) => {
            if (error) { reject(error) }
            else { resolve(result); }
            connection.end();
        });
    });
}

export const createTask = (task: Task): Promise<any> => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO Task (title, description, due_date, assignee_id, created_on, updated_on) VALUE (
            '${task.title}',
            '${task.description}',
            '${task.due_date}',
            ${task.assignee_id},
            '${task.created_on}', 
            '${task.updated_on}'
        )`;
        const connection = mysql.createConnection(connectionInfo);
        connection.query(query, (error, result) => {
            if (error) { reject(error) }
            else { resolve(result); }
            connection.end();
        });
    });
}

export const deleteTask = (id: number): Promise<any> => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM Task WHERE id = ${id}`;
        const connection = mysql.createConnection(connectionInfo);
        connection.query(query, (error, result) => {
            if (error) { reject(error) }
            else { resolve(result); }
            connection.end();
        });
    });
}
