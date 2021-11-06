// Need to implement form validation

/**
 * Stores user-entered values for weight, height, and age, in session storage.
 */
function storeValues() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const age = document.getElementById("age").value;

    // Store user-entered values in JSON format in LocalStorage
    let weightJSON = JSON.stringify(weight);
    sessionStorage.setItem("weight", weightJSON);

    let heightJSON = JSON.stringify(height);
    sessionStorage.setItem("height", heightJSON);

    let ageJSON = JSON.stringify(age);
    sessionStorage.setItem("age", ageJSON);
}