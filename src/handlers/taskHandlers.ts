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
      body: JSON.stringify(result),
    });
  })
  .catch((error) => {
    callback(new Error(error));
  });
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
