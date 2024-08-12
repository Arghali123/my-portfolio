/* eslint-disable react/prop-types */
import { AiFillMessage } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Button = (props) => {
    // const buttonStyle = {
    //     backgroundColor: props.type,
    //     fontSize: "12px",
    //     color: "white",
    //     border: "none",
    //     borderRadius: "5px",
    //     padding: "10px 15px",
    //     fontWeight: "bold",
       
    //     gap: "5px",
    //     alignItems: "center",
    // };
  

    return (
        <button
      className={`text-white rounded-lg  flex items-center justify-center p-1 gap-2  
        ${props.type === "blue" ? "bg-blue-700 hover:bg-violet-600" : "bg-orange-600 hover:bg-orange-700"} `}
    >
      {props.icon == "contact" ? (
        <AiFillMessage size="16px" />
      ) : (
        <FaGithub size="16px" />
      )}
      {props.title}
    </button>
    );
};

export default Button;