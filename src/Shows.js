import React from "react";
import "./Shows.css";

const showsData = [
  { date: "March 15, 2024", city: "Minneapolis, MN", venue: "First Avenue" },
  { date: "March 20, 2024", city: "Chicago, IL", venue: "House of Blues" },
  { date: "March 25, 2024", city: "Denver, CO", venue: "Summit Music Hall" },
  { date: "March 30, 2024", city: "Los Angeles, CA", venue: "The Roxy" },
];

function Shows() {
  return (
    <div className="shows-container">
      <h2>Upcoming Shows</h2>
      <p>Check back for more dates soon!</p>

      <div className="shows-list">
        {showsData.length > 0 ? (
          showsData.map((show, index) => (
            <div key={index} className="show-item">
              <p className="show-date">{show.date}</p>
              <p className="show-location">{show.city} - {show.venue}</p>
            </div>
          ))
        ) : (
          <p className="no-shows">No shows announced yet. Stay tuned!</p>
        )}
      </div>
    </div>
  );
}

export default Shows;
