import React from 'react'

export const Tag = ({ tag_name, selectTag, selected }) => {
    const tagStyle = {
        HTML: { backgroundColor: "#fda821" },
        CSS: { backgroundColor: "#15d4c8" },
        JavaScript: { backgroundColor: "#ffd12c" },
        React: { backgroundColor: "#4cdafc" },
        default: { backgroundColor: "#f9f9f9" },
    }

    return (
        <button
            type='button'
            className="tag"
            style={selected ? tagStyle[tag_name] : tagStyle.default}
            onClick={() => selectTag(tag_name)}
        >
            {tag_name}
        </button>
    )
}
