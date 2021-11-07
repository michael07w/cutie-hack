// Below code must run after user submits their info on user_form.html
function runApp(weight, height, age, difficulty) {
    // Instantiate user
    const athlete = new User(weight, height, age, difficulty);
    // Create Workout List
    workoutList = createWorkoutList(athlete);
    // Process Workout
    processWorkout(workoutList);
}

// Generate Workouts
function createWorkoutList (ourAthlete) {
    let firstWorkout, secondWorkout, thirdWorkout;
    
    if (ourAthlete.difficulty === 1) {
        firstWorkout = new Workout("Lunges");
        secondWorkout = new Workout("High Knees");
        thirdWorkout = new Workout("Squats");
    
    }
    else if (ourAthlete.difficulty === 2) {
        firstWorkout = new Workout("Plank-Ups");
        secondWorkout = new Workout("Crunches");
        thirdWorkout = new Workout("Mountain Climbers");
    }
    else {
        firstWorkout = new Workout("Russian Twists");
        secondWorkout = new Workout("Jump Squats");
        thirdWorkout = new Workout("Push-Ups");
    }
    
    // Add workouts to workoutList
    let workoutList = new WorkoutDoublyLinkedList(firstWorkout);
    workoutList.append(secondWorkout);
    workoutList.append(thirdWorkout);

    return workoutList;
}

function processWorkout() {
    // get first workout in list
    let currentWorkout = workoutList.head;
    while (currentWorkout !== null) {
        
        /**
        // create workout timer
        workoutTimer = new Timer();
        workoutTimer.setTime(testUser.difficulty);
        */
        // start workout timer
        /** Code goes here. */

        // tally calories burned
        //testUser.calcCalories();
        
        // get next workout in list
        console.log(currentWorkout);
        currentWorkout = currentWorkout.next;
    }

    // finished workout, display stats
    /** Code goes here. */
}