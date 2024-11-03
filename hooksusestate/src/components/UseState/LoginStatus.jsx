import React, { useState } from 'react';

const LoginStatus = () => {
  const [isLogin, setIsLogin] = useState(false); 

  const handleLogout = () => {
    setIsLogin(false); 
  };

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <div>
      <h4>Login Status</h4>
      {isLogin ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <p>Welcome To dashboard</p>
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Login</button>
          <p>Please login again</p>
        </div>
      )}
    </div>
  );
};

export default LoginStatus;
