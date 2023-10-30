"use client";

export default function ReloadButton() {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <button
      className="bg-blue-500 dark:bg-blueDark rounded-md px-4 py-2 text-white dark:text-darkBackground active:bg-blue-600 dark:active:bg-blueDarkFill max-sm:py-3 max-sm:rounded-sm"
      onClick={refresh}
    >
      Reload
    </button>
  );
}
