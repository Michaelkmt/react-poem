
import React from 'react';
import MyPoem from './MyPoem';
import {styleSheet} from '../styles';


export default function App() {
    let divStyle = {
        background: styleSheet.background,
        color: styleSheet.color
    }
    console.log(divStyle.background)
    return (
        <div style={divStyle}>
            <h1>Welcome to my Page!</h1>
            <MyPoem />
            <footer style={{color: 'red', fontSize: styleSheet.fontSize}}>Thank you visiting my Site!</footer>
        </div>
    )
}










