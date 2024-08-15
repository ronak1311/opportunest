
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux'; 

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
    const {allJobs} = useSelector(store=>store.job);
   
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top </span> Job Openings</h1>
            {allJobs.length <=0 && <div className='flex-1 h-[88vh] flex flex-col items-center mt-10'>
                        <span className='text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text animate-slide-in'>
                            Oops! No job listings found right now.                        </span>
                        <p className='mt-4 text-lg text-gray-600 animate-fade-in'>
                           Check back soon!
                        </p>
                        <svg className='w-16 h-16 text-green-500 mt-5 animate-pop-in' fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM12 15.75V12M12 8.25h.007'></path>
                        </svg>
                      </div>}
            {allJobs.length >= 0 &&
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
                }
            </div>
            }
        </div>
    )
}

export default LatestJobs