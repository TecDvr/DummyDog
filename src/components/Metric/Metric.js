import React from 'react';
import DummydogContext from '../../context/dummydog-context'
import { Link } from 'react-router-dom';
import config from '../../config';
import Select from 'react-select';

export default class Metric extends React.Component {
    static contextType = DummydogContext;
    constructor(props) {
        super(props);
        this.state = {
            allGood: false,
            loading: false,
            metricBody: {
                series: [
                    {
                        host: "myhost",
                        metric: "test.metric",
                        interval: null,
                        points: [
                            [
                                Math.round((new Date()).getTime() / 1000),
                                4
                            ]
                        ],
                        tags: "source:Postman,test",
                        type: "gauge"
                    }
                ]
            }
        }
        this.handleSendMetric = this.handleSendMetric.bind(this);
    }

    handleSendMetric(e) {
        this.setState({ loading: true })
        e.preventDefault();
        fetch(`${config.METRIC_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'DD-API-KEY': `${this.context.api}`,
            },
            body: JSON.stringify(this.state.metricBody)
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
        let loading = this.state.loading;
        return (
            <div className="landing-container">
                <div className="title">
                    <h1>
                        <i className="fas fa-shipping-fast"></i> Send Some Metrics
                    </h1>
                    {this.state.allGood === false ? (
                        <p>Ready When You Are</p>
                    ) : (
                        <p>Metrics Sent!</p>
                    )}
                </div>
                <div className='log-selector'>
                    <Select
                        onChange={(option) => {
                            let metricBody = { ...this.state.metricBody };
                            metricBody.type = option.value;
                            this.setState({ metricBody, allGood: false });
                        }}
                        defaultValue={{ label: "Type" }}
                        options={[
                            { label: "Gauge", value: 'gauge' },
                            { label: "Count", value: 'count' },
                            { label: "Rate", value: 'rate' },
                            { label: "Set", value: 'set' },
                            { label: "Histogram", value: 'histogram' },
                            { label: "Distribution", value: 'distribution' },
                        ]}
                        styles={{
                        control: (provided) => ({
                            ...provided,
                            backgroundColor: "#3C00B2",
                            width: "200px",
                            borderRadius: "10px",
                            cursor: "pointer",
                            margin: "10px",
                        }),
                        singleValue: (provided) => ({
                            ...provided,
                            color: "white",
                        }),
                        menu: (provided) => ({
                            ...provided,
                            backgroundColor: "#3C00B2",
                            borderRadius: "10px",
                        }),
                        }}
                    /> 
                </div>
                <form className="api">
                    <label className="hostname-input-label" htmlFor="host">
                        Host <i className="fas fa-file-signature"></i>
                    </label>
                    <input
                        className="hostname-input"
                        required
                        placeholder="localhost"
                        type="text"
                        name="host"
                        id="host"







                        // onChange={(e) => {
                        //     let metricBody = { ...this.state.metricBody };
                        //     metricBody.host = e.target.value;
                        //     this.setState({ metricBody });
                        // }}

                        onChange={(e) => {
                            let value = e.target.value
                            this.setState(({metricBody}) => ({
                                metricBody: {
                                  ...metricBody,
                                  series: [...metricBody.series, {host: value}]
                                }
                            }))
                        }}










                    ></input>
                    <label className="hostname-input-label" htmlFor="metric-name">
                        Metric Name <i className="fas fa-file-signature"></i>
                    </label>
                    <input
                        className="hostname-input"
                        required
                        placeholder="test.metric"
                        type="text"
                        name="metric-name"
                        id="metric-name"
                        onChange={(e) => {
                            let metricBody = { ...this.state.metricBody };
                            metricBody.metric = e.target.value;
                            this.setState({ metricBody });
                        }}
                    ></input>
                    <label className="hostname-input-label" htmlFor="tag">
                        Tags <i className="fas fa-file-signature"></i>
                    </label>
                    <input
                        className="hostname-input"
                        required
                        placeholder="key:value"
                        type="text"
                        name="tag"
                        id="tag"
                        onChange={(e) => {
                            let metricBody = { ...this.state.metricBody };
                            metricBody.tags = e.target.value;
                            this.setState({ metricBody });
                        }}
                    ></input>
                    <label className="hostname-input-label" htmlFor="interval">
                        Interval <i className="fas fa-file-signature"></i>
                    </label>
                    <input
                        className="hostname-input"
                        required
                        placeholder="key:value"
                        type="text"
                        name="interval"
                        id="interval"
                        onChange={(e) => {
                            let metricBody = { ...this.state.metricBody };
                            metricBody.interval = e.target.value;
                            this.setState({ metricBody });
                        }}
                    ></input>
                </form>










                <div className="button-cluster">
                    <Link
                        style={{ textDecoration: 'none' }}
                        to='/'><button>Home</button>
                    </Link>
                    <button onClick={this.handleSendMetric} disabled={loading}>
                        {loading ? (
                            <i className="fa fa-cog fa-spin"></i>
                        ) : (
                            "send metric"
                        )}
                    </button>
                </div>            
            </div>
        )
    }
}