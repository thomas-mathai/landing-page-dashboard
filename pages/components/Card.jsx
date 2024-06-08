const Card = ({ page }) => {
  const { id, title, description, image } = page;
  return (
    <div className="border overflow-hidden border-gray-400 rounded-xl transform transition duration-500 hover:scale-[1.04]">
      <img className="h-56 w-full object-cover" src={image} alt={title} />
      <div className="px-4 py-6 space-y-2">
        <h4 className="title-font font-bold text-xl text-gray-900">{title}</h4>
        <p className="leading-relaxed font-normal">{description}</p>
        <div className="flex gap-3">
          <button
            onClick={() => router.push(`/dashboard/edit/${id}`)}
            title="Edit"
          >
            <i class="ri-edit-line text-xl hover:text-blue-600"></i>
          </button>
          <button onClick={() => router.push(`/landing/${id}`)} title="View">
            <i class="ri-eye-fill text-xl hover:text-blue-600"></i>
          </button>
          <button onClick={() => handleDelete(id)}>
            <i
              class="ri-delete-bin-line text-xl hover:text-red-600"
              title="Delete"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
