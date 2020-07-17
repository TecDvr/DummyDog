import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Select from 'react-select'

export default withRouter(class RealLanding extends React.Component {
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
                    <h1><i className="fas fa-dumpster-fire"></i> Dummydog</h1>
                    <p>info sent the right way</p>
                </header>
                <div className='title-button-cluster'>
                    <Link
                        style={{ textDecoration: 'none' }}
                        to='/landing'><button>Logs</button>
                    </Link>
                    <button>Metrics</button>
                    <button>Events</button>
                </div>
                {/* <Select onChange={(option) => this.props.history.push(option.value)} 
                    defaultValue={{label: "Create New"}}
                    options={[
                        { label: "Logs", value: "landing" },
                        { label: "Metrics", value: "metrics" },
                    ]}
                    styles={{ 
                        control: (provided) => ({ ...provided, backgroundColor: "#3C00B2"}),
                        singleValue: (provided) => ({...provided, color: "white"})
                    }}
                />
                <Select onChange={(option) => this.props.history.push(option.value)} 
                    defaultValue={{label: "Saved"}}
                    options={[
                    ]}
                    styles={{ 
                        control: (provided) => ({ ...provided, backgroundColor: "#0052B2"}),
                        singleValue: (provided) => ({...provided, color: "white"})
                    }}
                /> */}
            </div>
        )
    }
})