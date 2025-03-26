import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRole } from "../../hooks/useRole";



const HomePage = () => {
  const { setCurrentRole } = useRole();

  // Reset to entry state when landing on homepage
  useEffect(() => {
    setCurrentRole("entry");
  }, [setCurrentRole]);

  //landlord login api call
  // const landlordLogin = () => {

  //   setCurrentRole("landlord")
  //   async function postLogin(){
  //     try {
  //         const response = await fetch('https://two025-cohort-team-2.onrender.com/api/login', {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type':'application/json'
  //             },
  //             body: JSON.stringify({
  //                 'email': 'luser1@mail.com',
  //                 'password': 'PassW0RD!'
  //             })
  //         })
  //         const data = await response.json()

  //         if(!response.ok){
  //           console.log(data);
  //           throw new Error("some error message")
  //         }
  //         console.log(data)
  //     } catch (error) {
  //       console.log(error)
  //       //do error handling
  //     }
  // }
  //   postLogin()
  // }

  // //tenant login api call
  // const tenantLogin = () => {

  //   setCurrentRole("tenant")
  //   async function fetchData(){
  //     try{
  //         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //         const data = await response.json()
  
  //         if(!response.ok){
  //             throw new Error("some error message")
  //         }
  //         console.log(data)
  //         //do something with data
  //     } catch(error){
  //         console.log(error)
  //         //modify something on the frontend to show error
  //     }
  //   }
  //   fetchData()
  // }

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/apartment_bg_img.jpg')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-neutral-900/75" />
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <div className="flex space-x-4">
          <button
            className="px-8 py-4 bg-orange-700 text-orange-100 font-semibold rounded-md hover:bg-orange-800 transition"
            // onClick={() => landlordLogin()}
          >
            <Link to={'/landlord'}>Landlord</Link>
          </button>
          <button
            className="px-8 py-4 bg-orange-200 text-stone-700 font-semibold rounded-md hover:bg-orange-100 transition"
            // onClick={() => tenantLogin()}
          >
            <Link to={'/tenant'}>Tenant</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
