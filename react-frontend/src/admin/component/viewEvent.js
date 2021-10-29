import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
const ViewEvent = () => {
    //const view_event_url = "http://localhost:3004/getevents";
    const [viewEvent, setViewEvent] = useState({
        eventId: "",
        eventName: "",
        description: "",
        eventStartTime: "",
        eventEndTime: "",
        location:""
      });
      const { id } = useParams();
      useEffect(() => {
        loadEvent();
      }, []);
      const loadEvent = async () => {
        const res = await axios.get(`http://localhost:3004/getevents/${id}`);
        setViewEvent(res.data);
      };
      return (
        <div className="container py-4">
          <Link className="btn btn-primary" to="/admin">
            back to Home
          </Link>
          <h1 className="display-4">Event Id: {id}</h1>
          <hr />
          <ul className="list-group w-50">
            <li className="list-group-item">Event id : {viewEvent.eventId}</li>
            <li className="list-group-item">Event Name: {viewEvent.eventName}</li>
            <li className="list-group-item">Description: {viewEvent.description}</li>
            <li className="list-group-item">Location: {viewEvent.location}</li>
            <li className="list-group-item">Start Date: {viewEvent.eventStartTime}</li>
            <li className="list-group-item">End Date: {viewEvent.eventEndTime}</li>
          </ul>
        </div>
      );
}

export default ViewEvent;
