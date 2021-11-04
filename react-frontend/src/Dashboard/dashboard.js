import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import Navbar from '../nav/navbar';

const Dashboard = () => {
    
    return (
      <>
      <Navbar/>
        <div className="container">
                <table class="table border">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Event ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Location</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
                </div>
      </>
    );
}
export default Dashboard;