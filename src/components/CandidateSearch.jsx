import React from 'react'
import './candidateSearch.css'

const CandidateSearch = () => {
  return (
    <div className='candidate-main'>
      <h1 className='header'>Candidate <span className='color-primary'> Search</span></h1>

      <div className="searchbar">
        <input type="text" className='search-input' placeholder="Search.." name="search" />
        <select className='selector' name="location" id="location">
            <option value="location" >Location</option>
            <option value="location">Location</option>
            <option value="location">Location</option>
            <option value="location">Location</option>

        </select>

        <select className='selector' name="job-role" id="job-role">
            <option value="sde">SDE</option>
            <option value="sde">SDE</option>
            <option value="sde">SDE</option>
            <option value="sde">SDE</option>
            <option value="sde">SDE</option>
            <option value="sde">SDE</option>
        </select>
        <button>Search</button>
      </div>

        <div className="candidate-list">
            <table>
                <thead>

                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Job Role</th>
                    <th>Experience</th>
                    <th>Skills</th>
                    <th>Resume</th>
                </tr>
                </thead>
                <tr>
                    <td>John</td>
                    <td>Bangalore</td>
                    <td>SDE</td>
                    <td>2</td>
                    <td>React, Node</td>
                    <td><button className='download-btn'>Download</button></td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>Bangalore</td>
                    <td>SDE</td>
                    <td>2</td>
                    <td>React, Node</td>
                    <td><button className='download-btn'>Download</button></td>
                </tr>

            </table>
            </div>
    </div>
  )
}

export default CandidateSearch
