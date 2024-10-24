import React, {Component} from "react";

class Footer extends Component {
    year = () => {
        let d = new Date();
        return d.getFullYear();
    }

    render() {
        return (
            <footer className="clearfix mt-4">
                <p>
                    &copy; {this.year()}
                    <a
                    href="https://github.com/imdevesh21"
                    rel="devesh sharma"
                    target="_blank"
                >
                    Devesh
                </a>
                , Just an Unfinish Business
                </p>
            </footer>
        );
    }
}

export default Footer;