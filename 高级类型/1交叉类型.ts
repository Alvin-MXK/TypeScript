interface Dog {
    run():void
}
interface Cat {
    jump():void
}
let pet: Dog & Cat = { // 看上去和接口多继承很像，但有一点区别。继承可以有自己的属性，交叉不行。
    run(){},
    jump(){},
    eat(){},
};