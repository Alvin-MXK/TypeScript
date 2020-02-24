type Result1 = Extract<"1" | "2", "2" | "3">;
let a1: Result1 = '2'

type Result2 = Extract<string, "1">;
// type Result2 = never
let a2: Result2 = '1'

type Result3 = Extract<{ a: number }, { a: string | number }>;
/*
type Result3 = {
    a: number;
}
*/
let a3: Result3 = {
    a: '1',
}

type Result4 = Extract<string | number, number | boolean>;
// type Result4 = number
let a4: Result4 = 78
