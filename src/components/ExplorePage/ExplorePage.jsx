import React, { Component } from 'react';
import Random from '../Categories/Random/random';
import Yoga from '../Categories/Yoga/yoga';




export class ExplorePage extends Component {
    render() {
        return (
            <div>
                <Yoga/>
                <Random/>
            </div>
        )
    }
}

export default ExplorePage
