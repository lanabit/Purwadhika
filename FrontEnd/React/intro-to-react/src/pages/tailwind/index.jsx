export default function Tailwind() {
  return (
    <div>
      <h1 className="text-9xl text-red-800">
        Tailwind CSS
      </h1>
      <div className="flex justify-center items-center h-[300px]">
        <div className="bg-blue-300 w-[100px] h-[100px] hover:bg-red-500 hover:text-lg">
          Box-01
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="bg-red-300">
          tebak
        </div>
        <div className="bg-green-300">
          Box-02
        </div>
        <div className="bg-purple-300">
          Box-02
        </div>
        <div className="bg-purple-300 font-bold">
          Box-02
        </div>
      </div>
      <div className="flex justify-center bg-purple-700">
          <h1 className="text-xl text-green-300 lg:text-red-300">Box-02</h1>
      </div>
    </div>
  )
}
