
export default function IdCard(props) {
    return (
        <div>

    <p>lastName: {props.lasName}</p>
    <p>firstName: {props.firstName}</p>
    <p>gender: {props.gender}</p>
    <p>height: {props.height}</p>
    
    <img src={props.picture} alt="ID person"/>
    

        </div>
    )
  }