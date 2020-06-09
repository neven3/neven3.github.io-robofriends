import React from 'react';

const Searchbox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input 
                type="search" 
                placeholder="Find your robot"
                className="pa3 ba b--green bg-lightest-blue"
                onChange={searchChange}
            />
        </div>
    );
};

export default Searchbox;