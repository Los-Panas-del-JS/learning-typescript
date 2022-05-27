interface AnimalInterface {
  name: string;

  walk(): void;

  takeWater(): void;
}

interface DogInterface extends AnimalInterface {
  wauf(): void;
}

interface CatInterface extends AnimalInterface {
  meow(): void;
}

const animal: AnimalInterface = {
  name: 'Dog',
  walk: function() {
    console.log(`${this.name} walking`);
  },
  takeWater: function() {
    console.log(`${this.name} take water`);
  }
};

animal.walk();
animal.takeWater();

function moveAnimal(animal: AnimalInterface): void {
  animal.walk();
}

moveAnimal(animal);

const dog: DogInterface = {
  name: 'Dog',
  walk: function() {
    console.log(`${this.name} walking`);
  },
  takeWater: function() {
    console.log(`${this.name} take water`);
  },
  wauf: function() {
    console.log('Wauf wauf');
  },
};

const cat: CatInterface = {
  name: 'Cat',
  walk: function() {
    console.log(`${this.name} walking`);
  },
  takeWater: function() {
    console.log(`${this.name} take water`);
  },
  meow: function() {
    console.log('Meow meow');
  },
};

moveAnimal(cat);
moveAnimal(dog);
