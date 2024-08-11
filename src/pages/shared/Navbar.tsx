import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
// import { Link } from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import Logo from "@/assets/navlogo.png";
import { BsCartCheckFill } from "react-icons/bs";
export default function Navbar() {
  const data = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Products",
      path: "/products",
    },
    {
      id: 3,
      name: "About",
      path: "/about",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 5,
      name: <BsCartCheckFill className="text-2xl"/>,
      path: "/cart",
    },
  ]
  return (
   <div className="mx-auto container  ">
     <div className="flex  items-center justify-between border-b-2  ">
      <Link to="/" className="flex items-center">
       <img src={Logo} alt="" className="h-20 mt-2"/>
       
      </Link>
     
      <NavigationMenu>
        <NavigationMenuList>
          {
            data.map((item) => (
              <NavigationMenuItem key={item.id} >
               <Link to={item.path}>
               <NavigationMenuLink className={navigationMenuTriggerStyle() }  
               style={
                {
                  fontSize:"16px",
                  fontWeight:"bold",
                }
              } 
               >
                   {typeof item.name === "string" ? (
                item.name
              ) : (
                item.name  // Render the icon directly if it's a React element
              )}
                </NavigationMenuLink>
               </Link>
              </NavigationMenuItem>
            ))
          }
        </NavigationMenuList>
      </NavigationMenu>
     
    </div>
   </div>
  );
}
