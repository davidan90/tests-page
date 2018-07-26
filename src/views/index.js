const Home = () => import(/* webpackChunkName: "Home" */ "./home/Home");
const About = () => import(/* webpackChunkName: "About" */ "./about/About");
const Contact = () =>
  import(/* webpackChunkName: "Contact" */ "./contact/Contact");

export { Home, About, Contact };
