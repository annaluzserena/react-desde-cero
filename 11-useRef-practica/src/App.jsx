import { useState, useRef, useEffect } from "react";

function App() {
  const textareaRef = useRef(null);
  const [texto, setTexto] = useState("");
  const [cursor, setCursor] = useState({fila: 1, columna: 1});
  const historialRef = useRef([]);

  const calcularFilaColumna = () => {
    const text = textareaRef.current.value;
    const indice = textareaRef.current.selectionStart;
    const textAntes = text.substring(0, indice);
    const lineas = textAntes.split('\n');

    setCursor({fila: lineas.length, columna: lineas[lineas.length - 1].length + 1});
  }

  const insertarNegrita = () => {
    const textarea = textareaRef.current;
    const inicio = textarea.selectionStart;
    const fin = textarea.selectionEnd;
    const seleccion = texto.substring(inicio, fin);

    const nuevoTexto = texto.substring(0, inicio) + `**${seleccion}**` + texto.substring(fin);

    historialRef.current = [...historialRef.current.slice(-9), texto];

    setTexto(nuevoTexto);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(inicio + 2, fin + 2);
    }, 0);
  }

  const palabras = texto.trim().split(/\s+/).filter(p => p.length > 0).length;

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  return (
    <>
      <textarea value={texto} onChange={(e) => {setTexto(e.target.value); calcularFilaColumna()}} name="texto" id="texto" ref={textareaRef} placeholder="Escribe texto aquí..."></textarea>
      <span>Fila: {cursor.fila} | Columna: {cursor.columna}</span>
      <span>Palabras: {palabras} | Caracteres: {texto.length}</span>
      <button onClick={() => {textareaRef.current.focus(); textareaRef.current.select()}}>Seleccionar</button>
      <button onClick={() => {textareaRef.current.focus(); insertarNegrita()}}>Insertar negrita</button>
      <button onClick={() => {textareaRef.current.focus(); setTexto("");}}>Limpiar</button>
    </>
  );
}

export default App;
