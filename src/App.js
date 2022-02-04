import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import ImageCard from './components/ImageCard';

function App() {

  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [term,setTerm] = useState('yellow+flowers');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));

  },[term])


  return (
    <>
       <Header searchText={text => setTerm(text)}/>
       <div className="container mx-auto my-12">
         {
           !isLoading && images.length === 0 &&
           <h1 className="text-3xl text-center">No Images Found</h1>
         }
        {isLoading ? 
          <div className="text-3xl text-center">Loading...</div>
         : <div className="grid grid-cols-3 gap-4">
          {
            images.map(image => <ImageCard image={image} />)
          }
        </div>
        }
      </div>

    </>
  );
}

export default App;
