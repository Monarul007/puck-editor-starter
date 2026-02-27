import React from "react";

interface ImageFieldProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export const ImageField: React.FC<ImageFieldProps> = ({
  value,
  onChange,
  label,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-2">
      {label && <label className="text-xs font-medium text-gray-500">{label}</label>}
      <div className="space-y-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Image URL"
          className="w-full text-xs border rounded p-1"
        />
        <div className="flex items-center space-x-2">
          <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-[10px] uppercase py-1 px-2 rounded">
            Upload
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          {value && (
            <button
              onClick={() => onChange("")}
              className="text-[10px] uppercase text-red-500 hover:underline"
            >
              Clear
            </button>
          )}
        </div>
        {value && (
          <div className="mt-2 border rounded overflow-hidden bg-gray-50 aspect-video flex items-center justify-center">
            <img
              src={value}
              alt="Preview"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};
