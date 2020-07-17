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
                    <h1>dummydog</h1>
                    <p>info sent the right way</p>
                </header>
                <Select onChange={(option) => this.props.history.push(option.value)} 
                    defaultValue={{label: "Create New"}}
                    options={[
                        { label: "Logs", value: "logs" },
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
                />
            </div>
        )
    }
})