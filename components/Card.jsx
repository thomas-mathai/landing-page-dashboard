const Card = ({ page, handleDelete }) => {
  const { id, title, description, image } = page;
  return (
    <div className="border overflow-hidden border-gray-400 rounded-xl transform transition duration-500 hover:scale-[1.04]">
      <img className="h-56 w-full object-cover" src={image} alt={title} />
      <div className="px-4 py-6 space-y-2">
        <h4 className="title-font font-bold text-xl text-black">{title}</h4>
        <p className="leading-relaxed font-normal text-gray-900">
          {description}
        </p>
        <div className="flex gap-3">
          <a href={`/dashboard/edit/${id}`} title="Edit">
            <i class="ri-edit-line text-xl text-gray-600 hover:text-blue-600"></i>
          </a>
          <a href={`/dashboard/${id}`} title="View">
            <i class="ri-eye-fill text-xl text-gray-600 hover:text-blue-600"></i>
          </a>
          <button onClick={() => handleDelete(id)}>
            <i
              class="ri-delete-bin-line text-gray-600 text-xl hover:text-red-600"
              title="Delete"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
