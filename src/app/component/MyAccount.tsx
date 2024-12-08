export default function AuthPage() {
    return (
      <div className="min-h-screen flex items-center justify-center  px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl  p-8 rounded-lg">
          {/* Login Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Log In</h2>
            <form className="space-y-6">
              {/* Username/Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username or email address
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
  
              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
  
              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>
  
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                >
                  Log In
                </button>
              </div>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              <a href="#" className="text-blue-600 hover:underline">
                Lost Your Password?
              </a>
            </p>
          </div>
  
          {/* Register Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <form className="space-y-6">
              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
  
              {/* Privacy Notice */}
              <p className="text-sm text-gray-600">
                A link to set a new password will be sent to your email address.
                <br />
                <br />
                Your personal data will be used to support your experience throughout this
                website, to manage access to your account, and for other purposes described
                in our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  privacy policy
                </a>
                .
              </p>
  
              {/* Register Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>



        
      </div>
    );
  }
  