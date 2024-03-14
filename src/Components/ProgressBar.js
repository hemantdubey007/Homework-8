import './Progress.css'

function ProgressBar({progress}){
    return(
        <div className='container'>
            <div className='container-fill' style={{
                width: `${progress}%`
            }}></div>   

            <span className='label' style = {{
                color: progress > 50 ? "#ffffff" : "#000000"
            }} >{progress}%</span>

        </div>
    )
}

export default ProgressBar;