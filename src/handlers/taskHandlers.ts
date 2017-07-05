import {
  createTask,
  deleteTask,
  getTaskById,
  getTasksPaged,
  taskExists,
} from 'stores/taskStore';
import { Task } from 'models';

export const GetTask = (event, context, callback) => {
  const id = event.pathParameters.id;
  taskExists(id)
  .then((result) => {
    if(result) {
      getTaskById(id)
      .then((result) => {
        callback(null, { statusCode: 200, body: JSON.stringify(result) });
      })
      .catch((error) => {
        callback(new Error(error), { statusCode: 500, body: 'server error' });
      });
    } else {
      callback(null, { statusCode: 404, body: 'does not exists', })
    }
  })
  .catch(() => {
    callback(null, { statusCode: 500, body: 'Task not found' });
  })
}

export const GetTasksPaged = (event, context, callback) => {
  getTasksPaged()
  .then((result) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(result),
    });
  })
  .catch((error) => {
    callback(new Error(error));
  });
}

export const PostTask = (event, context, callback) => {
  console.log(event.body);
  const task = JSON.parse(event.body);
  createTask(task as Task)
  .then((result) => {
    callback(null, {
      statusCode: 201,
      body: JSON.stringify(result),
    });
  })
  .catch((error) => {
    callback(new Error(error));
  });
}

export const DeleteTask = (event, context, callback) => {
  const id = event.pathParameters.id;
  deleteTask(id)
  .then(() => {
    callback(null, {
      statusCode: 204,
    });
  })
  .catch((error) => {
    callback(new Error(error));
  });
}
