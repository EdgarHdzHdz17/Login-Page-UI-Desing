import User from "../assets/img/User.png";

function ProfileComponent() {
  return (
    <>
      <div className="relative bg-violet-300 flex lg:w-1/2 lg:h-1/2 rounded-md p-5 text-center">
        <img className="w-full h-full object-cover " src={User} alt="User" />
      </div>
    </>
  );
}

export default ProfileComponent;
