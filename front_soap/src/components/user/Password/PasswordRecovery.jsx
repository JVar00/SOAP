import RecoveryForm from "./RecoveryForm";

function PasswordRecovery() {
  return (
    <div className="w-full max-w-screen xl:max-w-5xl lg:ml-60 xl:ml-72">
      <div className="flex flex-col xl:justify-start">
        <h2 className="font-bold ml-5 lg:ml-5 text-lg lg:mb-0">
          Cambiar su contraseña
        </h2>
      </div>
      <div className="lg:w-3/4 xl:w-full">
        <RecoveryForm />
      </div>
    </div>
  );
}

export default PasswordRecovery;
