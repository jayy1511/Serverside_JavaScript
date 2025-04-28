function Profile() {
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (!user) {
      return <div className="text-center mt-10 text-white">No user data available.</div>;
    }
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      </div>
    );
  }
  
  export default Profile;
  