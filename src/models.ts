export interface User {
    id: number,
    email: string,
    password: string,
    username: string,
    date_joined: Date,
    notification_arn?: string,
};

export interface Task {
    id?: number,
    title: string,
    description: string,
    due_date: Date,
    assignee_id: number,
    created_on: Date,
    updated_on: Date,
};

export interface Comment {
    id: number,
    text: string,
    task_id: number,
    commenter_id: number,
    created_on: Date,
    updated_on: Date,
};
