import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state={

        }
    }

    render() {
        return (
            <div>
                <footer className="footer">  
                    <span className="text-muted">@Copyright Team 2 Member (SOA)</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;