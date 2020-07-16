import React from 'react';
import { Link } from 'react-router-dom';

export default class RealLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: null
        }
    }

    render() {
        return (
            <div>
                <header className='title'>
                    <h1>dummydog</h1>
                    <p>info sent the right way</p>
                </header>
                <Link 
                    style={{ textDecoration: 'none' }} 
                    to='/landing'>
                        <button className='linkButton'>Send Custom Logs</button>
                </Link>
            </div>
        )
    }
}