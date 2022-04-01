import { useState } from "react";
function Register() {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const userNameRegex =/^[a-zA-Z0-9]{4,}$/
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    const[userData,setUserData] = useState({
        
            name:"Asmaa",
            email:"Asmaa@gmail.com",
            userName:"asmaaMohamed",
            password:"Asmaa@1101998",
        
    })
    const[errors,setErrors] = useState({
        
        nameErorr:null,
        emailError:null,
        userNameError:null,
        passwordError:null,
        confirmPasswordError:"confirm password",
    
})

   const onChangeData = (e) =>
    {
        console.log(e.target.value)
        if(e.target.name === "email")
        {
            setUserData({
                ...userData,
                email:e.target.value
            });
            setErrors({
                ...errors,
                emailError: !emailRegex.test(e.target.value) ? "Please Enter valid mail" : null
            })
        }else if(e.target.name === "name")
        {
            setUserData({
                ...userData,
                name:e.target.value})
            setErrors({
                ...errors,
                nameErorr: e.target.value.length === 0 ? "Please Enter valid name" : null
            })
        }else if(e.target.name === "username")
        {
            setUserData({
                ...userData,
                userName:e.target.value
                
            })
            setErrors({
                ...errors,
                userNameError:!userNameRegex.test(e.target.value) ? "Please Enter valid username" : null

            })
        }
        else if(e.target.name === "userPassword")
        {
            setUserData({
                ...userData,
                password:e.target.value
                
            })
            setErrors({
                ...errors,
                passwordError:!passwordRegex.test(e.target.value) ? "Please Enter valid pasword with 8 carachters containing charachters and numbers" : null
            })
        }
}

    //submit from data function
     const submitFormData = (e) =>
     {
         e.preventDefault();
         if(!errors.userNameError && !errors.nameErorr && !errors.emailError && !errors.passwordError && !errors.confirmPasswordError)
         {
             console.log(userData)
         }
     }


    return(
        <form className="container my-5" onSubmit={(e)=>submitFormData(e)}>
            <h1 className="text-center text-danger">Register</h1>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input  type="text"
                        className={`form-control ${errors.nameErorr ? "border-danger" : ""}`}
                        name="name"
                        placeholder="Enter your name"
                        value={userData.name}
                        onChange={(e)=>onChangeData(e)}
                        />
                <div className="form-text text-danger">{errors.nameErorr}</div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email"
                       className={`form-control ${errors.emailError ? "border-danger" : ""}`}
                       name="email"
                       placeholder="Enter your Email"
                       value={userData.email}
                       aria-describedby="emailHelp"
                       onChange={(e)=>onChangeData(e)}
                       />
                <div  className="form-text text-danger">{errors.emailError}</div>
            </div> 
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text"
                       className={`form-control ${errors.userNameError ? "border-danger" : ""}`}
                       name="username"
                       placeholder="Enter your username with no spaces"
                       value={userData.userName}
                       onChange={(e)=>onChangeData(e)}

                  />
                  <div className="form-text text-danger">{errors.userNameError}</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password"
                       name="userPassword"
                       className={`form-control ${errors.passwordError ? "border-danger" : ""}`}
                       placeholder="Enter your Password"
                       value={userData.password} 
                       onChange={(e)=>onChangeData(e)}

                       />
            <div className="form-text text-danger">{errors.passwordError}</div>

            </div>
            <div className="mb-3">
                <label htmlFor="confirmPassword"  className="form-label">Confirm Password</label>
                <input type="password"
                       className={`form-control ${errors.confirmPasswordError ? "border-danger" : ""}`}
                       placeholder="Confrim your Password"
                       name="confirmUserPassword"
                       required
                       onChange={(e)=> setErrors({confirmPasswordError:e.target.value !== userData.password ? "Not matched" : null}) }
                       />
            <div className="form-text text-danger">{errors.confirmPasswordError}</div>

            </div>

            <button type="submit"  id="submitBtn"  className="btn btn-outline-danger" disabled={errors.nameErorr||errors.emailError||errors.userNameError||errors.passwordError||errors.confirmPasswordError}>Register</button>
        </form>
    )
    }

export default Register;

