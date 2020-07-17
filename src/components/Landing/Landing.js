import React from 'react';
import './Landing.css';
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
            templates: [],
            logBody: {
                ddsource: 'testsource',
                ddtags: 'env:staging',
                hostname: 'mothership',
                idx: 0,
                message: '2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World'
            }
        }
        this.handleLogSend = this.handleLogSend.bind(this);
        this.handleLogSave = this.handleLogSave.bind(this);
    }

    componentDidMount(){
        this.handleLogPull()
    }

    handleLogPull(e) {
        fetch(`${config.TEMPLATE_ENDPOINT}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res =>
            (res.ok) 
                ? res.json().then(data => {
                console.log(data);
                this.setState({templates:data})
            })
            : res.json().then(resJson=>this.setState({error:resJson.error}))
        )  
    }

    handleLogSend(e) {
        console.log(this.context.template[0].idx);
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

    handleLogSave(e) {
        e.preventDefault();
        console.log('handleLogSave : ', this); 
        fetch(`${config.TEMPLATE_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.templates)
        })
        .then(res =>
            (res.ok) 
                ? res.json().then(data => {
                console.log(data)
            })
            : res.json().then(resJson=>this.setState({error:resJson.error}))
        )  
    }

    render() {
        const {templates} = this.state;
        return (
            <div className='landing-container'>
                <div className='title'>
                    <h1>Logs</h1>
                    <p>send logs</p>
                </div>
                {/* <Select onChange={(option) => this.setState({ lang: option.value })}
                defaultValue={{label: "Custom Log?"}}
                options={
                    Object.keys(templates).map(e => ({ [e]: templates[e].ddsource }))
                }
                styles={{ 
                    valueContainer: (provided) => ({...provided, color: "black"}),
                    control: (provided) => ({ ...provided, backgroundColor: "#3C00B2"}),
                    singleValue: (provided) => ({...provided, color: "white"})
                }}
                /> */}
                <Select onChange={(option) => this.setState({ lang: option.value })}
                    defaultValue={{label: "Custom Log?"}}
                    options={[
                        { label: "Custom", value: "Custom" },
                        { label: "docker", value: 1 },
                        { label: "iis", value: 2 },
                        { label: "java", value: 3 },
                        { label: "nginx", value: 4 },
                        { label: "nodejs", value: 5 },
                        { label: "php", value: 6 },
                        { label: "python", value: 7 },
                        { label: "redis", value: 8 },
                        { label: "ruby", value: 9 },
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
                        // value={this.context.template[0].idx}
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
                    <button onClick={this.handleLogSave}></button>
                </form>
            </div>
        )
    }
}