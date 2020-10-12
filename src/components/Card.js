import React, { Component } from 'react'
import Cards from './Cards'
import figma from '../images/figma.png'
import react from '../images/react.png'
import screenflow from '../images/screenflow.png'
import ark from '../images/ark.png'
import ae from '../images/ae.png'
import sketch from '../images/sketch.png'
import game from '../images/game.png'
import cubase from '../images/cubase.png'
import ske from '../images/ske.png'
import ios from '../images/ios.png'
import swift from '../images/swift.png'
import swit from '../images/swit.png'

class Card extends Component {

   
    render() {
      
        return (
           <div className="Card">

               <div className="container">

                   <div className="Card_title">

                       <h1>12 courses, more coming.</h1>
                   </div>

                   <div className="Card_cover">
                       
<Cards 
title="Design System 
with Figma" 
text="10 SECTIONS"
image={figma}
date="21 Aug"/>    
<Cards 
title="React for designers" 
text="12 SECTIONS"
image={react}
date="24 Jul"/>    
<Cards 
title="Video 
Editing with Screenflow" 
text="6 SECTIONS"
image={screenflow}
date="20 Jul"/>    
<Cards 
title="Sound
Design 
with Cubase" 
text="6 SECTIONS"
image={cubase}
date="17 Jul"/>    
<Cards 
title="Build an ARKit 2 app" 
text="10 SECTIONS"
image={ark}
date="New"/>    
<Cards 
title="Motion Design in After Effects" 
text="8 SECTIONS"
image={ae}
date="New"/>    
<Cards 
title="Create a Sketch plugin" 
text="7 SECTIONS"
image={sketch}
date="New"/>    
<Cards 
title="Create a Spritekit game" 
text="9 SECTIONS"
image={game}
date="New"/>    
<Cards 
title="Swift Advanced" 
text="22 SECTIONS"
image={swift}
date="New"/>    
<Cards 
title="Learn Swift" 
text="19 SECTIONS"
image={swit}
date="New"/>    
<Cards 
title="Learn Sketch" 
text="21 SECTIONS"
image={ske}
date="New"/>    
<Cards 
title="Learn iOS  Design" 
text="12 SECTIONS"
image={ios}
date="New"/>    

 </div>
                   
               </div>
           </div>
        )
    }
}

export default Card;
