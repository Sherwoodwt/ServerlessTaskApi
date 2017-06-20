import * as mysql from 'mysql';
import * as info from 'secretInfo';

import { Comment } from 'models';

const connection = mysql.createConnection({
    host: info.host,
    user: info.user,
    password: info.password,
    database: info.database,
    port: 3306,
});

export const getCommentById = (id: number) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM Comment WHERE id = ${id}`, (error, result) => {
            if (error) { reject(error) }
            resolve(result);
        });
    });
}

export const getCommentsPaged = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM Comment`, (error, result) => {
            if (error) { reject(error) }
            resolve(result);
        });
    });
}

export const createComment = (comment: Comment) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO Comment (text, task_id, commenter_id, created_on, updated_on) VALUES (
            '${comment.text}',
            ${comment.task_id},
            ${comment.commenter_id},
            '${comment.created_on}',
            '${comment.updated_on}'
        )`;
        connection.query(query, (error, result) => {
            if (error) { reject(error) }
            resolve(result);
        });
    });
}

export const deleteComment = (id: number) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM Comment WHERE id = ${id}`;
        connection.query(query, (error, result) => {
            if (error) { reject(error) }
            resolve(result);
        });
    });
}
