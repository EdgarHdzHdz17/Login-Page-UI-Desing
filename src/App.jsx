import ProfileComponent from "./components/Profile";
import LoginComponent from "./components/Login";

function App() {
  return (
    <>
      <div className="md:h-screen md:w-screen flex md:flex-row sm:flex-col sm:w-screen">
        <div className="w-1/2 flex-1 flex justify-center items-center ">
          <LoginComponent></LoginComponent>
        </div>

        <div className="w-1/2 flex-1 flex h-screen bg-violet-500 justify-center items-center flex-col ">
          <ProfileComponent></ProfileComponent>
        </div>
      </div>
    </>
  );
}

export default App;
