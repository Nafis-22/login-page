function App() {
  return (
    <>
      <form className="container py-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{ width: "500px" }}
            required
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            style={{ width: "500px" }}
            required
          />
        </div>
        <br />

        <button type="submit" class="btn btn-primary ">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
