import React from 'react'

class RainbowFrame extends React.Component {
    render() {
        let {colors, children} = this.props;

        colors.map((el, i) => (
            children = <div
                key={i} 
                style = {{
                    border: "8px solid " + el,
                    margin: "10px",
                    textAlign: "center"
                }}
            >
            {
                children
            }
            </div>
        ));
        return children;
    }
}

export default RainbowFrame;