import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const URL = "http://localhost:3000";

  const getItems = () => {
    axios({
      method: "GET",
      url: `${URL}/items`,
    })
      .then((items) => {
        setItems(items.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-12 bg-primary text-white">
          <h1>Inventory Applications</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="col-12">
            <h3>Input Item</h3>
            <hr />
          </div>
          <div className="col-12">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
                <div id="emailHelp" className="form-text">
                  Input item's name
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Type</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="text" className="form-control" />
                <div id="emailHelp" className="form-text">
                  Input item's price
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Stock</label>
                <input type="text" className="form-control" />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <h3>List Items</h3>
              <hr />
            </div>
            <div className="col-12">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length !== 0 ? (
                    items.map((item) => {
                      return (
                        <tr>
                          <td>{item.id}</td>
                          <td>
                            {item.name} - <i>{item.type}</i>
                          </td>
                          <td>Rp. {item.price}</td>
                          <td>{item.stock} pcs</td>
                        </tr>
                      );
                    })
                  ) : (
                    <p>There is no Items</p>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
