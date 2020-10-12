import React, { Component } from 'react'



 class Cards extends Component {
    render() {

        const {image, text, title,date} = this.props;
        return (

<React.Fragment>
            <div className="Card_box">

            <img src={image} alt=""/>
              <div className="left"> 
               <h1> {title}</h1>
                <p>{text}</p></div>
<div className="right"><h1>{date}</h1>

</div>


       
        </div>
        </React.Fragment>
        )
    }
}

export default Cards;
