import React, {useEffect} from 'react'

export default function Sprite({image, data}) {
    const {y, x, h, w} = data

    return (
        <div
            style={{
                display: 'inline-block',
                height: `${h}px`,
                width: `${w}px`,
                backgroundColor: 'white',
                backgroundImage: `url(` + image + `)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `-${x}px -${y}px`,
                borderRadius: '20px',
                marginRight: '10px',
                marginLeft: '10px',
                boxShadow: 'inset -2px -1px 30px #808080',
            }}
        />
    )
}
