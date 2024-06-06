
import { useState } from "react";
import { USERS } from "../../constants/users";



const SliderContainer =()=>{
    const [currentIndex, setCurrentIndex] = useState(0);

    const previewSlide =()=>{
        setCurrentIndex((index)=> (index === 0 ? index : index -1));
    }

    const nextSlide = () => {
        setCurrentIndex((index) => (index === USERS.length - 1 ? USERS.length-1 : index + 1));
      };

      const currentUser= USERS[currentIndex]

    return <div>
<img src={currentUser.profileImage} alt="" />
<h1>{currentUser.name}</h1>
<p>{currentUser.username}</p>
<p>{currentUser.email}</p>
<div>
    <button onClick={previewSlide} disabled={currentIndex ===0}>Previews</button>
    <button onClick={nextSlide} disabled={currentIndex === USERS.length -1}>Next</button>
</div>

    </div>
    
}

export default SliderContainer