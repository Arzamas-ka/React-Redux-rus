// ****** ******
// old syntax
function Animal(name, voice) {
  this.name = name;
  this.voice = voice;
}

Animal.prototype.say = function() {
  console.log(this.name, 'goes', this.voice);
};

const dog = new Animal('dog', 'woof');
dog.say();

// new syntax
class theAnimal {
  constructor(names, voices) {
    this.names = names;
    this.voices = voices;
  }

  say() {
    console.log(this.names, 'goes', this.voices);
  }
}


// ****** ******
// old syntax
const dogBig = {
  name: 'dog',
  voice: 'woof',
  say: function() {
    console.log(this.name, this.voice);
  }
};
dogBig.say();

const catBig = {
  name: 'cat',
  voice: 'meow',
  say: function() {
    console.log(this.name, this.voice);
  }
};
catBig.say();

