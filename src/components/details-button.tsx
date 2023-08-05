import { useDetailsContext } from "@/contexts/details-context";

export default function DetailsButton() {
  const { detailsOpen, setDetailsOpen } = useDetailsContext();

  return (
    <button
      className="border border-gray-300 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-100"
      onClick={() => setDetailsOpen(!detailsOpen)}
    >
      {detailsOpen ? "Hide details" : "Details"}
    </button>
  );
}
