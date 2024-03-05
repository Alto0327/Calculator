import './Component.css';

const DisplayScreen = () => {
    return (
        <div className="Display-Screen"> 

        </div>
    );
}
const Buttons = () => {
    return (
        <div className="Button-Grid"> 
            
        </div>
    );
}
const Main = () => {
    return (
        <div className="Calc-container">
            <DisplayScreen/>
            <Buttons/>
        </div>
    );
}

export default Main;