
const Table= ({topics})=>{

    return (
        <div className="relative my-3 flex flex-col w-full h-full overflow-scroll text-gray-700 bg-n-7   border-white shadow-md rounded-lg bg-clip-border">

        <table className="w-full text-left table-auto min-w-max"> {/* Added min height */}
        <thead>
          <tr>
            <th className="p-4 border-b border-slate-300 text-slate-100 bg-n-8 font-bold">#</th>
            <th className="p-4 border-b border-slate-300 bg-n-8 text-slate-100 font-bold">Topics</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic, index) => (
            <tr key={index} className="hover:bg-n-5">
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-100 font-bold">{index + 1}.</p></td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-100 font-bold">{topic}</p></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    )

}

export default Table;