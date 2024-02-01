function Pessoa(props) {
  const { nome, idade, corDoOlho } = props;

  const frutas = ["banana", "maçã", "uva", "pera"];
  const [frutaFavorita, segundaFavorita, ...outrasFrutas] = frutas;

  const estilo = {
    color: "red",
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: "black",
    padding: "10px",
    marginTop: "50px",
    borderRadius: "10px",
    display: "column",
  };

  return (
    <div style={estilo}>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Cor do olho: {corDoOlho}</p>
      <p>Fruta favorita: {frutaFavorita}</p>
      <p>Segunda fruta favorita: {segundaFavorita}</p>
      <p>Outras frutas: {outrasFrutas.toString()}</p>
    </div>
  );
}

function Button(props) {
  return <button>{props.children}</button>;
}

function App() {
  return (
    <>
      <div>Hello World!</div>
      <Button children="banana" />
      <Button children="banana" />
      <Button titulo="prata" />
      <Button titulo="prata" />
      <Pessoa nome="Fulano" idade={20} corDoOlho="azul" />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
// App();
