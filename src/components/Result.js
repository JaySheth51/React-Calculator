import React, { Component } from 'react';

class Result extends Component {


    render() {
        let { result, previousInput } = this.props;
        return (
            <div className="result container-fluid">
                <input
                    className="col-sm-12"
                    type="text"
                    name="display"
                    value={previousInput}
                    readOnly
                />
                <input
                    className="col-sm-12"
                    type="text"
                    name="result"
                    value={result}
                    readOnly
                />

            </div>
        )
            ;
    }
}


export default Result;