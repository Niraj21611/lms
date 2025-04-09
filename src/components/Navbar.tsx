import { Flex, Text, Button } from "@radix-ui/themes";

export default function Navbar() {
  return (
    <nav className="flex justify-center bg-gray-300">
      <div className="flex flex-row items-center justify-between w-full max-w-7xl py-4">
        <h1 className="text-white">LMS</h1>
        <div className="flex gap-2 text-white">
          <Button
            size="4"
            variant="outline"
            className="!text-white !border-white hover:bg-white/10"
          >
            Log in
          </Button>

          <Button size={"4"}>Getting Started</Button>
        </div>
      </div>
    </nav>
  );
}
