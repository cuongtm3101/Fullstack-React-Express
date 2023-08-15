import { useEffect, useState } from "react";
import Canvas from "../components/Canvas";
import Swal from "sweetalert2";
function DashboardPage() {
  let [architects, setArchitects] = useState([]);
  let [currentView, setCurrentView] = useState({});
  let token = localStorage.getItem("token");

  let baseURL = "http://localhost:3000/api/v1";
  useEffect(() => {
    fetch(baseURL + "/users", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArchitects((prev) => [...prev, ...data.users]);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(baseURL + `/users/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            return Swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          })
          .then(() => {
            setArchitects((prev) => {
              let architectsClone = [...prev];
              let findIndex = architectsClone.findIndex((e) => e.id === id);
              architectsClone.splice(findIndex, 1);
              return [...architectsClone];
            });
          })
          .catch((err) => console.log(err));
      }
    });
  };

  const handleView = (e) => {
    setCurrentView(e);
  };

  // const handleUpdate = (e, currentView) => {
  //   e.preventDefault();
  //   console.log(currentView);
  //   let updateUser = {
  //     name: e.target.name.value,
  //     birthday: e.target.birthday.value,
  //     sex: e.target.sex.value,
  //     address: e.target.address.value,
  //     place: e.target.place.value,
  //   };
  //   console.log(updateUser);
  //   // fetch(baseURL + "/users/" + currentView.id, {});
  // };

  return (
    <div>
      <div className="container">
        <div className="row mb-3">
          <h1>Architect dashboard</h1>
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Birthday</th>
                <th scope="col">Gender</th>
                <th scope="col">Place</th>
                <th scope="col">Address</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {architects.map((e, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.birthday}</td>
                  <td>{e.sex === 0 ? "Female" : "Male"}</td>
                  <td>{e.place}</td>
                  <td>{e.address}</td>
                  <td>{e.email}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#staticBackdrop"
                      aria-controls="staticBackdrop"
                      onClick={() => handleView(e)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(e.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Canvas
        currentView={currentView}
        // handleUpdate={(e) => handleUpdate(e, currentView)}
      />
    </div>
  );
}

export default DashboardPage;
