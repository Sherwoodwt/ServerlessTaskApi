import {
    createUser,
    deleteUser,
    getUserById,
    getUsersPaged,
} from 'stores/userStore';

import { User } from 'models';

export const GetUser = (event, context, callback) => {
    getUserById(event.pathParameters.id)
    .then((result) => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(result),
        });
    });
}

export const GetUsersPaged = (event, context, callback) => {
    getUsersPaged()
    .then((result) => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(result),
        });
    });
}

export const PostUser = (event, context, callback) => {
    const user = JSON.parse(event.body) as User;
    createUser(user)
    .then((result) => {
        callback(null, {
            statusCode: 201,
            body: JSON.stringify(result),
        });
    });
}

export const DeleteUser = (event, context, callback) => {
    const id = event.pathParameters.id;
    deleteUser(id)
    .then(() => {
        callback(null, {
            statusCode: 204,
        });
    });
}
