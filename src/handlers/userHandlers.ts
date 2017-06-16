import {
    createUser,
    getUserById,
    getUsersPaged,
} from 'stores/userStore';

import { User } from 'models';

export const GetUser = (event, context, callback) => {
    getUserById(event.pathParameters.id)
    .then((result) => {
        callback(null, {
            statusCode: 200,
            body: {
                result,
            },
        });
    });
}

export const GetUsersPaged = (event, context, callback) => {
    getUsersPaged()
    .then((result) => {
        callback(null, {
            statusCode: 200,
            body: {
                result,
            },
        });
    });
}

export const PostUser = (event, context, callback) => {
    const user = event.body as User;
    createUser(user)
    .then((result) => {
        callback(null, {
            statusCode: 201,
            body: {
                result,
            },
        });
    });
}
