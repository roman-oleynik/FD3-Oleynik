import React from 'react'

class Parser extends React.Component {
    render() {
        const text = this.props.text;
        const textSplitted = text.split(/<br ?\/?>/gi);
        let arr = [];

        for (let i in textSplitted) {
            arr.push(textSplitted[i])
            if (i < textSplitted.length-1) arr.push(<br key={i}/>);            
        }
        
        return <div className='Display'>{arr}</div>
    }
}

export default Parser;