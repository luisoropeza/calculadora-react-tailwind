const Button = (props) => {
  const operador = () => {
    if (
      props.valor == "+" ||
      props.valor == "-" ||
      props.valor == "/" ||
      props.valor == "*" ||
      props.valor == "=" ||
      props.valor == "."
    ) {
      return true;
    }
  };
  return (
    <>
      <h1
        className={`lg:w-20 w-16 lg:h-20 h-16 bg-gradient-to-t ${
          operador()
            ? "to-royal-blue-700 from-royal-blue-600"
            : "to-royal-blue-500 from-royal-blue-400"
        }
      border-2 border-royal-blue-100 rounded-xl shadow-[0_0_10px_purple]
      font-bold text-3xl text-white
      flex justify-center items-center lg:m-2 m-1
      cursor-pointer`}
        onClick={() => props.manejarClick(props.valor)}
      >
        {props.valor}
      </h1>
    </>
  );
};

export default Button;
