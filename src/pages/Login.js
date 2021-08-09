import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import Game from "../components/Game";


function Login() {

  const apiUrl = process.env.REACT_APP_MANCALA_API_URL
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = async data => await axios.post(apiUrl + '/register', data).then(response => {
    sessionStorage.setItem("token", response.data)
  });

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div> {sessionStorage.getItem("token") && <Game/>}</div>
      <h1>Mancala Game</h1>
      <input placeholder="username" className="username" {...register("username")} />
      <input placeholder="password" className="password" {...register("password", {required: true})} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit"/>
    </form>
  );
}

export default Login;