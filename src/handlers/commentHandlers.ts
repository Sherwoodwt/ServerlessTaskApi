import {
    createComment,
    deleteComment,
    getCommentById,
    getCommentsPaged,
} from 'stores/commentStore';
import { Comment } from 'models';

export const GetComment = (event, context, callback) => {
    const id = event.pathParameters.id;
    getCommentById(id)
    .then((result) => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(result),
        })
    });
}

export const GetCommentsPaged = (event, context, callback) => {
    getCommentsPaged()
    .then((result) => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(result),
        });
    });
}

export const PostComment = (event, context, callback) => {
    const comment = JSON.parse(event.body);
    createComment(comment)
    .then((result) => {
        callback(null, {
            statusCode: 201,
            body: JSON.stringify(result),
        });
    });
}

export const DeleteComment = (event, context, callback) => {
    const id = event.pathParameters.id;
    deleteComment(id)
    .then((result) => {
        callback(null, {
            statusCode: 204,
        });
    });
}
