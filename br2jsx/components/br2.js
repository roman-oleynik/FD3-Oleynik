import React from 'react'

class Parser extends React.Component {
    render() {
        const text = this.props.text;
        return <pre className='Display'>
            {text.replace(/<br ?\/?>/gi, "\n")}
        </pre>
    }
}

export default Parser;