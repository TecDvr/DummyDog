import React from 'react';
import DummydogContext from '../../context/dummydog-context'

export default class Landing extends React.Component {
    static contextType = DummydogContext;


    render() {
        return (
            <div>
                <p>{this.context.test.title}</p>
            </div>
        )
    }
}