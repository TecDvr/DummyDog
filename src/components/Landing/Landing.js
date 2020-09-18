import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DummydogContext from '../../context/dummydog-context';
import './Landing.css';

export default withRouter(class RealLanding extends React.Component {
    static contextType = DummydogContext;
    constructor(props) {
        super(props);
        this.state = {
            api: 'test'
        }
    }

    render() {
        return (
                <div className='landing-container'>
                    <header className='title'>
                        <h1 className='title-main'><i className="fas fa-dumpster-fire"></i> Dummydog</h1>
                        <p className='title-catch'>dummy info, sent the easy way</p>
                    </header>
                    <form className='landing-api-input'>
                        <label className="api-input-label" htmlFor="apikey">
                            Your API Key <i className="fas fa-key"></i>
                        </label>
                        <input
                            className="api-input"
                            required
                            placeholder="Your API Key"
                            type="text"
                            name="apikey"
                            id="apikey"
                            onChange={(e) => this.setState({ api: e.target.value }, 
                                () => this.context.updateAPI(this.state.api)
                            )}
                        ></input>
                    </form>
                    <div className='title-button-cluster'>
                        <div>
                            <Link
                                style={{ textDecoration: 'none' }}
                                to='/landing'><button>Logs</button>
                            </Link>
                            <Link
                                style={{ textDecoration: 'none' }}
                                to='/metric'><button>Metrics</button>
                            </Link>
                        </div>
                        <div>
                            <Link
                                style={{ textDecoration: 'none' }}
                                to='/event'><button>Events</button>
                            </Link>
                            <Link
                                style={{ textDecoration: 'none' }}
                                to='/trace'><button>Traces</button>
                            </Link> 
                        </div>
                    </div>
                </div>
         
        )
    }
})