import React from "react";
import Header from "./header";
function Home() {
    let user = JSON.parse(localStorage.getItem("user-info"));
  return (
    <div>
      <Header />
      <h1>welcome {user.name}</h1>
    </div>
  );
}
export default Home;
