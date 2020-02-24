interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
};
// ======
interface Todo_1 {
    title: string;
    completed: {
        title: string,
        description: string
    };
}

type TodoPreview_1 = Pick<Todo_1, 'title' | 'completed'>;

const todo_1: TodoPreview_1 = {
    title: 'Clean room',
    completed: {
        title: 'adc',
        description: 'asdf'
    },
};