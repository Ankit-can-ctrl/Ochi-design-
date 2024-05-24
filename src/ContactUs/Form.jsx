function Form({ text1, place1, text2, place2 }) {
  return (
    <div className="w-full flex flex-col md:flex-row gap-10 justify-center mb-10">
      <div className=" flex flex-col md:flex-row gap-5">
        <label className=" text-3xl md:text-3xl lg:text-6xl">{text1}</label>
        <input
          className=" bg-black border-b-2 outline-none text-center"
          type="text"
          placeholder={place1}
        />
      </div>
      {text2 && (
        <div className=" flex flex-col md:flex-row gap-5">
          <label className=" text-3xl md:text-3xl lg:text-6xl">{text2}</label>
          <input
            className=" bg-black border-b-2 outline-none text-center"
            type="text"
            placeholder={place2}
          />
        </div>
      )}
    </div>
  );
}

export default Form;
