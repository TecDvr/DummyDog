import React from 'react';
import DummydogContext from '../../context/dummydog-context'
import { Link } from 'react-router-dom';

export default class Trace extends React.Component {
    static contextType = DummydogContext;
    
    render() {
        return (
            <div className="landing-container">
                <p>Traces Coming Soon!</p>
                <Link
                    style={{ textDecoration: 'none' }}
                    to='/'><button>Home</button>
                </Link>
            </div>
        )
    }
}