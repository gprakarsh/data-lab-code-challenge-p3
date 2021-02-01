import './InputBox.css';

export default function InputBox({heading, placeholder, onChangeFn, value, disabled, type}){
    return(
        <div className="inputBox">
          <p>{heading}</p>
          <input placeholder={placeholder} onChange={(e)=>onChangeFn(e.target.value)} value={value} disabled={disabled} type={type}/>
        </div>
    )
}