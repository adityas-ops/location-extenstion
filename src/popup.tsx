
import { useState } from "react"
import { type Root } from "~types";
import "~style.css"





// ... (imports)

// ... (imports)

function IndexPopup() {
  const [data, setData] = useState<Root | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.PLASMO_PUBLIC_API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleData = () => {
    setLoading(true);
    setTimeout(fetchData, 1000);
  };

  return (
    <div className="plasmo-w-[500px] plasmo-h-[500px] plasmo-flex-col plasmo-gap-[20px] plasmo-flex plasmo-justify-center plasmo-items-center">

      <div className="    plasmo-text-xl plasmo-font-bold   plasmo-text-center ">
        {data &&
          <>
            <p className=" plasmo-py-[10px] ">Your Country is <span className="plasmo-text-indigo-500"> {data?.location.country || ''}</span></p>
            <p className=" plasmo-py-[10px] ">Your City is <span className="plasmo-text-indigo-500">  {data?.location.city || ''}</span> </p>
          </>
        }
      </div>



      <button
        onClick={handleData}
        type="button"
        className="plasmo-w-[300px] plasmo-bg-indigo-500 plasmo-text-xl plasmo-rounded-md plasmo-font-bold plasmo-text-white plasmo-py-[15px]"
      >
         {

loading ? <div className=" plasmo-flex plasmo-justify-center plasmo-items-center"> 
<svg aria-hidden="true" className="plasmo-w-[25px] plasmo-h-[25px] plasmo-mr-[10px] plasmo-text-gray-200 plasmo-animate-spin plasmo-dark:text-gray-600 plasmo-fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>

Loading... </div> : 'Show my location'
}
      </button>

    </div>
  );
}

export default IndexPopup;
