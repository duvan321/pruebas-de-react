import { useState } from "react";

import "../style/Inicio.css";
function Inicio() {
  const [error] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
  };
  return (
    <div className="container text-center mt-5">
      <div className="titulos">My tests with input</div>
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn btn-secondary "
          disabled={!username || !password}
          onClick={handleClick}
        >
          {loading ? "please wait" : "Login"}
        </button>
        <label className="">
          <span
            className="input-group-text"
            id="inputGroup-sizing-sm"
            data-testid="error"
            style={{ visibility: error ? "visible" : "hidden" }}
          >
            Something went wrong!
          </span>
        </label>
      </form>
    </div>
  );
}

export default Inicio;
