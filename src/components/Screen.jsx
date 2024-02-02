const Screen = (props) => {
  return (
    <>
      <h1
        className="bg-royal-blue-100 lg:w-96 w-72 lg:min-h-[6rem] min-h-[4rem]
      rounded-xl shadow-[0_0_15px_purple]
      font-bold text-3xl
      flex items-center px-5
      overflow-auto"
      >
        {props.input}
      </h1>
    </>
  );
};

export default Screen;
