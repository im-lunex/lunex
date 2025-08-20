import Image from "next/image";

export default function Page() {
  return (
    <>
      <Image
        src={'/terminal.png'}
        alt={"Terminal Screenshot"}
        width={1600}
        height={100}
        className="w-full h-auto object-cover"
        priority
      />
      <div className="flex-col text-foreground mb-8 mt-10">
        <p className="border-b text-base sm:text-lg w-fit border-foreground font-medium">
          Details :-
        </p>
        <p className="mt-2 text-sm sm:text-md tracking-wide text-foreground/85">
          I have a deep appreciation for <strong>minimal</strong>, <strong>efficient</strong>, and <strong>keyboard-centric</strong> workflows, and that philosophy extends seamlessly into my terminal setup.
          <br /><br />
          I use <strong>Fish shell</strong> for its intuitive syntax, smart autosuggestions, and modern defaults that enhance productivity right out of the box—no heavy tweaking required. Paired with <strong>Kitty</strong>, a GPU-accelerated terminal emulator, my command line feels snappy, clean, and visually polished. Its support for image previews, ligatures, and high-performance rendering elevates both form and function.
          <br /><br />
          This setup integrates naturally into my <strong>Hyprland</strong> environment, creating a cohesive and responsive ecosystem tailored to my workflow. Everything I need is just a few keystrokes away.
        </p>
      </div>
    </>
  )
}
