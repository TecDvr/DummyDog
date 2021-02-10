import React from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import DummydogContext from "../../context/dummydog-context";
// import config from "../../config";
import Select from "react-select";
import "./Log.css";
import dummyData from "../../dummy-data/dummy-data";

export default class Landing extends React.Component {
    static contextType = DummydogContext;
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showDeleteModal: false,
            loading: false,
            error: null,
            lang: 0,
            template: dummyData,
            logName: "",
            allGood: false,
            saved: false,
            selectValue: { label: "Saved Logs" },
            savedLogs: [],
            savedLogName: "",
            logBody: {
                ddsource: "",
                ddtags: "",
                hostname: "",
                message: "",
            },
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenDeleteModal = this.handleOpenDeleteModal.bind(this);
        this.handleCloseDeleteModal = this.handleCloseDeleteModal.bind(this);
        this.handleLogSend = this.handleLogSend.bind(this);
        this.saveFormat = this.saveFormat.bind(this);
        this.removeLog = this.removeLog.bind(this);
    }

    componentDidMount() {
        ReactModal.setAppElement("body");
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleOpenDeleteModal() {
        this.setState({ showDeleteModal: true });
    }

    handleCloseDeleteModal() {
        this.setState({ showDeleteModal: false });
    }

    handleLogSend(e) {
        console.log(JSON.stringify(this.state.logBody))
        this.setState({ loading: true });
        e.preventDefault();
        fetch(`/input`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "DD-API-KEY": `${this.context.api}`
            },
            body: JSON.stringify(this.state.logBody),
        })
            .then((res) =>
            res.ok
                ? res.json().then((allGood) => {
                      console.log(allGood);
                      this.setState({ allGood: true });
                      this.setState({ loading: false });
                  })
                : res
                      .json()
                      .then((resJson) =>
                          this.setState(
                              { error: resJson.error },
                              console.log(this.state.error)
                          )
                      )
        );
    }

    testMethod() {
        let logBody = { ...this.state.logBody };
        if (this.state.lang == 12) {
            logBody.hostname = " ";
            logBody.ddsource = " ";
            logBody.ddtags = " ";
            logBody.message = " ";
        } else {
            logBody.hostname = this.state.template[this.state.lang].hostname;
            logBody.ddsource = this.state.template[this.state.lang].ddsource;
            logBody.ddtags = this.state.template[this.state.lang].ddtags;
            logBody.message = this.state.template[this.state.lang].message;
        }

        this.setState({ logBody });
    }

    saveFormat(e) {
        const name = this.state.logName;
        const data = this.state.logBody;

        if (!name) {
            console.log("please enter a name");
            // need to fix not null in case of duplicate name
        } else if (localStorage.getItem(name) == !null) {
            console.log("this name is already in use");
        } else {
            localStorage.setItem(name, JSON.stringify(data));
            this.handleCloseModal();
            this.setState({ logName: "" });
        }
    }

    removeLog() {
        localStorage.removeItem(this.state.logName);
        this.setState({
            logName: "",
            logBody: {
                ddsource: "",
                ddtags: "",
                hostname: "",
                message: "",
            },
            showDeleteModal: false,
            selectValue: { label: "Saved Logs" },
        });
    }

    render() {
        let loading = this.state.loading;
        let optionTest = Object.keys(localStorage).map((key) => {
            let container = {};
            container.label = key;
            container.value = key;

            return container;
        });

        if (this.state.template.length <= 0) {
            return (
                <div>
                    <p className='loading-screen'>loading</p>
                </div>
            );
        } else {
            return (
                <div className='landing-container'>
                    <div className='currentAPI'>
                        <p className='currentAPItext'>
                            api in use: {this.context.api.substr(28)}
                        </p>
                    </div>
                    <div className='title'>
                        <h1>
                            <i className='fas fa-shipping-fast'></i> Send Some
                            Logs
                        </h1>
                        {this.state.allGood === false ? (
                            <p>Ready When You Are</p>
                        ) : (
                            <p>Logs Sent!</p>
                        )}
                    </div>
                    <div className='log-selector'>
                        <Select
                            onChange={(option) => {
                                this.setState(
                                    { lang: option.value, allGood: false },
                                    () => this.testMethod()
                                );
                            }}
                            defaultValue={{ label: "Custom Log?" }}
                            options={[
                                { label: "Custom", value: 12 },
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
                                { label: "zookeeper", value: 11 },
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
                                this.setState({
                                    logBody: JSON.parse(
                                        localStorage.getItem(option.value)
                                    ),
                                    logName: option.label,
                                    selectValue: { label: option.label },
                                });
                            }}
                            value={this.state.selectValue}
                            options={optionTest}
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
                                    backgroundColor: "#3C00B2",
                                    borderRadius: "10px",
                                }),
                            }}
                        />
                    </div>
                    <form className='api'>
                        <label className='source-input-label' htmlFor='source'>
                            Log Source <i className='fas fa-map-pin'></i>
                        </label>
                        <input
                            value={this.state.logBody.ddsource}
                            className='source-input'
                            required
                            placeholder='testsource'
                            type='text'
                            name='source'
                            id='source'
                            onChange={(e) => {
                                let logBody = { ...this.state.logBody };
                                logBody.ddsource = e.target.value;
                                this.setState({ logBody });
                            }}
                        ></input>
                        <label className='tag-input-label' htmlFor='tag'>
                            Log Tag <i className='fas fa-tag'></i>
                        </label>
                        <input
                            value={this.state.logBody.ddtags}
                            className='tag-input'
                            required
                            placeholder='key:value'
                            type='text'
                            name='tag'
                            id='tag'
                            onChange={(e) => {
                                let logBody = { ...this.state.logBody };
                                logBody.ddtags = e.target.value;
                                this.setState({ logBody });
                            }}
                        ></input>
                        <label
                            className='hostname-input-label'
                            htmlFor='hostname'
                        >
                            Log Hostname{" "}
                            <i className='fas fa-file-signature'></i>
                        </label>
                        <input
                            value={this.state.logBody.hostname}
                            className='hostname-input'
                            required
                            placeholder='i-012345678'
                            type='text'
                            name='hostname'
                            id='hostname'
                            onChange={(e) => {
                                let logBody = { ...this.state.logBody };
                                logBody.hostname = e.target.value;
                                this.setState({ logBody });
                            }}
                        ></input>
                        <label
                            className='message-input-label'
                            htmlFor='message'
                        >
                            Log Message{" "}
                            <i className='fas fa-envelope-open-text'></i>
                        </label>
                        <textarea
                            value={this.state.logBody.message}
                            className='message-input'
                            required
                            placeholder='2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World'
                            type='text'
                            name='message'
                            id='message'
                            onChange={(e) => {
                                let logBody = { ...this.state.logBody };
                                logBody.message = e.target.value;
                                this.setState({ logBody });
                            }}
                        ></textarea>
                    </form>
                    <ReactModal
                        className='save-modal'
                        isOpen={this.state.showModal}
                    >
                        <form className='api'>
                            <label
                                className='log-name-input-label'
                                htmlFor='savelogname'
                            >
                                Save As... <i className='fa fa-save'></i>
                            </label>
                            <input
                                className='name-input'
                                required
                                placeholder='log name'
                                type='text'
                                name='savelogname'
                                id='savelogname'
                                onChange={(e) =>
                                    this.setState({ logName: e.target.value })
                                }
                            ></input>
                        </form>
                        <div className='save-button-cluster'>
                            <button onClick={this.handleCloseModal}>
                                Cancel
                            </button>
                            <button onClick={this.saveFormat} type='button'>
                                {this.state.saved === false ? "Save" : "Saved!"}
                            </button>
                        </div>
                    </ReactModal>
                    <ReactModal
                        className='save-modal'
                        isOpen={this.state.showDeleteModal}
                    >
                        <p>Are you sure you want to delete?</p>
                        <div className='save-button-cluster'>
                            <button onClick={this.handleCloseDeleteModal}>
                                Cancel
                            </button>
                            <button onClick={this.removeLog} type='button'>
                                Delete
                            </button>
                        </div>
                    </ReactModal>
                    <div className='button-cluster'>
                        <button onClick={this.handleLogSend} disabled={loading}>
                            {loading ? (
                                <i className='fa fa-cog fa-spin'></i>
                            ) : (
                                "send log"
                            )}
                        </button>
                        <button onClick={this.handleOpenModal}>
                            save format
                        </button>
                        <button onClick={this.handleOpenDeleteModal}>
                            delete log
                        </button>
                        <Link style={{ textDecoration: "none" }} to='/'>
                            <button>home</button>
                        </Link>
                    </div>
                </div>
            );
        }
    }
}
