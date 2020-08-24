import React from 'react';

function Hello({color, name, isSpecial }) {
return (
        <div style={{
            color
        }}>
            {isSpecial && <b>*</b>}

            안녕하세요 {name}
        </div> //jsx 라고 부릅니다. html 은 아님
    );
}

Hello.defaultProps = {
    name: '이름없음'
}
export default Hello; //Hello컴포넌트를 내보내주겠다.