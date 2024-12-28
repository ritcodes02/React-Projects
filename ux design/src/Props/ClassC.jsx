import React from "react";
import PropType from 'prop-types'
class ClassC extends React.Component{
    render(){
        return(
<>
<h1>this is my first class component</h1>
<h2>{this.props.data.name}</h2>
<h3>{typeof(this.props.data.phone)}</h3>
<h1>{this.props.data.address.city}</h1>
<h3>{this.props.data.address.pin}</h3>
<h2>{this.props.title}</h2>
</>
        )
    }
}
export default ClassC;
// ClassC.defaultProps={
//     college:"Besant"
// }
ClassC.propType={
  title:PropType.string.isRequired
}