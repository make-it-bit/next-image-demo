import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col m-4 min-h-screen py-2 gap-4">
        <h1 className="text-center bg-red-400">
          Next.js Image: Optimizing Your Web Experience
        </h1>
        <h2 className="bg-blue-400">
          Next.js Image improves modern web development by ballancing between
          web performance and visual appeal. It enhances speed and visual
          fidelity, making it an indispensable tool for crafting web experiences
          that seamlessly blend efficiency and aesthetics.
        </h2>
        <div className="flex flex-col gap-4 bg-green-400">
          <div>
            <h3>
              Next.js Image enhances web performance through several techniques.
            </h3>
            <h4>
              It optimizes images by automatically selecting the appropriate
              size and format based on the user's device, reducing data
              transfer.
            </h4>
            <h4>
              It employs lazy loading, loading images only as they enter the
              viewport, which speeds up initial page load times.
            </h4>
            <h4>
              Priority loading can be assigned to vital images, further
              improving perceived performance by ensuring crucial content loads
              swiftly.
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
}
