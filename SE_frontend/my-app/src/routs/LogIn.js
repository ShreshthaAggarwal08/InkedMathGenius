import React from "react";

export default function LogIn() {
  return (
    <section>
      <h2>LogIn</h2>
      <form>
        <label htmlFor="userName">User name</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </section>
  );
}