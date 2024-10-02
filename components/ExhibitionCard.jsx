
export default function ExhibitionCard({imgSrc,title,description,dates}) {
  return (
    <div className="max-w-xs h-104 bg-white shadow-md rounded-lg overflow-hidden m-4">
      <img src={imgSrc} alt={title} className="w-full h-80 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="mt-2 text-gray-500">{dates}</p>
      </div>
    </div>
  )
}

