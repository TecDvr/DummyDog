import React from "react";
import DummydogContext from "../../context/dummydog-context";
import { Link } from "react-router-dom";
import config from "../../config";
import Select from "react-select";
import "./Event.css";

export default class Event extends React.Component {
    static contextType = DummydogContext;
    constructor(props) {
        super(props);
        this.state = {
            allGood: false,
            loading: false,
            eventBody: {
                aggregation_key: null,
                alert_type: null,
                date_happened: null,
                device_name: null,
                host: null,
                title: null,
                text: null,
                tags: null,
                priority: null,
                source_type_name: null,
            },
        };
        this.handleLogEvent = this.handleLogEvent.bind(this);
    }

    handleLogEvent(e) {
        this.setState({ loading: true });
        e.preventDefault();
        fetch(`/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "DD-API-KEY": `${this.context.api}`,
            },
            body: JSON.stringify(this.state.eventBody),
        }).then((res) =>
            res.ok
                ? res.json().then((allGood) => {
                      console.log(allGood);
                      this.setState({ allGood: true });
                      this.setState({ loading: false });
                  })
                : res
                      .json()
                      .then((resJson) =>
                          this.setState({ error: resJson.error })
                      )
        );
    }

    render() {
        let loading = this.state.loading;
        let time = Math.round(new Date().getTime() / 1000);
        return (
            <div className='landing-container'>
                <p className='currentAPItext'>
                    api in use: {this.context.api.substr(28)}
                </p>
                <div className='title'>
                    <h1>
                        <i className='fas fa-shipping-fast'></i> Send Some
                        Events
                    </h1>
                    {this.state.allGood === false ? (
                        <p>Ready When You Are</p>
                    ) : (
                        <p>Events Sent!</p>
                    )}
                </div>
                <div className='log-selector'>
                    <Select
                        onChange={(option) => {
                            let eventBody = { ...this.state.eventBody };
                            eventBody.priority = option.value;
                            this.setState({ eventBody, allGood: false });
                        }}
                        defaultValue={{ label: "Priority" }}
                        options={[
                            { label: "Low", value: "low" },
                            { label: "Normal", value: "normal" },
                            { label: "High", value: "high" },
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
                    <Select
                        onChange={(option) => {
                            let eventBody = { ...this.state.eventBody };
                            eventBody.source_type_name = option.value;
                            this.setState({ eventBody, allGood: false });
                        }}
                        defaultValue={{ label: "Source Type" }}
                        options={[
                            { label: "Kubernetes", value: "Kubernetes" },
                            { label: "Jenkins", value: "Jenkins" },
                            { label: "Github", value: "Github" },
                            { label: "Jira", value: "Jira" },
                            { label: "Docker", value: "Docker" },
                            { label: "Datadog", value: "Datadog" },
                            { label: "Node", value: "Node" },
                            { label: "Python", value: "Python" },
                            { label: "Slack", value: "Slack" },
                            {
                                label: "Amazon Cloudtrail",
                                value: "Amazon Cloudtrail",
                            },
                            { label: "Amazon Ec2", value: "Amazon Ec2" },
                            { label: "Azure", value: "Azure" },
                            { label: "Java", value: "Java" },
                            { label: "Metric Alert", value: "Metric Alert" },
                        ]}
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                backgroundColor: "#0052B2",
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
                                backgroundColor: "#0052B2",
                                borderRadius: "10px",
                            }),
                        }}
                    />
                    <Select
                        onChange={(option) => {
                            let eventBody = { ...this.state.eventBody };
                            eventBody.alert_type = option.value;
                            this.setState({ eventBody, allGood: false });
                        }}
                        defaultValue={{ label: "Alert Type" }}
                        options={[
                            { label: "Error", value: "error" },
                            { label: "Warning", value: "warning" },
                            { label: "Info", value: "info" },
                            { label: "Success", value: "success" },
                        ]}
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                backgroundColor: "#0A96C9",
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
                                backgroundColor: "#0A96C9",
                                borderRadius: "10px",
                            }),
                        }}
                    />
                    <Select
                        onChange={(option) => {
                            let eventBody = { ...this.state.eventBody };
                            eventBody.date_happened = option.value;
                            this.setState({ eventBody, allGood: false });
                        }}
                        defaultValue={{ label: "Date of Event" }}
                        options={[
                            { label: "Today", value: time },
                            { label: "1 day ago", value: time - 86400 },
                            { label: "2 day ago", value: time - 86400 * 2 },
                            { label: "3 day ago", value: time - 86400 * 3 },
                            { label: "4 day ago", value: time - 86400 * 4 },
                            { label: "5 day ago", value: time - 86400 * 5 },
                            { label: "6 day ago", value: time - 86400 * 6 },
                        ]}
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                backgroundColor: "#0ABEBF",
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
                                backgroundColor: "#0ABEBF",
                                borderRadius: "10px",
                            }),
                        }}
                    />
                </div>
                <form className='api'>
                    <label className='hostname-input-label' htmlFor='title'>
                        Title <i className='fas fa-file-signature'></i>
                    </label>
                    <input
                        className='hostname-input'
                        required
                        placeholder='My Event'
                        type='text'
                        name='title'
                        id='title'
                        onChange={(e) => {
                            let eventBody = { ...this.state.eventBody };
                            eventBody.title = e.target.value;
                            this.setState({ eventBody });
                        }}
                    ></input>
                    <label
                        className='source-input-label'
                        htmlFor='aggregation_key'
                    >
                        Aggregation Key <i className='fas fa-map-pin'></i>
                    </label>
                    <input
                        className='aggregation_key-input'
                        placeholder='Events using this key are grouped together in the Event Stream'
                        type='text'
                        name='aggregation_key'
                        id='aggregation_key'
                        onChange={(e) => {
                            let eventBody = { ...this.state.eventBody };
                            eventBody.aggregation_key = e.target.value;
                            this.setState({ eventBody });
                        }}
                    ></input>
                    <label
                        className='hostname-input-label'
                        htmlFor='device_name'
                    >
                        Device Name <i className='fas fa-file-signature'></i>
                    </label>
                    <input
                        className='hostname-input'
                        required
                        placeholder='Macbook Pro'
                        type='text'
                        name='device_name'
                        id='device_name'
                        onChange={(e) => {
                            let eventBody = { ...this.state.eventBody };
                            eventBody.device_name = e.target.value;
                            this.setState({ eventBody });
                        }}
                    ></input>
                    <label className='hostname-input-label' htmlFor='host'>
                        Host <i className='fas fa-file-signature'></i>
                    </label>
                    <input
                        className='hostname-input'
                        required
                        placeholder='localhost'
                        type='text'
                        name='host'
                        id='host'
                        onChange={(e) => {
                            let eventBody = { ...this.state.eventBody };
                            eventBody.host = e.target.value;
                            this.setState({ eventBody });
                        }}
                    ></input>
                    <label className='hostname-input-label' htmlFor='tags'>
                        Tags <i className='fas fa-file-signature'></i>
                    </label>
                    <input
                        className='hostname-input'
                        required
                        placeholder='key:value'
                        type='text'
                        name='tags'
                        id='tags'
                        onChange={(e) => {
                            let eventBody = { ...this.state.eventBody };
                            eventBody.tags = e.target.value;
                            this.setState({ eventBody });
                        }}
                    ></input>
                    <label className='message-input-label' htmlFor='text'>
                        Event Text <i className='fas fa-envelope-open-text'></i>
                    </label>
                    <textarea
                        className='message-input'
                        required
                        placeholder='Kubernetes exploded today'
                        type='text'
                        name='text'
                        id='text'
                        onChange={(e) => {
                            let eventBody = { ...this.state.eventBody };
                            eventBody.text = e.target.value;
                            this.setState({ eventBody });
                        }}
                    ></textarea>
                </form>
                <div className='button-cluster'>
                    <button onClick={this.handleLogEvent} disabled={loading}>
                        {loading ? (
                            <i className='fa fa-cog fa-spin'></i>
                        ) : (
                            "send event"
                        )}
                    </button>
                    <Link style={{ textDecoration: "none" }} to='/'>
                        <button>Home</button>
                    </Link>
                </div>
            </div>
        );
    }
}
