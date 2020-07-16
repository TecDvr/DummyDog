import React from 'react';
import DummydogContext from '../../context/dummydog-context'

export default class Landing extends React.Component {
    static contextType = DummydogContext;

    render() {
        return (
            <div className='landing-container'>
                <div className='title'>
                    <h1>dummydog</h1>
                    <p>info sent the right way</p>
                </div>
                <div className='api'>
                    
                </div>
                <div>
                    <p>{this.context.test.title}</p>
                    <p>{this.context.test.id}</p>
                </div>
            </div>
        )
    }
}