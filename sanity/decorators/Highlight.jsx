import React from 'react'

export const HighlightIcon = () => <span>H</span>

export const HighlightRender = ({children}) => {
    return (
        <span style={{
            backgroundColor: 'yellow'
        }}>
            {children}
        </span>
    )
} 