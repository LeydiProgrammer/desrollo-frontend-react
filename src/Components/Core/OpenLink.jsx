<<<<<<< HEAD
// eslint-disable-next-line react/prop-types
const OpenLink = ({ redirectURL, logoImage }) => {
    return (
        <>
        <span>
        <a href={redirectURL} target="_blank">
                <img src={logoImage} className="logo" alt="Vite logo"/>
            </a>
        </span>
            
        </>
    );
};

=======
// eslint-disable-next-line react/prop-types
const OpenLink = ({ redirectURL, logoImage }) => {
    return (
        <div>
            <a href={redirectURL} target="_blank">
                <img src={logoImage} className="logo" alt="Vite logo"/>
            </a>
        </div>
    );
};

>>>>>>> 2a8b65f03802ff1a539f0bb9b934154258654e0a
export default OpenLink;