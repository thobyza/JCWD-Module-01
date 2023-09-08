// QUEUE data structure
// FIFO -> Fisrt-in First-out

class Queue {
  #container = [];

  enqueue(element) {
    this.#container.push(element);
  }

  dequeue() {
    return this.#container.shift();
  }

  getElements() {
    return this.#container;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.getElements());

queue.dequeue();
console.log(queue.getElements());

// push(x), pop() - unshift(x), shift()
// arr1 = [1, 2, 6];
// arr1.push("!");
// console.log(arr1);

// arr1.pop();
// console.log(arr1);

// arr1.unshift("a");
// console.log(arr1);

// arr1.shift();
// console.log(arr1);
