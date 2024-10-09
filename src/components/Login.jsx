import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [nameValue, setNameValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleNameChange = (e) => setNameValue(e.target.value);
  const handleUsernameChange = (e) => setUsernameValue(e.target.value);
  const handleEmailChange = (e) => setEmailValue(e.target.value);
  const handlePasswordChange = (e) => setPasswordValue(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPasswordValue(e.target.value);

  const validateForm = () => {
    const newErrors = {};
    
    // Name Validation
    if (!nameValue) {
      newErrors.name = 'Name is required.';
    }

    // Username Validation
    if (!usernameValue) {
      newErrors.username = 'Username is required.';
    }

    // Email Validation (simple regex check)
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailValue || !emailRegex.test(emailValue)) {
      newErrors.email = 'Enter a valid email.';
    }

    // Password Validation
    if (!passwordValue) {
      newErrors.password = 'Password is required.';
    } else if (passwordValue.length < 6) {
      newErrors.password = 'Password should be at least 6 characters.';
    }

    // Confirm Password Validation
    if (confirmPasswordValue !== passwordValue) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    return newErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      // No errors, submit the form and navigate to home page
      console.log('Form Submitted Successfully');
      
      // Redirect to the home page after successful validation, passing the name
      navigate('/', { state: { fullName: nameValue } }); 
    } else {
      // If there are errors, show them
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div>
        <div className="grid place-items-center p-5">
          <form onSubmit={handleFormSubmit} className="border p-5 w-full grid place-items-center shadow-sm rounded-xl">
            <div className="text-2xl font-bold">Sign In</div>
            
            <div className="w-full grid place-items-center">
              
              <input
                type="text"
                className="border my-2 focus:ring focus:ring-red-500 focus:outline-none p-1 rounded-lg w-10/12"
                placeholder="Enter Your Full name"
                value={nameValue}
                onChange={handleNameChange}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

              <input
                type="text"
                className="border my-2 focus:ring focus:ring-red-500 focus:outline-none p-1 rounded-lg w-10/12"
                placeholder="Enter Your Username"
                value={usernameValue}
                onChange={handleUsernameChange}
              />
              {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}

              <input
                type="text"
                className="border my-2 focus:ring focus:ring-red-500 focus:outline-none p-1 rounded-lg w-10/12"
                placeholder="Enter Your Email"
                value={emailValue}
                onChange={handleEmailChange}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

              <input
                type="password"
                className="border my-2 focus:ring focus:ring-red-500 focus:outline-none p-1 rounded-lg w-10/12"
                placeholder="Enter Your Password"
                value={passwordValue}
                onChange={handlePasswordChange}
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}

              <input
                type="password"
                className="border my-2 focus:ring focus:ring-red-500 focus:outline-none p-1 rounded-lg w-10/12"
                placeholder="Confirm Your Password"
                value={confirmPasswordValue}
                onChange={handleConfirmPasswordChange}
              />
              {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}

              <input
                type="submit"
                className="w-10/12 bg-blue-500 p-2 rounded-lg my-2 text-white hover:bg-blue-900 cursor-pointer duration-300"
                value="Submit"
              />
            </div>
            
            <div>
              <span>Are you new? <span className="underline cursor-pointer hover:text-red-500 duration-150">Sign Up here</span></span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
