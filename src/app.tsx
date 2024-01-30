import { LoaderIcon, RefreshCcw } from "lucide-react";
import { Editor } from "./components/editor";
import useGet from "./hooks/use-get";
import { Button } from "./components/button";

type ResponseData = {
  name: string;
  email: string;
  company: {
    name: string;
  };
};
function App() {
  // fetch random user from dummy api.
  const { data, isError, isLoading, reset } = useGet<ResponseData>(
    `https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random() * 9 + 1)}`
  );

  // show spinner on loading
  if (isLoading) {
    return (
      <div className="flex items-center justify-center ">
        <LoaderIcon className="animate-spin w-12 text-gray-500 h-12" />
      </div>
    );
  }

  // show error
  if (isError) {
    return (
      <div className="grid max-w-xl mx-auto bg-white gap-6 items-center justify-center border border-dashed p-6 rounded-lg">
        <h2 className="font-semibold text-xl text-center">Network error</h2>
        <Button variant="primary" onClick={reset}>
          <RefreshCcw className="text-gray-100" />
          Try again
        </Button>
      </div>
    );
  }

  // main editor
  if (data) {
    return (
      <main className="grid gap-8">
        <Editor
          email={data.email.toLocaleLowerCase()}
          name={data.company.name}
        />
      </main>
    );
  }
}

export default App;
