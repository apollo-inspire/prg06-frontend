import React from 'react';

export function Song ({json}) {
    return (
        <div className="song">
            <h2>Title: { json.title } </h2>
            <h3>Artist: { json.author } </h3>
        </div>
    )
}