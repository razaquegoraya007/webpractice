import { useState } from 'react';

function ColorChanger() {
const [color, setColor] = useState('black');
const changeColor = () => {
    setColor(color === 'black' ? 'red' : 'black');
};

return (
    <div>
    <div style={{ color: color }}>Hello, world!</div>
    <button onClick={changeColor}>Change Color</button>
    </div>
);
}

export default ColorChanger;