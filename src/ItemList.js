import React from 'react';

function ItemList() {
    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

    return (
        <div>
            <h2>Fruits List:</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li> // Use index as a temporary key
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
