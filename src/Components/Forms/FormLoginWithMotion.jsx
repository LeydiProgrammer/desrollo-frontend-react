
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "motion/react";
import useForm from "../Hooks/useForm.js";

import ModalInfo from "../../Components/Modal/ModalInfo";


import ModalSuccess from "../../Components/Modal/ModalSuccess.jsx";
import {updateForm , setInputs_Disabled } from "../../store/features/form/formSlice"; 

// eslint-disable-next-line react/prop-types
const FormLoginWithMotion = ({ titleForm }) => {
  
  const dispatch = useDispatch();

  const formDataSlice  = useSelector((state) => state.form.login_Form);
  const inputsDisabled = useSelector((state) => state.form.inputs_Disabled);



  const { formData, handleChange,resetForm } = useForm({
    username: '',
    email: '',
    password: ''
    
  });



  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showModalError, setShowModalError] = useState(false);

  const [isUserLogged, setIsUserLogged] = useState(false);  


  useEffect(() => {
      if (isUserLogged) { 
          resetForm(formDataSlice); 
      }
  }, [isUserLogged, formDataSlice]);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (formData.password === formDataSlice.password ) {
      dispatch(updateForm({
        ...formDataSlice,
        username: formData.username,
        email: formData.email
    }));
   
  dispatch(setInputs_Disabled(true));
  setShowModalSuccess(true);
  setInputs_Disabled(true);  
  setIsUserLogged(true);  

    } else {
   
      setShowModalError(true);  
    
   
    }
  
  };



  const [showPassword, setShowPassword] = useState(false);


  const onCloseModalError = () => {
    setShowModalError(false);
  };

  const onCloseModalSuccess = () => {
    setShowModalSuccess(false);
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ModalInfo
        visible={showModalError}
        message="Username/Password Incorrectos!!!"
        onClose={onCloseModalError}
      />

      <ModalSuccess
    visible={showModalSuccess}
    message={`BIENVENIDO: ${formData.username}`}
       onClose={onCloseModalSuccess}
      />

      <form onSubmit={handleSubmit}>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{titleForm}</h3>
        </motion.div>

        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
          <label>
            Module: 
            <input type="text" name="module" value={formDataSlice.module} required disabled/>
          </label>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                disabled={inputsDisabled}
              />
            </label>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={inputsDisabled}
              />
            </label>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label>
            Password: 
            <input
              type={showPassword ? 'text' : 'password'}


              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={inputsDisabled}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Hide' : 'Show'}
    </button>
          </label>
        </motion.div>

        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button type="submit"   disabled={inputsDisabled}>Enviar</button>
        </motion.div>
      </form>
    </motion.div>
  );
};
export default FormLoginWithMotion;

