"use client";
import { useEffect, useState } from "react";
export default function Home() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Lấy danh sách ghi chú khi load trang
  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  // Hàm thêm ghi chú
  const addNote = async () => {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    const newNote = await res.json();
    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  };

  // Hàm xóa ghi chú
  const deleteNote = async (id) => {
    await fetch(`/api/notes/${id}`, { method: "DELETE" });
    setNotes(notes.filter((n) => n.id !== id));
  };
  return (
    <div className="main_container ">
      <b style={{ fontSize: "32px" }}>
        📝 GHI CHÚ TRỰC TUYẾN
      </b>
      <div className="input_field">
        <input
          id="title"
          placeholder="Tiêu đề"
          onChange={(e) => setTitle(e.target.value)}
          className="border input border-black rounded px-2 py-1"
        />
        <input
          id="content"
          placeholder="Nội dung"
          onChange={(e) => setContent(e.target.value)}
          className="border input border-black rounded px-2 py-1"
        />
      </div>
      <button
        onClick={addNote}
        className="bg-black text-white btn rounded px-2 py-1"
      >
        Thêm ghi chú
      </button>
      <div className="note_containter w-full h-full border border-black rounded p-4 overflow-y-auto">
        <p className="">Ghi chú:</p>
        <ul>
          {notes.map((note) => (
            <li
              key={note.id}
              className="ghichu"
              style={{ marginBottom: "8px" }}
            >
              <p>
                <b>{note.title}</b>: {note.content}
              </p>
              <button
                onClick={() => deleteNote(note.id)}
                className="deletebtn"
              >
                Xóa
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
