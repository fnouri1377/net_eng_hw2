import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default class ListElement extends React.Component {
    render() {

        return (
            <div className="listElem" onClick={() => this.props.getForm(this.props.form.id)}>
                <Link to={`/api/forms/${this.props.form.id}`}>{this.props.form.title}</Link>
            </div>
        )
    }
}