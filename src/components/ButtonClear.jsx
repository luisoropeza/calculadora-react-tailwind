const ButtonClear = (props) => {
  return (
    <>
      <h1
        className="lg:w-60 w-56 lg:h-20 h-16 bg-gradient-to-t to-red-800 from-red-700
      border-2 border-royal-blue-100 rounded-xl shadow-[0_0_10px_purple]
      font-bold text-3xl text-white
      flex justify-center items-center
      cursor-pointer"
        onClick={() => props.manejarClick()}
      >
        {props.valor}
      </h1>
    </>
  );
};

export default ButtonClear;
