import React from 'react';

const Addition = ({add}) => {
    const aElm = React.createRef();
    const bElm = React.createRef();
    const [ a, setA ] = useState(0);
    const [ b, setB ] = useState(0);
    return (
        <div style={{width: '320px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <input
                type="text"
                onChange={() => setA(aElm.current.value)} />
            <input
                type="text"
                onChange={() => setB(bElm.current.value)} />

            <button onClick={() => add(a, b)}>Add</button>
        </div>
    );
}

export default Addition;
