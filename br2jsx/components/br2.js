import React from 'react'

class Parser extends React.Component {
    render() {
        const text = this.props.text;
        const textSplitted = text.split(/<br ?\/?>/gi);
        let arr = [];

        for (let i in textSplitted) {
            arr.push(textSplitted[i]).push(<br/>)            
        }
        
        return <div className='Display'>{arr}</div>
    }
}

export default Parser;