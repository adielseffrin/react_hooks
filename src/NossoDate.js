function NossoDate({value, onChange}){
 
  //const [data] = (value ? new Date(value).toISOString().split('T') : new Date().toISOString().split('T'));
  const [data] = (value ? new Date(value).toISOString().split('T') : [""]);


  const handleChange = e => {
    e.preventDefault();
    onChange(e.target.value);
  
  }

  return(
    <input
       type="date" 
       value={data}
       onChange = {handleChange}
    />

  )
}

export default NossoDate;