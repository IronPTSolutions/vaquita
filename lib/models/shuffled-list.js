class ShuffledList {
  
  constructor(elements) {
    this.elements = elements;

    this.shuffle(3);
  }

  shuffle(rounds = 1) {
    for (let i = 0; i < rounds; i++) {
      this.elements = this.elements.sort((e1, e2) => Math.random() - 0.5);
    }
  }

  next() {
    const randomIndex = Math.floor(Math.random() * this.elements.length);
    return this.elements[randomIndex];
  }

}


module.exports = ShuffledList;
