import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [value, setValue] = useState(0);

    const increment = () => { setValue((value) => value + 1) };
    const decrement = () => { setValue((value) => value - 1) };

    return (
        <>
            <p className={classes.text}>{value}</p>
            <button className={classes.button} onClick={increment}>Increment</button>
            <button className={classes.button} onClick={decrement}>Decrement</button>
        </>
    );
};
