class Workout {
    constructor(name, example) {
        // set name
        if (name === undefined) { this.name = ""; }
        else { this.name = name; }

        // set example
        if (example === undefined) { this.example = ""; }
        else { this.example = example; }

        // set pointer to next Workout and prev Workout
        this.next = null;
        this.prev = null;
    }
}


class WorkoutDoublyLinkedList {
    constructor(workout) {
        this.head = workout;
        this.length = 1;
        this.tail = this.head;
    }

    /**
     * Prints all Workout objects in the Doubly Linked List.
     */
    printWorkouts() {
        let arr = [];
        let currentWorkout = this.head;
        while (currentWorkout !== null) {
            arr.push(currentWorkout.name);
            currentWorkout = currentWorkout.next;
        }

        console.log(arr.join(" <--> "));
    }

    /**
     * Add Workout object to end of Doubly Linked List.
     * 
     * @param Workout workout
     */
    append(workout) {
        this.tail.next = workout;
        workout.prev = this.tail;
        this.tail = workout;
        this.length++;

        this.printWorkouts();
    }
}
