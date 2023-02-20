import Navbar from '../../components/Navbar'
import Table from '../../components/Table'


const Historic =() =>{
  var local_car = localStorage.getItem('car')


  const car = JSON.parse(local_car)

    
        

  return(
<>
    <Navbar car ={car} />
  
          <div className='mt-24 '>
    <Table />
          </div>
      
          </>  
 
  )
}

export default Historic