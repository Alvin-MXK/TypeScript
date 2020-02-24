interface Bird {
    fly();
    eat();
}

interface Fish {
    swim();
    eat();
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet();
pet.eat(); // okay
pet.swim();    // errors