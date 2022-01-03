export default function Logs ({ data = [] }) {
  return data.map((item, index) => {
    return (
      <div key={item.id ?? index} className="flex font-roboto p-4 border-b border-white border-opacity-5">
        <span className="text-gray-900 mr-4">{item.time}</span>
        <span className="text-gray-500">{item.text}</span>
      </div>
    )
  })
}
