import React from 'react';
import DummydogContext from '../../context/dummydog-context'
import config from '../../config';
import Select from 'react-select'

export default class Landing extends React.Component {
    static contextType = DummydogContext;
    constructor(props) {
        super(props);
        this.state = {
            api: null,
            error: null,
            lang: 0,
            template: [],
            logBody: {
                ddsource: '',
                ddtags: '',
                hostname: '',
                message: ''
            }
        }
        this.handleLogSend = this.handleLogSend.bind(this);
    }

    componentDidMount() {
        fetch(`${config.TEMPLATE_ENDPOINT}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(resJSON => {
            this.setState({
                template: resJSON
            })
        })
    }

    handleLogSend(e) {
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
        if (this.state.template.length <= 0) {
            return (
                <div>
                    <p>loading</p>
                </div>
            )
        } else {
            return (
                <div className='landing-container'>
                    <div className='title'>
                        <h1>Logs</h1>
                        <p>send logs</p>
                    </div>
                    <Select onChange={(option) => this.setState({ lang: option.value })}
                        defaultValue={{label: "Custom Log?"}}
                        options={[
                            { label: "Custom", value: '' },
                            { label: "csharp", value: 0 },
                            { label: "docker", value: 1 },
                            { label: "iis", value: 2 },
                            { label: "java", value: 3 },
                            { label: "nginx", value: 4 },
                            { label: "nodejs", value: 5 },
                            { label: "php", value: 6 },
                            { label: "python", value: 7 },
                            { label: "redis", value: 8 },
                            { label: "ruby", value: 9 },
                            { label: "tomcat", value: 10 },
                            { label: "zookeeper", value: 11 }
                        ]}
                        styles={{ 
                            control: (provided) => ({ ...provided, backgroundColor: "#3C00B2"}),
                            singleValue: (provided) => ({...provided, color: "white"})
                        }}
                    />
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
                            value={this.state.template[this.state.lang].ddsource}
                            className='source-input'
                            required
                            placeholder='testsource'
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
                            value={this.state.template[this.state.lang].ddtags}
                            className='tag-input'
                            required
                            placeholder='env:staging'
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
                            value={this.state.template[this.state.lang].hostname}
                            className='hostname-input'
                            required
                            placeholder='i-012345678'
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
                            value={this.state.template[this.state.lang].message}
                            className='message-input'
                            required
                            placeholder='2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World'
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
}