import React from 'react';
import ReactList from 'react-list';
import './index.css';
import ListElement from './listElement';


export default class DisplayForms extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            forms: [],
        }
    }

    getForms = () => {
        fetch(`http://localhost:4000/api/forms`, {
            // mode: "no-cors",
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        this.setState({ forms: json.forms })
                    });
                }
            })
    }

    renderFormsList() {
        this.state.forms.map((item, i) => {
            return (<p> {i} </p>)
        })
    }

    getForm = (i) => {
        fetch(`http://localhost:4000/api/forms/${i}`, {
            // mode: "no-cors",
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        this.props.setForm(i, json)
                    });
                }
            })
    }

    renderItem = (index, key) => {
        return <ListElement key={key}
            form={this.state.forms[index]}
            getForm={this.getForm}
        />
    }

    componentDidMount() {
        this.getForms();
    }

    render() {
        return (
            <div>
                <h1>Choose the form you want!</h1>
                <div style={{ overflow: 'auto', maxHeight: 400 }}>
                    <ReactList itemRenderer={this.renderItem} length={this.state.forms.length} type='uniform' />
                </div>
            </div>
        )
    }
}