import { useState } from "react";
import { Link } from "react-router";
import { useSelector, useDispatch } from 'react-redux'
import { deleteForm , setInputs_Disabled } from '../../store/features/form/formSlice';
//import ModalInfo from "../../Components/Modal/ModalInfo.jsx";
import ModalInfo from "@/Components/Modal/Modalinfo";
const Navigator = () => {
 
  const dispatch = useDispatch();
 const formDataSlice = useSelector((state) => state.form.login_Form);

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");


  const handleLogout = () => {
    setModalMessage("¿Estás seguro de que quieres cerrar sesion?");
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    dispatch(setInputs_Disabled(false)); 
    dispatch(deleteForm()); // Limpiar datos de las variables de estado del usuario en Redux
    
    setShowLogoutModal(false);
    console.log(setInputs_Disabled);
  };

  const onCloseModalInfo = () => {
    setShowLogoutModal(false);
  };
  return (

    <nav className="navbar">
      <div className="nav-links">
      <Link to="/" className="nav-link">LandingPage</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/counter" className="nav-link">Counter</Link>
      
      <Link to="/think" className="nav-link">Think</Link>
      <Link to="/products" className="nav-link">Product</Link>
      <Link to="/about" className="nav-link">About</Link>

      <Link to="/about" className="nav-link">


      </Link></div>
      <div className="nav-span">
        {formDataSlice.username && formDataSlice.email && (
          <>
            <h4>Bienvenido {formDataSlice.username} | {formDataSlice.email}</h4>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>

      <ModalInfo
        visible={showLogoutModal}
        message={modalMessage}
        onClose={onCloseModalInfo}
        isSuccess={false}
      >
        <button onClick={confirmLogout}>
          Presionar para salir
        </button>
      </ModalInfo>

    </nav>
  )
}

export default Navigator