import React from 'react'
import './FirstPage.css'
import vid from '../videos/vif.mp4'

export default function FirstPage() {
    return (
        <>
        <video
        autoPlay
        loop
        muted style={{width: "100%", height: "100%" }}>
            <source src={vid} type="video/mp4" />
        </video>
                <div className="banner">
                    <p>LOREM IPSUM</p>
                </div>    
                hello    
        </>
    )
}
