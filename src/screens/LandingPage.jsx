import React from 'react'

const LandingPage = () => {
  return (
    <>
    <br/>
     <div className="header pt-5">
            <h2>Módulo 7: DESARROLLO FRONTEND CON REACTJS</h2>
        </div>
     <div className="body">
            <h2>Bienvenido</h2>
            <p>
                Este módulo se centra en el uso de <strong>React</strong>, 
                incluyendo la creación de <strong>componentes</strong>, 
                el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
            </p>
            <h2>Temas Cubiertos</h2>
            <p>
                <table>
                    <tr>
                        <td>
                            Componentes funciones y de clase
                        </td>
                        <td>
                            Uso de <strong>React hooks</strong> como useState y useEffect
                        </td>
                        <td>
                            Creación de <strong>custom hooks</strong> como useForm
                        </td>
                        <td>
                            Gestión de variables de estado con <strong>useState</strong>
                        </td>
                        <td>
                            Gestión de estado global con <strong>Redux</strong>
                        </td>
                        <td>
                            Integración de <strong>Redux</strong> con <strong>React</strong>
                        </td>
                        <td>
                            Manejo de <strong>Formularios</strong> en <strong>React</strong>
                        </td>
                        <td>
                            Publicando nuestra <strong>Pagina</strong> con <strong>GitHub Pages</strong>
                        </td>
                    </tr>
                </table>
            </p>
            <h2>Recursos Adicionales</h2>
            <p>
                Para profundizar en los temas cubiertos, consulta los siguientes recursos:
                <div style={{ textAlign: 'center' }}>
                    <a 
                        href="" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Repositorio en GitHub
                    </a>
                </div>
            </p>
        </div>
        <div>
            <p className="footer">
                &copy; 2025 Módulo 7 - USIP
            </p>
        </div>
    </>
  )
}

export default LandingPage