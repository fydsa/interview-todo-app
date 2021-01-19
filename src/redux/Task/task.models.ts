export interface TaskModel {
    title: string;
    id: number | null;
    isCompleted: boolean
}

interface addTask {
    type: string;
    payload: object;
}

interface editTask {
    type: string;
    payload: object;
}

interface removeTask {
    type: string;
    payload: number;
}

interface completeTask {
    type: string;
    payload: object;
}

interface sortTask {
    type: string,
    payload: boolean
}

export type Action =
    | addTask
    | editTask
    | removeTask
    | completeTask
    | sortTask;