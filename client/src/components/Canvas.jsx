import { useState, useEffect } from "react";
function Canvas({ currentView, handleUpdate }) {
  // let [value, setValue] = useState({
  //   id: "",
  //   name: "",
  //   birthday: "",
  //   sex: "",
  //   place: "",
  //   address: "",
  //   email: "",
  //   password: "",
  // });

  // useEffect(() => {
  //   setValue((prev) => {
  //     console.log(currentView);
  //     console.log({ ...prev, ...currentView });
  //     return { ...prev, ...currentView };
  //   });
  // }, []);
  return (
    <div
      class="offcanvas offcanvas-start"
      data-bs-backdrop="static"
      tabindex="-1"
      id="staticBackdrop"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="staticBackdropLabel">
          Offcanvas
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={currentView.email}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={currentView.name}
                name="name"
                onChange={(e) =>
                  setValue((prev) => {
                    return { ...prev, name: e.target.value };
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputBirthday" className="form-label">
                Birthday
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputBirthday"
                value={currentView.birthday}
                name="birthday"
                onChange={(e) =>
                  setValue((prev) => {
                    return { ...prev, birthday: e.target.value };
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputGender" className="form-label">
                Gender
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputGender"
                value={currentView.sex === 1 ? "Male" : "Female"}
                name="sex"
                onChange={(e) =>
                  setValue((prev) => {
                    console.log(prev);
                    console.log(e.target.value);
                    return { ...prev, sex: e.target.value };
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPlace" className="form-label">
                Place
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPlace"
                value={currentView.place}
                name="place"
                onChange={(e) =>
                  setValue((prev) => {
                    return { ...prev, place: e.target.value };
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputAddress"
                value={currentView.address}
                name="address"
                onChange={(e) =>
                  setValue((prev) => {
                    return { ...prev, address: e.target.value };
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword"
                value={currentView.password}
                disabled
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Canvas;
