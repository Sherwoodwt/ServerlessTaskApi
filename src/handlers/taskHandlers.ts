import {
  createTask,
  deleteTask,
  getTaskById,
  getTasksPaged,
} from 'stores/taskStore';
import { Task } from 'models';

export const GetTask = (event, context, callback) => {
  const id = event.pathParameters.id;
  getTaskById(id)
  .then((result) => {
    callback(null, {
      statusCode: 200,
      body: {
        result,
      },
    });
  });
}

export const GetTasksPaged = (event, context, callback) => {
  getTasksPaged()
  .then((result) => {
    callback(null, {
      statusCode: 200,
      body: {
        result,
      },
    });
  });
}

export const PostTask = (event, context, callback) => {
  const task = event.body;
  createTask(task as Task)
  .then((result) => {
    callback(null, {
      statusCode: 201,
      body: {
        result,
      },
    });
  });
}

export const DeleteTask = (event, context, callback) => {
  const id = event.pathParameters.id;
  deleteTask(id)
  .then(() => {
    callback(null, {
      statusCode: 204,
    });
  });
}
