import Bar from './Bar';

function App() {

  return (
    <div className='font-montserrat max-w-md mx-auto px-4'>

      <h1 className='text-3xl text-center text-[#333333] mt-8 font-raleway font-bold'>
        #todo
      </h1>

      <Bar />

      <div className='mt-3 flex gap-3 items-stretch'>
        <input type='text' placeholder='add details' className='border border-gray-300 px-2 py-2 rounded-xl flex-grow-1 w-full' />
        <button className='capitalize bg-blue-500 text-white text-sm font-semibold px-8 rounded-xl'>add</button>
      </div>

    </div>
  );
}

export default App;
