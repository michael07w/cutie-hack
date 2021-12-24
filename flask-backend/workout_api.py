from flask import Blueprint
import json
import random

# Blue print used so we can separate the api from the app
workout_blueprint = Blueprint(
    "workout_blueprint", __name__, static_folder="static", template_folder="templates"
)


@workout_blueprint.route("/generate_workout/<difficulty>")
def generate_workout(difficulty):
    '''
    this function will handle api calls based off the the difficulty selector 
    @params
    difficulty : string
        the string that is used for the api call to select difficulty
    @return
        returns jsonfied data of a randomly generated workouts
    '''
    # read json file of workouts
    file = open("static/workout.json") # removed "flask-backend" from path; is a relative filepath, not absolute
    workouts_json = json.load(file)
    # randomly select workouts based off difficulty
    generated_workout = {"workouts": [], "difficulty": 0}
    while len(generated_workout["workouts"]) < 3:
        workout_selector = random.randint(0, len(workouts_json['workouts'])-1)
        generated_workout['workouts'].append(
            workouts_json['workouts'][workout_selector])
        # removes the selected workout from base data
        workouts_json['workouts'].pop(workout_selector)
    # set timer based off of difficulty
    if difficulty == "easy":
        generated_workout["difficulty"] = 1
    elif difficulty == "average":
        generated_workout["difficulty"] = 2
    elif difficulty == "intense":
        generated_workout["difficulty"] = 3

    # return the workout data in json formating
    return generated_workout
