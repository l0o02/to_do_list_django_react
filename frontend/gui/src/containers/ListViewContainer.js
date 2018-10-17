import React from 'react';
import axios from 'axios';

import ListView from '../components/ListView';

class ListViewContainer extends React.Component {

    state = {
        list: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    list: res.data
                });
                console.log(this.state.list)
            })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ListViewContainer;