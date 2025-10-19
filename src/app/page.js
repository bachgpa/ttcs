export default function Home() {
  return (
    <div className="main_container ">
      Ghi chú
      <div className="input_field">
        <input
          id="title"
          placeholder="Tiêu đề"
          className="border input border-black rounded px-2 py-1"
        />
        <input
          id="content"
          placeholder="Nội dung"
          className="border input border-black rounded px-2 py-1"
        />
      </div>
      <button className="bg-black text-white btn rounded px-2 py-1">
        Thêm ghi chú
      </button>
      <div className="note_containter w-full h-full border border-black rounded p-4 overflow-y-auto">
        <p className="">
          Ghi chú của bạn sẽ hiện thị ở đây
        </p>
      </div>
    </div>
  );
}
