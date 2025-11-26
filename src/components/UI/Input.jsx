export function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>

      <input
        className="border p-2 rounded w-full"
        {...props}
      />
    </div>
  );
}
