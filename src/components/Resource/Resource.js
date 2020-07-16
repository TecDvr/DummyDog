import React from 'react';
import DummydogContext from '../../context/dummydog-context'

export default class Resource extends React.Component {
    static contextType = DummydogContext;
    
    render() {
        return (
            <div>
                <p>resources</p>
            </div>
        )
    }
}