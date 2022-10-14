import { useState } from 'react';
import './Composer.css';

function Composer() {
    const [body, setBody] = useState('')

    const arbitraryText = "Lorem ipsum"

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setBody(`${body} ${arbitraryText}`)
        } else {
            setBody(e.target.value)
        }
    }
  return (
    <div className="Composer">
        <h2>Composer</h2>
        <input className="composerBody" type="textarea" onKeyUp={handleKeyPress} onChange={(e) => setBody(e.target.value)} value={body}>
        </input>
    </div>
  );
}

export default Composer;
