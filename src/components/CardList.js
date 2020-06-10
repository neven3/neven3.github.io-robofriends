import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map(robot => {
        return (
            <Card 
                key={robot.id} 
                id={robot.id} 
                name={robot.name} 
                username={robot.username} 
                email={robot.email} 
                />);
            });
            
    return (
        <main>
            {cardComponent}
        </main>
    );
};

export default CardList;