import { useState } from "react"

function Modal(){
    
    const[visible, setVisible] = useState('none')
    const[background, setBackground] = useState('rgb(255, 255, 255)')
    const[butColor, setButColor] = useState('rgb(119, 253, 253)')


    function toggleVisible(){
        if(visible == 'none'){
            setVisible(v => v = 'block')
            setBackground(b => b = 'rgba(0, 0, 0, 0.288)')
            setButColor(but => but = 'rgb(70, 151, 151)')
        }
        else{
            setVisible(v => v = 'none')
            setBackground(b => b = 'rgb(255, 255, 255)')
            setButColor(but => but = 'rgb(119, 253, 253)')
        }
    }

    return(
        <div>
            <div className="shader" style={{backgroundColor: background}}>
                <div className="container">
                    <h1>This is a test of using modals in react</h1>
                    <button className="open-modal" onClick={toggleVisible} style={{backgroundColor: butColor}}>Open Modal</button>
                </div>
            </div>


            <div className="modal" style={{display: visible}}>
                <h1 className="text">Text inside of the modal</h1>
                <h1>HELLLOOOOO</h1>
                <span className="close-modal" onClick={toggleVisible}>X</span>
            </div>
        </div>
    )

}

export default Modal