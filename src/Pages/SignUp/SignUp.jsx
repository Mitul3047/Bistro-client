// import { useForm } from "react-hook-form"

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const SignUp = () => {
  const { createuser, logOut } = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm();

  // const onSubmit = data => {
  //   console.log(data)
  // };
  // console.log(watch("example"))

  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  const onSubmit = data => {
    console.log(data);
    createuser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: "SignUp Sucesss",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
        logOut()
          .then(() => { })
          .then(error => console.error(error))
      })
  }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered" required />

              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
              {errors.email && <span className="text-red-600">email is required</span>}
              {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label> */}
            </div>
            <div className="form-control">

              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password"  {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
              })} placeholder="password" className="input input-bordered" />
              {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
              {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
              {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
              {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <p><small>Already Have an account?   <span className="btn-link"><Link to={'/login'}>Login</Link></span></small></p>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default SignUp;