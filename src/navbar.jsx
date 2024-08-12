import "./Navbar.css";
const Navbar = () => {
   const navbar=["Home","Skills","Project","About me","Resume","Projects"]
    return (
      <nav class="flex text-white bg-white-500 p-5x   rounded-lg  w-[70%] justify-center m-auto border-2 border-white box-border max-w-[65%]">
      <ul class="flex gap-20 text-center p-3">
        {
          navbar.map((a,index)=>
           (
            <li key={index} class="hover:text-yellow-400 hover:scale-800 transition-all duration-400"><a href="#">{a}</a></li>
           )
          )
        }
      </ul>
    </nav>
    )
  }

  
  export default Navbar