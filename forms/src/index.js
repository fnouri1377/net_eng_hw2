import React from 'react';
import ReactDOM from 'react-dom';
import DisplayForms from './displayForms'
import FormPage from './formPage'
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentFormId: null,
            currentForm: null,
        }
    }

    setForm = (id, form) => {
        this.setState(
            {
                currentFormId: id,
                currentForm: form,
            }
        )
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/api/forms">
                        <DisplayForms setForm={this.setForm} />
                    </Route>
                    <Route path={`/api/forms/${this.state.currentFormId}`}>
                        <FormPage id={this.state.currentFormId} form={this.state.currentForm} />
                    </Route>
                </div>
            </Router>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
