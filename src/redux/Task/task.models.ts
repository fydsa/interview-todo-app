export interface TaskModel {
    title: string;
    id?: number | null;
}

interface addTask {
    type: string;
    payload: string;
}

interface editTask {
    type: string;
    payload: null;
}

interface removeTask {
    type: string;
    payload: string;
}

interface completeTask {
    type: string;
    payload: string;
}

export type Action =
    | addTask
    | editTask
    | removeTask
    | completeTask;