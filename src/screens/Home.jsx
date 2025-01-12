
import OpenLink from "../Components/Core/OpenLink.jsx";
import Body from '../Components/Home/Body.jsx';
import Footer from '../Components/Home/Footer.jsx';

import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.png";

import { useSelector } from 'react-redux'

const Home = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <>
    <div>Count value  <span>{count}</span></div>

      <div> 
      <OpenLink
              redirectURL="https://vite.dev"
              logoImage={viteLogo}
          />
<OpenLink
              redirectURL="https://react.dev"
              logoImage={reactLogo}
          />
          <OpenLink
              redirectURL="https://github.com/LeydiProgrammer/desrollo-frontend-react"
              logoImage={githubLogo}
          />
      </div>
          
          <Body />
          <Footer />
      </>
  );
};
export default Home;
=======
import OpenLink from "../Components/Core/OpenLink.jsx";
import Body from '../Components/Home/Body.jsx';
import Footer from '../Components/Home/Footer.jsx';

import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.png";
const Home = () => {
  return (
      <div>
          <OpenLink
              redirectURL="https://vite.dev"
              logoImage={viteLogo}
          />
<OpenLink
              redirectURL="https://react.dev"
              logoImage={reactLogo}
          />
          <OpenLink
              redirectURL="https://github.com/dheeyi/desarrollo-frontend-react-2025"
              logoImage={githubLogo}
          />
          <Body />
          <Footer />
      </div>
  );
};
export default Home;
>>>>>>> 2a8b65f03802ff1a539f0bb9b934154258654e0a
