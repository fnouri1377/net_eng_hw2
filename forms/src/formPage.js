import React from 'react'
import './index.css';


export default class FormPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            values: {}
        }
    }

    handleChange = (key, e) => {
        const { values } = this.state;
        this.setState({
            values: { ...values, [key]: e.target.value }
        })
    }

    putData = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    submit = async () => {
        const { values } = this.state;
        try {
            const data = await this.putData(`http://localhost:4000/api/forms/send`, values);
            console.log("send to server => ", JSON.stringify(data));
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { form } = this.props.form || null;
        return (
            <div>
                <form className="formContainer">
                    <p className="formTitle">{form.title}</p>
                    <br />
                    {!!form && form.fields.map((item, i) => {
                        return (<div>
                            <p>{item.title}</p>
                            {item.type === 'Text' && !item.options ? (<input type='text' required={item.required} value={this.state.values[item.name]} onChange={(e) => this.handleChange(item.name, e)}></input>) : null}
                            {item.type === 'Date' && !item.options ? (<input type='date' required={item.required} value={this.state.values[item.name]} onChange={(e) => this.handleChange(item.name, e)}></input>) : null}
                            {item.type === 'Number' && !item.options ? (<input type='number' required={item.required} value={this.state.values[item.name]} onChange={(e) => this.handleChange(item.name, e)}></input>) : null}
                            {item.options ? (<select name={item.name}>
                                {item.options.map((option) => {
                                    return (<option value={option.value}>{option.label}</option>)
                                })}
                            </select>) : null}
                        </div>
                        )
                    })}
                    <br /><br />
                    <button type="submit" className="submitButton" onClick={this.submit}>send</button>
                    <br />
                </form>
            </div>
        )
    }
}