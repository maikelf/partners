
export const Clear = () => {
    const setMessage = () => {
        const ramdonNumber = Math.random();
        alert(`El numero aleatorio es: ${ramdonNumber}`);
    }

    return(
        <button onClick={setMessage}>Clear</button>
    )
}