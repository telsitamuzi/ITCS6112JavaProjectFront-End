import React from 'react';
import DemoService from './DemoService';

class DemoComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            employee:[]
        }
    }

    componentDidMount(){
        DemoService.getDemo().then((response) => {
            this.setState({ employee: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Employees List-main branch</h1>
                <table className = "table table-striped">
                    <thead>

                        <tr >
                            <td><strong>Employee Id</strong></td>
                            <td><strong>Email address</strong></td>
                            <td><strong>Password</strong> </td>
                            <td><strong>First name</strong></td>
                            <td><strong>Last name</strong></td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.employee.map(
                              employee => 
                                <tr key = {employee.employeeId}>
                                     <td> {employee.employeeId}</td>
                                     <td> {employee.emailAddress}</td>   
                                     <td> {employee.password}</td>   
                                     <td> {employee.firstName}</td>   
                                     <td> {employee.lastName}</td>   
                                </tr>
                            )
                        }
 
                    </tbody>
                </table>

            </div>

        )
    }
}

export default DemoComponent