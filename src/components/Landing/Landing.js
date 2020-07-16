import React from 'react';
import DummydogContext from '../../context/dummydog-context'
import config from '../../config';

export default class Landing extends React.Component {
    static contextType = DummydogContext;
    constructor(props) {
        super(props);
        this.state = {
            api: null,
            error: null
        }
    }

    handleLogSend(e) {
        e.preventDefault();
        fetch(`${config.LOGS_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'DD-API-KEY': `${this.state.api}`
            }
        })
        .then(res =>
            (res.ok) 
                ? res.json().then(allGood => {
                console.log(allGood)
            })
            : res.json().then(resJson=>this.setState({error:resJson.error}))
        )  
    }

    render() {
        return (
            <div className='landing-container'>
                <div className='title'>
                    <h1>dummydog</h1>
                    <p>info sent the right way</p>
                </div>
                <form className='api'>
                    <label className='api-input-label' htmlFor='apikey'>Your API Key</label>
                    <input
                        className='api-input'
                        required
                        placeholder='Your API Key'
                        type='text'
                        name='apikey'
                        id='apikey'
                        onChange={e => this.setState({ api: e.target.value })}>
                    </input>
                </form>
            </div>
        )
    }
}