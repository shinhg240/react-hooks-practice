import React from "react";

function Hello({ color, name, isSpecial }) {
    return (
        <div
            style={{
                color: color
            }}
        >
            {/* {isSpecial && <b>*</b>} */}
            {isSpecial ? "스페셜하다" : "스페셜하지않다."}
            안녕하세요 {name}
        </div>
    )
}

Hello.defaultProps = {
    name: '기본값'
}

export default Hello;