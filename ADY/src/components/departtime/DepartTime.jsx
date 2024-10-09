import React, {useState} from 'react'

const DepartTime = () => {

        const [DepartTrain, setTrain] = useState('');
      
        const handleDepartTrainChange = (e) => {
            setTrain(e.target.value);
        }
    
  return (
    <div className='w-full space-y-4'>
    {
        !DepartTrain
        ? (
            <div className='w-full grid grid-cols-2 gap-10'>
                <div className="">
                    <label htmlFor="DepartTrain" className="block mb-2 font-semibold">
                     DepartTime
                    </label>
                    <select 
                        name="DepartTrain"
                        value={DepartTrain} 
                        onChange={handleDepartTrainChange} 
                        id="DepartTrain" 
                        className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-11 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                        <option value="">Select a Time</option>
                        <option value="08:00">08:00</option>
                        <option value="18:00">18:00</option>
                    
                    </select>
                </div>
            
            </div>
        )
        : (
            <div className='space-y-5'>
                <div className="w-full flex items-center gap-x-3">

                        <div className="w-fit text-base font-semibold">
                            Train Depart Time: <span className="ml-1.5 font-medium">{DepartTrain}</span>
                        </div>
                    </div>
                </div>
          
        )
    }
</div>
)

}

export default DepartTime