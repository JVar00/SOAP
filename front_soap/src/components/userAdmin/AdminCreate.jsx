import { Form } from "./Forms/CreateForm";

const Create = () => {
  //Ui general para crear un usuario, llama al formulacion de creacion
  return (
    <div className="w-full max-w-screen xl:max-w-5xl lg:ml-60 xl:ml-72">
      <div className="flex flex-col xl:justify-start">
        <h2 className="font-bold ml-5 lg:ml-16 text-lg lg:mb-0">
          Agregar un empleado al sistema
        </h2>
        <h2 className="mb-5 flex flex-row ml-5 mt-2 lg:ml-16 text-sm lg:mb-0">
          <p className="text-red-600 mr-2">*</p> Campos obligatorios
        </h2>
      </div>
      <div className="lg:w-3/4 xl:w-full">
        <Form />
      </div>
    </div>
  );
};
export default Create;
