import { useState } from 'react';

function Home() {
    const [counter, setCounter] = useState(0);

    return(
        <div>
            <h1>Home</h1>
            <p>Contador: {counter}</p>
            <button onClick={() => setCounter(counter => counter + 1)}>Adicionar</button>
        </div>
    );
}

export default Home;