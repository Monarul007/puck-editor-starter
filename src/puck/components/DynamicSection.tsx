import React from "react";
import { DropZone } from "@measured/puck";
import { useQuery } from "@tanstack/react-query";

export interface DynamicSectionProps {
  api: {
    url: string;
    method: string;
    headers: Record<string, string>;
    responsePath: string;
  };
}

const getByPath = (obj: any, path: string) => {
  if (!path) return obj;
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

export const DynamicSection: React.FC<DynamicSectionProps> = ({ api }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["dynamic-data", api?.url],
    queryFn: async () => {
      if (!api?.url) return null;
      const res = await fetch(api.url, {
        method: api.method || "GET",
        headers: api.headers,
      });
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
    enabled: !!api?.url,
  });

  const items = React.useMemo(() => {
    if (!data) return [];
    const result = getByPath(data, api?.responsePath);
    return Array.isArray(result) ? result : [];
  }, [data, api?.responsePath]);

  if (isLoading) {
    return <div className="p-8 text-center text-gray-400">Loading data...</div>;
  }

  if (isError) {
    return (
      <div className="p-8 text-center text-red-500 border border-red-200 bg-red-50 rounded">
        Error loading data: {(error as Error).message}
      </div>
    );
  }

  if (!api?.url) {
    return (
      <div className="p-8 text-center text-gray-400 border-2 border-dashed rounded">
        Please configure API URL in the sidebar
      </div>
    );
  }

  return (
    <div className="dynamic-section space-y-4">
      {items.length === 0 && (
        <div className="p-8 text-center text-gray-400">No items found</div>
      )}
      {items.map((_, i) => (
        <div key={i} className="dynamic-item relative border rounded p-4 bg-white shadow-sm">
          <div className="absolute top-2 right-2 text-[8px] text-gray-300 uppercase">
            Repeater Item
          </div>
          <DropZone zone="template" />
        </div>
      ))}
    </div>
  );
};
