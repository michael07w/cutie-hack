from flask import Flask, redirect, url_for, render_template, request, session
from workout_api import workout_blueprint

app = Flask(__name__)
app.secret_key = "cutie hack"
app.register_blueprint(workout_blueprint)


@app.route("/")
def home():
    # serves up the main page
    return render_template("index.html")


@app.route("/user_form", methods=["GET", "POST"])
def user_form():
    # serves page to get user info
    if request.method == "GET":
        return render_template("user_form.html")
    # logic for post request
    else:
        session["height"] = request.form["height"]
        session["weight"] = request.form["weight"]
        session["age"] = request.form["age"]
        session["difficulty"] = request.form["difficulty"]
        return redirect(url_for("workout"))


# testing to see if we can import react
@app.route("/workout")
def workout():
    return render_template("reactWorkout.html", flask_token="test")


# old workout logic
# @app.route("/workout")
# def workout():
#     # serves page to get user info
#     height = session["height"]
#     print(height)
#     weight = session["weight"]
#     age = session["age"]
#     difficulty = session["difficulty"]
#     return render_template(
#         "workout.html", height=height, weight=weight, age=age, difficulty=difficulty
#     )


if __name__ == "__main__":
    app.run(debug=True)
