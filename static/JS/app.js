// main driver for the application
function runApp(weight, height, age, difficulty) {
  // Instantiate user
  const athlete = new User(weight, height, age, difficulty);
  // Create Workout List
  workoutList = createWorkoutList(athlete);
  // Process Workout
  processWorkout(workoutList, athlete);
}

// Generate Workouts (Hard coded workouts for now)
function createWorkoutList(ourAthlete) {
  let firstWorkout, secondWorkout, thirdWorkout;

  if (ourAthlete.difficulty === 1) {
    firstWorkout = new Workout('Lunges');
    secondWorkout = new Workout('High Knees');
    thirdWorkout = new Workout('Squats');
  } else if (ourAthlete.difficulty === 2) {
    firstWorkout = new Workout('Plank-Ups');
    secondWorkout = new Workout('Crunches');
    thirdWorkout = new Workout('Mountain Climbers');
  } else {
    firstWorkout = new Workout('Russian Twists');
    secondWorkout = new Workout('Jump Squats');
    thirdWorkout = new Workout('Push-Ups');
  }

  // Add workouts to workoutList
  let workoutList = new WorkoutDoublyLinkedList(firstWorkout);
  workoutList.append(secondWorkout);
  workoutList.append(thirdWorkout);

  return workoutList;
}

function processWorkout(workoutList, ourAthlete) {
  let currentWorkout = workoutList.head;
  // timer initiation
  let workoutTimer = new Timer();
  workoutTimer.setTime(ourAthlete.difficulty);
  workoutTimer.drawTimer();
  // ticker for clock (Running clock)
  setInterval(function tickHelper() {
    workoutTimer.tick();
    console.log(workoutTimer.time);
  }, 1000);
  // clock runs
}
