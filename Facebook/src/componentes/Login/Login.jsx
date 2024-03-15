import "./Login.css";
export function Login() {
  return (
    <div className="page">
      <div className="container">
        <div className="textos">
          <h2>facebook</h2>
          <p>
            Facebook te ayuda a comunicarte y compartir con las personas que
            forman parte de tu vida
          </p>
        </div>
        <div>
          <div className="form">
            <input
              type="text"
              id="emailInput"
              placeholder="Correo electrónico o número de teléfono"
            />
            <input
              type="password"
              id="passwordInput"
              placeholder="Contraseña"
            />
            <button type="submit" className="entrar" id="loginButton">
              Iniciar sesión
            </button>
            <a href="#">¿Has olvidado la contraseña?</a>

            <hr />

            <button className="Nuevac">Crear cuenta nueva</button>
          </div>

          <div className="conte-ul">
            <p className="afuera">
              <span>Crear una página</span> para una persona pública, un grupo
              de música o un negocio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
