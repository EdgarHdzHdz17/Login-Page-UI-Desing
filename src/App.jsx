import ProfileComponent from "./components/Profile";
import LoginComponent from "./components/Login";

function App() {
  return (
    <>
      <div className="lg:h-screen lg:min-w-screen md:min-h-10 md:min-w-10 flex lg:flex-row md:flex-col sm:flex-col sm:items-center sm:flex-wrap">
        <div className="lg:w-1/2 flex justify-center items-center">
          <LoginComponent></LoginComponent>
        </div>

        <div className="lg:w-1/2 flex lg:h-screen bg-violet-500 justify-center items-center sm:w-80 sm:h-80 sm:mt-5 lg:mt-0 rounded-lg sm:mb-5">
          <ProfileComponent></ProfileComponent>
        </div>
      </div>
    </>
  );
}

export default App;
