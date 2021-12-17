from flask import Blueprint

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

    # randomly select workouts based off difficulty

    # set timer based off of difficulty

    # return the workout data in json formating
    return "this is testing difficulty selector " + str(difficulty)
