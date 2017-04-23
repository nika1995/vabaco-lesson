import React from 'react';
import { render } from 'react-dom';

class CustomTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            names: [{
                firstname: 'Zviad',
                lastname: 'Makharashvili'
            }, {
                firstname: 'Jonah',
                lastname: 'Geladze'
            },{
                firstname: 'joni',
                lastname: 'jondo'
            }]
        };
    }

    addName() {
        this.setState({
            names: this.state.names.concat({
                firstname: 'Ilia',
                lastname: 'Gochitashvili'
            })
        });
    }

    deleteName(name){
        this.setState({
            names: this.state.names.filter(function(tempname){
                return tempname !== name;
            })
        }); 
    }

    render() {
        let rows = this.state.names.map((name, index) => {
            return (
                <tr key={index}>
                    <td>{name.firstname}</td>
                    <td><button onClick={this.deleteName.bind(this,name)}>წაშლა</button></td>
                </tr>
            );
        });

        return (
            <div>
                <table>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <button onClick={this.addName.bind(this)}>დამატება</button>
            </div>
        );
    }
}

render(<CustomTable />, document.getElementById('app'));