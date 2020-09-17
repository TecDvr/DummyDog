import React from 'react';
// import DummydogContext from '../../context/dummydog-context'
import { Link } from 'react-router-dom';
import config from '../../config';

export default class Event extends React.Component {
    // static contextType = DummydogContext;
    constructor(props) {
        super(props);
        this.state = {
            api: '9e6a1bb4e18e7bbad6baa69826bfd34b',
            eventBody: {
                aggregation_key: null,
                alert_type: 'info',
                date_happened: null,
                device_name: null,
                host: 'mothership',
                title: 'test',
                text: 'ohhhhhhh yeahhhhhh bruh',
                tags: [
                    'key:value',
                    'key2:value2'
                ],
                priority: 'normal',
                source_type_name: 'kubernetes'
            }
        }
        this.handleLogEvent = this.handleLogEvent.bind(this);
    }

    handleLogEvent(e) {
        // this.setState({ loading: true })
        e.preventDefault();
        fetch(`${config.EVENTS_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'DD-API-KEY': `${this.state.api}`,
            },
            body: JSON.stringify(this.state.eventBody)
        })
        .then(res =>
            (res.ok) 
                ? res.json().then(allGood => {
                console.log(allGood)
                this.setState({ allGood: true })
                this.setState({ loading: false })
            })
            : res.json().then(resJson=>this.setState({error:resJson.error}))
        )  
    }
    
    render() {
        return (
            <div>
                <p>Events Coming Soon!</p>
                <Link
                    style={{ textDecoration: 'none' }}
                    to='/'><button>Home</button>
                </Link>
                <button onClick={this.handleLogEvent}>send event</button>
            </div>
        )
    }
}