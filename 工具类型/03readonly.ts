interface Todo {
    title: string;
}

const todo: Readonly<Todo> = {
    title: 'Delete inactive users',
};

todo.title = 'Hello';

// =============
interface Todo_1 {
    title: string;
    thing: {
        level: number;
        type: string;
    }
}

const todo_1: Readonly<Todo_1> = {
    title: 'Delete inactive users',
    thing: {
        level: 3,
        type: 'eat'
    }
};

todo_1.thing.level = 2;

// ReadonlyArray
let arr: ReadonlyArray<string> = ["a", "b"];
arr.push("c");
arr[0] = "c";
arr.splice(0,1)
arr.slice(0,1)

let arr1: ReadonlyArray<object> = [{a: 10},{b: 20}];
arr1[0]['a'] = 5
arr1