import React from "react";

export default function SignUp() {
  return (
    <section>
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="userName">Email</label>
        <input type="email" />
        <label htmlFor="userName">User name</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <label htmlFor="password">Repeat Password</label>
        <input type="password" />
        <button className="btn" type="submit">
          Sign Up
        </button>
      </form>
    </section>
  );
}
