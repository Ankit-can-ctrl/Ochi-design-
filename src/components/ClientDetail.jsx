/*eslint-disable*/
function ClientDetail({ showDetails, item }) {
  return (
    <div className="client-details p-10 flex flex-col gap-5">
      <div className="services flex flex-col gap-3 items-start ">
        <h1 className="text-xl">Services:</h1>
        {showDetails && (
          <div className="flex flex-col items-start justify-between gap-4">
            {item.services.map((item, index) => (
              <button
                key={index}
                className="rounded-full uppercase border-2 px-4 "
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="client-desc flex flex-col items-start justify-between gap-5">
        <h1 className="capitalize">{item.name}</h1>
        {showDetails && (
          <>
            <img
              className=" h-28 rounded-lg"
              src={item.img}
              alt="client image"
            />
            <p className="pr-[50%]">{item.desc}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default ClientDetail;
