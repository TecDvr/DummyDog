import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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