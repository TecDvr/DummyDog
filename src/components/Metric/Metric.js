import React from 'react';
import DummydogContext from '../../context/dummydog-context'
import { Link } from 'react-router-dom';

export default class Metric extends React.Component {
    static contextType = DummydogContext;
    
    render() {
        return (
            <div>
                <p>Metrics Coming Soon!</p>
                <Link
                    style={{ textDecoration: 'none' }}
                    to='/'><button>Home</button>
                </Link>
            </div>
        )
    }
}