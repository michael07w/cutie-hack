import React, { Component } from 'react'

class WorkoutName extends Component {

    render() {

        
        console.log(this.props)
        
        return (
            <div>
                <h2 className="workout-name">
                    {this.props.workout[0].workout}
                </h2>
            </div>
        )
    }
}

export default WorkoutName
