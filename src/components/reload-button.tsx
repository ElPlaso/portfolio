"use client";

export default function ReloadButton() {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <button
      className="bg-blue-500 rounded-md px-4 py-2 text-white active:bg-blue-600"
      onClick={refresh}
    >
      Reload
    </button>
  );
}
