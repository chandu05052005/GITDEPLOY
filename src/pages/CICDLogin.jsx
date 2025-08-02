import React from 'react';

const CICDLogin = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login to CICD</h2>
      <form>
        <div>
          <label>Username:</label><br />
          <input type="text" placeholder="Enter username" />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label>Password:</label><br />
          <input type="password" placeholder="Enter password" />
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default CICDLogin;
