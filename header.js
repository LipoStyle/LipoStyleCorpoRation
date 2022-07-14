// creating items for the navigation bar 
function ItemMenu(props){
  return(
    <li><a href={props.url}>{props.name}</a></li>
  )
}
// creating the navigation bar
function Navbar(){
  return(
      <ul className="menuSection">
        <ItemMenu name="Home" url="index.html"/>
        <ItemMenu name="Portfolio" url="#"/>
        <ItemMenu name="Gaming" url="pages/gaming/gaming.html"/>
        <ItemMenu name="Music" url="pages/music/music.html"/>
        <ItemMenu name="Books" url="pages/Books/books.html"/>
        <ItemMenu name="Gymnastics" url="#"/>
    </ul>
  )
}
// creating the logo section
function LogoSection(props){
  return (
    <div className="logoSection">
      <img src={props.url}></img>
    </div>
  )
}
// creating the burger menu section
function BurgerComponent(){
  return (
    <div className="burgerMenu">
      <span className="bar1"></span>
      <span className="bar2"></span>
      <span className="bar3"></span>
    </div>
  )
}
// creatin the headerSction
function HeaderSection(){
  return(
    <>
      <LogoSection url="img/header/km2R.png" />
      <Navbar />
     <BurgerComponent />
    </>
  )
}
ReactDOM.render(
  <HeaderSection />,
  document.querySelector("header")
)

// burger menu section for onclickevent
const burger = document.querySelector(".burgerMenu");
const menu = document.querySelector(".menuSection");
burger.addEventListener("click", ()=>{
  burger.classList.toggle("change");
  menu.classList.toggle("active");
})