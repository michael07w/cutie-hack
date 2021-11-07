const nextButton = document.querySelector('#next');
console.log(nextButton);
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

  if (ourAthlete.difficulty == 1) {
    firstWorkout = new Workout('Lunges', '/static/images/lunge.jpg');
    secondWorkout = new Workout('High Knees', '/static/images/high-knees.jpg');
    thirdWorkout = new Workout('Squats', '/static/images/squat.jpg');
  } else if (ourAthlete.difficulty == 2) {
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
// workout driver
function processWorkout(workoutList, ourAthlete) {
  let currentWorkout = workoutList.head;

  // display workout details
  let workoutLocation = document.querySelector('.workout-name');
  workoutLocation.textContent = currentWorkout.name;
  document.querySelector('.workout-example').src = currentWorkout.example;

  // timer initiation
  let workoutTimer = new Timer();
  workoutTimer.setTime(ourAthlete.difficulty);
  workoutTimer.drawTimer();
  // ticker for clock (Running clock)
  //bandaids make the world go round
  setInterval(function tickHelper() {
    if (workoutTimer.tick()) {
      currentWorkout = currentWorkout.next;
      if (currentWorkout != null) {
        workoutTimer.setTime(ourAthlete.difficulty);
        workoutLocation.textContent = currentWorkout.name;
        document.querySelector('.workout-example').src = currentWorkout.example;
      }
    }
    console.log(workoutTimer.time);
  }, 1000);
  // clock runs
}
