export const PasswordError = () => {
  return (
    <p className="text-red-600 text-base italic">
      La contraseña no cumple con la seguridad suficiente. Asegurese que tenga
      almenos 8 caracteres, una mayuscula, un numero y un caracter especial.
    </p>
  );
};
