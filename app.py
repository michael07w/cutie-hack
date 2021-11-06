from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)


@app.route("/")
def home():
    # serves up the main page
    return render_template("index.html")


@app.route("/user_form")
def user_form():
    # serves page to get user info
    return render_template("user_form.html")


@app.route("/workout")
def workout():
    # serves page to get user info
    return render_template("workout.html")


if __name__ == "__main__":
    app.run(debug=True)
