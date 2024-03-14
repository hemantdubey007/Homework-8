import { useEffect, useState } from "react";
import ProgressBar from "../Components/ProgressBar";
import './LandingScreen.css'

function LandingScreen(){
    
    const [progress, setProgress] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() =>{
        
        let time;

        if(start === true){

            time = setInterval(()=>{
                setProgress((prevState) =>{
                    const updateProgress = prevState+1;
                    if(updateProgress === 100){
                        clearInterval(time);
                    }
                    return updateProgress;
                })
            }, 100);
            
        }

        return(() =>{
            clearInterval(time);
        })            

    }, [start])

    return(
        <div id="container">
            <h1>Progress Bar</h1>
            <ProgressBar progress={progress}/>
            {progress < 100 ? progress ===0 ? "" : <p>Loading...</p> : <p>Completed!</p>}
            {progress === 0 ? <button onClick={()=>{
                setStart(true);
            }} className='start'>Start</button>:""}
            
        </div>
    )
}

export default LandingScreen