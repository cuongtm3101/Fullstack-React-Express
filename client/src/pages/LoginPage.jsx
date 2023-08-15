import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { showMessage } from "../helpers";

function LoginPage() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let baseURL = "http://localhost:3000/api/v1";

  const handleLogin = async (e) => {
    e.preventDefault();
    let user = {
      email,
      password,
    };
    try {
      let res = await fetch(`${baseURL}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      let data = await res.json();
      console.log(data);
      // Hiển thị message đăng nhập thành công
      if (data.status === "fail") {
        showMessage("error", data.message);
      } else {
        showMessage("success", data.message).then(() => {
          localStorage.setItem("token", data.access_token);
          navigate("/dashboard");
        });
      }
    } catch (error) {
      showMessage("error", error.message);
    }
  };

  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="row" style={{ height: "100%" }}>
        <div
          className="col-8"
          style={{
            background: `url(
          https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?cs=srgb&dl=pexels-expect-best-323705.jpg&fm=jpg
        )`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>
        <div className="col-4">
          <form
            onSubmit={handleLogin}
            style={{ paddingTop: "50px", paddingLeft: "50px" }}
          >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <div className="form-text">
                Don't have an account <Link to="/register">Sign up here</Link>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
