export const PasswordError = () => {
  return (
    <p className="text-red-600 text-base italic">
      La contraseña no cumple con la seguridad suficiente. Asegúrese que tenga
al menos 8 caracteres, una mayúscula, un número y un carácter especial.
    </p>
  );
};
