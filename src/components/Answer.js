import React from 'react';

export function Answer(props) {
    return (
        <div style={{opacity: props.opacity, transition: 'opacity 1s'}}>
            {props.answers}
        </div>
    );
}

