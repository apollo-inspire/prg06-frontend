import React from 'react';

export function Song ({json}) {
    return (
        <div className="song">
            <h2>Title: { json.title } </h2>
            <h3>inRepertoireSince: { json.body } </h3>
        </div>
    )
}