import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink , useNavigate,useLocation } from "react-router-dom";

export default function Navbar()
{
    const location = useLocation();
    const navigate = useNavigate();

     const goAndScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

    return
    (
        <>
        <ul>
            <li>
                <ScrollLink to="gallery" smooth duration={300}
                onClick={()=>goAndScroll("gallery")}
                className="cursor-pointer hover:text-blue-600">
                    Gallery
                </ScrollLink>
            </li>
        </ul>
        </>
    )
}