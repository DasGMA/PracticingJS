class Animal {
    constructor(animal = null, next = null) {
        this.animal = animal;
        this.next = next;
    }
}

class AnimalShelter {
    constructor(shelter = null, last = null) {
        this.shelter = shelter;
        this.last = last;
        this.animalCount = 0;
    }

    enque(pet) {
        const animal = new Animal(pet);
        if (this.shelter === null) {
            this.shelter = animal;
            this.last = animal;
        }
        
        this.last.next = animal;
        this.last = animal;
        this.animalCount++;
    }

    dequeAny() {
        if (this.animalCount === 0) return null;
        if (this.animalCount === 1) {
            this.shelter = null;
            this.last = null;
            this.animalCount--;
        }
        if (this.animalCount > 1) {
            this.shelter = this.shelter.next;
            this.animalCount--;
        }
    }

    dequeCat() {
        let shelter = this.shelter;
        const cat = 'cat';

        if (this.animalCount === 1 && this.shelter.animal === cat) {
            this.shelter = null;
            this.last = null;
            this.animalCount--;
            return;
        }

        if (this.shelter.animal === cat) {
            this.shelter = this.shelter.next;
            this.animalCount--;
            return;
        }

        while (shelter.next.animal !== cat) {
            shelter = shelter.next;
        }
        shelter.next = shelter.next.next;
        this.animalCount--;
    }

    dequeDog() {
        let shelter = this.shelter;
        const dog = 'dog';
        if (this.animalCount === 1 && this.shelter.animal === dog) {
            this.shelter = null;
            this.last = null;
            this.animalCount--;
            return;
        }

        if (this.shelter.animal === dog) {
            this.shelter = this.shelter.next;
            this.animalCount--;
            return;
        }

        while (shelter.next.animal !== dog) {
            shelter = shelter.next;
        }
        shelter.next = shelter.next.next;
        this.animalCount--;
    }


}


const kernel = new AnimalShelter();

kernel.enque('dog');
kernel.enque('cat');
kernel.enque('cat');
kernel.enque('dog');
// kernel.enque('dog');
// kernel.enque('dog');
// kernel.enque('dog');

console.log(kernel.shelter);
//kernel.dequeAny();
//console.log(kernel.shelter)
console.log(kernel.dequeCat());
console.log(kernel.shelter);
console.log(kernel.dequeDog());
console.log(kernel.shelter);

