import React, {Component} from 'react';

class Keys extends Component {

    render() {
        return (
            <div className="container">
                <button className="col-sm-3" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button className="col-sm-3" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button className="col-sm-3" name="%" onClick={e => this.props.onClick(e.target.name)}>%</button>
                <button className="col-sm-3" name="/" onClick={e => this.props.onClick(e.target.name)}>/</button><br/>


                <button name="7" className="col-sm-3" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" className="col-sm-3" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" className="col-sm-3" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="*" className="col-sm-3" onClick={e => this.props.onClick(e.target.name)}>*</button><br/>


                <button name="4" className="col-sm-3" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" className="col-sm-3" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" className="col-sm-3" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" className="col-sm-3" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button name="1" className="col-sm-3" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" className="col-sm-3" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" className="col-sm-3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" className="col-sm-3" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button name="." className="col-sm-3" onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="0" className="col-sm-3" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="=" className="col-sm-6" onClick={e => this.props.onClick(e.target.name)}>=</button>
            </div>
        );
    }
}


export default Keys;