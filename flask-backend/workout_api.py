from flask import Blueprint
import json

# Blue print used so we can separate the api from the app
workout_blueprint = Blueprint(
    "workout_blueprint", __name__, static_folder="static", template_folder="templates"
)

# this will feed in a difficulty selector to the api call and then generate a workout based on
# the difficulty
# will return a jsonified workout
@workout_blueprint.route("/generate_workout/<difficulty>")
def generate_workout(difficulty):
    # read json file of workouts
    file = open("flask-backend/static/workout.json")
    workouts_json = json.load(file)
    # randomly select workouts based off difficulty
    generated_workout = {"workouts": [], "difficulty": 0}
    generated_workout["workouts"].append(workouts_json["workouts"][0])
    # set timer based off of difficulty
    print(difficulty)
    if difficulty == "easy":
        generated_workout["difficulty"] = 1
    elif difficulty == "average":
        generated_workout["difficulty"] = 2
    elif difficulty == "intense":
        generated_workout["difficulty"] = 3

    # return the workout data in json formating
    return generated_workout
