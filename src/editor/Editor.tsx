import React from "react";
import { Puck } from "@measured/puck";
import type { Data } from "@measured/puck";
import "@measured/puck/puck.css";
import { config } from "../puck/config";
import type { Props } from "../puck/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const initialData: Data<Props> = {
  content: [],
  root: {},
};

export const Editor: React.FC = () => {
  const [data, setData] = React.useState<Data<Props>>(initialData);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen flex flex-col overflow-hidden">
        <header className="bg-white border-b px-4 py-2 flex items-center justify-between z-20">
          <div className="flex items-center space-x-4">
            <div className="font-bold text-xl text-blue-600">PUCK EDITOR</div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">Preview</button>
            <button
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => console.log("Published:", data)}
            >
              Publish
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-hidden relative">
          <Puck
            config={config}
            data={data}
            onPublish={(newData) => setData(newData)}
            onChange={(newData) => setData(newData)}
          />
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default Editor;
