import React from 'react';
import DummydogContext from '../../context/dummydog-context'
import config from '../../config';

export default class Landing extends React.Component {
    static contextType = DummydogContext;
    constructor(props) {
        super(props);
        this.state = {
            api: null,
            error: null,
            logBody: {
                ddsource: 'testsource',
                ddtags: 'env:staging',
                hostname: 'mothership',
                message: '2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World'
            }
        }
        this.handleLogSend = this.handleLogSend.bind(this);
    }

    handleLogSend(e) {
        console.log('workin hard or hardly working?');
        e.preventDefault();
        fetch(`${config.LOGS_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'DD-API-KEY': `${this.state.api}`,
            },
            body: JSON.stringify(this.state.logBody)
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
                    <label className='source-input-label' htmlFor='source'>Log Source</label>
                    <input
                        className='source-input'
                        required
                        placeholder='source'
                        type='text'
                        name='source'
                        id='source'
                        onChange={e => {
                            let logBody = {...this.state.logBody}
                            logBody.ddsource = e.target.value;
                            this.setState({ logBody })
                        }}>
                    </input>
                    <label className='tag-input-label' htmlFor='tag'>Log Tag</label>
                    <input
                        className='tag-input'
                        required
                        placeholder='tags'
                        type='text'
                        name='tag'
                        id='tag'
                        onChange={e => {
                            let logBody = {...this.state.logBody}
                            logBody.ddtags = e.target.value;
                            this.setState({ logBody })
                        }}>
                    </input>
                    <label className='hostname-input-label' htmlFor='hostname'>Log Hostname</label>
                    <input
                        className='hostname-input'
                        required
                        placeholder='hostname'
                        type='text'
                        name='hostname'
                        id='hostname'
                        onChange={e => {
                            let logBody = {...this.state.logBody}
                            logBody.hostname = e.target.value;
                            this.setState({ logBody })
                        }}>
                    </input>
                    <label className='message-input-label' htmlFor='message'>Log Message</label>
                    <input
                        className='message-input'
                        required
                        placeholder='message'
                        type='text'
                        name='message'
                        id='message'
                        onChange={e => {
                            let logBody = {...this.state.logBody}
                            logBody.message = e.target.value;
                            this.setState({ logBody })
                        }}>
                    </input>
                    <button onClick={this.handleLogSend}></button>
                </form>
            </div>
        )
    }
}