import { useState } from 'react';
import Link from 'next/link';

function Home() {
    const [counter, setCounter] = useState(0);

    return(
        <div>
            <h1>Home</h1>
            <p>Contador: {counter}</p>
            <button onClick={() => setCounter(counter => counter + 1)}>Adicionar</button>
            <Link href="/sobre">Sobre</Link>
        </div>
    );
}

export default Home;