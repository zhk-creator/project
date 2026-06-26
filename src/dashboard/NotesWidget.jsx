import { useState, useEffect } from "react";

const NotesWidget = () => {
  const [note, setNote] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("note");
    if (saved) setNote(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("note", note);
  }, [note]);

  return (
    <div className="bg-[#F1C75B] text-black p-4 rounded-2xl h-64">
      <h2 className="font-bold mb-2">All Notes</h2>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full h-full bg-transparent outline-none resize-none"
        placeholder="Write your notes..."
      />
    </div>
  );
};

export default NotesWidget;