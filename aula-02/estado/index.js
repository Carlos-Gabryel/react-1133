const rootDiv = document.getElementById("root");
const rootElement = ReactDOM.createRoot(rootDiv);
rootElement.render(<App />);

function Button({ children = "Clique Aqui!", ...props }) {
  const { valorInicial } = props;

  const [contador, setContador] = React.useState(valorInicial);

  // function handleClick() {
  //   valorInicial = valorInicial + 1;
  //   console.log(valorInicial);
  // }

  return (
    <button onClick={() => setContador(contador + 1)}>
      {children}
      {contador >= 0 ? `(${contador})` : null}
    </button>
  );
}

function App() {
  return (
    <>
      <h1>Olá, mundo!</h1>
      <p>Esse é o meu primeiro componente com React.</p>
      <Button valorInicial={0} />
      <Button valorInicial={10} />
      <Button valorInicial={-10} />
      <Button valorInicial={undefined} />
    </>
  );
}
