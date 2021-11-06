const LOW_DIFF_PER_HOUR = 180; // 180 * 20secs = 3600 secs = 1 hour
const MED_DIFF_PER_HOUR = 120; // 120 * 30secs = 3600 secs = 1 hour
const HIGH_DIFF_PER_HOUR = 80; // 80 * 45secs = 3600 secs = 1 hour
const KG_PER_POUND = 2.2046;   // Used in lb to kg conversion
const MET = 8.0;               // MET value assigned to vigorous circuit training in Compendium Table

class User {
    constructor(weight, height, age, difficulty) {
        // set weight -- convert lbs to kgs
        if (weight === undefined) { this.weight = 0; }
        else { this.weight = weight / KG_PER_POUND; }

        // set height -- in inches
        if (height === undefined) { this.height = 0; }
        else { this.height = height; }

        // set age
        if (age === undefined) { this.age = 0; }
        else { this.age = age; }
        
        // set difficulty
        if (difficulty === undefined) { this.difficulty = 0; }
        else { this.difficulty = difficulty; }

        // set caloriesBurned
        this.caloriesBurned = 0;
    }

    /**
     * Calculate calories burned in each workout.
     * Utilizes MET values from Compendium Table to associate workout with calories burned.
     * Compendium Table: https://sites.google.com/site/compendiumofphysicalactivities/
     */
    calcCalories() {
        // calories burned per hour = MET * kgs
        switch (this.difficulty) {
            case 1:
                this.caloriesBurned += (MET * this.weight) / LOW_DIFF_PER_HOUR;
                break;
            case 2:
                this.caloriesBurned += (MET * this.weight) / MED_DIFF_PER_HOUR;
                break;
            case 3:
                this.caloriesBurned += (MET * this.weight) / HIGH_DIFF_PER_HOUR;
                break;
            default:
                console.log("Difficulty was never selected!");
                break;
        }
    }
}

