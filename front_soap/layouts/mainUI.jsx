const Main = (props) => {
  return (
    <div className="w-full max-w-screen xl:max-w-5xl lg:ml-60 xl:ml-72">
      <div className="flex flex-col md:ml-5 ">
        <h2 className="mb-5 font-bold text-5xl md:text-7xl lg:mb-0">Menu</h2>
        <h2 className="mb-5 font-bold text-5xl md:text-7xl lg:mb-0 text-red-600">
          {props.name}
        </h2>
      </div>
    </div>
  );
};

export default Main;
