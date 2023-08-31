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
        <div className="bg-pink-400 flex flex-col gap-2">
          <div className="bg-gray-300 p-4">
            <h3>
              <b className="border-b-2 border-gray-800">PNG or WebP</b>
            </h3>
            <h4>
              WebP is a modern image format developed by Google that offers
              significantly better compression than traditional formats like
              JPEG and PNG, while maintaining high image quality.
            </h4>
            <h4>
              <b>Smaller File Sizes</b>
              <p>
                WebP images are generally smaller in size compared to JPEG and
                PNG while maintaining the same or better image quality.
              </p>
            </h4>
            <h4>
              <b>Improved Compression</b>
              <p>
                WebP utilizes advanced compression techniques, such as lossless
                and lossy compression, to achieve better image compression
                ratios. This is especially beneficial for websites with a lot of
                images, as it reduces the overall page size.
              </p>
            </h4>
            <h4>
              <b>Wide Browser Support</b>
              <p>
                Major browsers like Chrome, Firefox, Edge, and Opera do support
                WebP. For browsers that don't support WebP, Next.js Image can
                automatically provide fallback images in other formats.
              </p>
            </h4>
            <h4>
              <b>Performance and SEO</b>
              <p>
                Using WebP images contributes to improved website performance,
                reducing server load times. Faster-loading pages can positively
                impact search engine rankings and the user experience.
              </p>
            </h4>
          </div>
          <div className="bg-gray-300 p-4">
            <h3>
              <b className="border-b-2 border-gray-800">"sizes" attribute</b>
            </h3>
            <h4>
              The "sizes" attribute defines a set of media conditions (such as
              screen width) and corresponding image source sizes. The format is
              "media-condition-1 length-1, media-condition-2 length-2, ....""
            </h4>
            <h4>
              <b>How It Works</b>
              <p>
                When a browser encounters an {'<Image>'} tag with the "srcset"
                and "sizes" attributes, it uses the "sizes" attribute to
                determine how much space the image will occupy within its
                containing element at different screen widths.
              </p>
            </h4>
            <h4>
              <b>Why use "sizes"?</b>
              <p>
                By using the "sizes" attribute, you can ensure that the correct
                image source is loaded for each device's screen size, optimizing
                the performance and user experience of your responsive images.
              </p>
            </h4>
          </div>
          <div className="bg-gray-300 p-4">
            <h3>
              <b className="border-b-2 border-gray-800">
                Lazy Loading vs. Priority Loading
              </b>
            </h3>
            <h4>
              <b>Lazy loading</b>
              <p>
                Use lazy loading for images that are not immediately visible on
                the user's screen when the page loads. Lazy loading reduces
                initial load times and saves bandwidth by loading images only
                when they are needed.
              </p>
            </h4>
            <h4>
              <b>Priority loading</b>
              <p>
                Use priority loading for images that are crucial to the initial
                user experience. This includes hero images, banners, or other
                key visuals that define your website's identity. By using the
                priority attribute with Next.js Image, you ensure that these
                important images are loaded with higher priority.
              </p>
            </h4>
          </div>
          <div className="bg-gray-300 p-4">
            <h3>
              <b className="border-b-2 border-gray-800">Case studies</b>
            </h3>
            <h4>
              <b>bitropia.com</b>
              <p className="flex flex-col gap-4">
                <Image
                  src="/bitropia_lighthouse_scores.png"
                  width={1000}
                  height={384}
                />
                <Image src="/bitropia_blog.png" width={1000} height={384} />
              </p>
              <b>webtailor.ee</b>
              <p>*add lighthouse scores here?*</p>
            </h4>
          </div>
        </div>
        <div className="bg-gray-300 p-4">
          <b className="border-b-2 border-gray-800">
            Image attributes examples
          </b>
          <div>
            <div>
              <p>
                Test this sample image with different {'<Image>'} attributes.
              </p>
              <p>
                Original image ratio is 600x400, format .jpg and size of 29KB
              </p>
              <Image src="/sample.jpg" width={600} height={400} />
            </div>
            <div className="mt-12">
              <p>
                Changing <b>width</b> and <b>height</b> properties
              </p>
              <div>
                <p className="bg-gray-400 p-2 mt-6">
                  width: 600; height: 400 (original)
                </p>
                <Image src="/sample.jpg" width={600} height={400} />
              </div>
              <div>
                <p className="bg-gray-400 p-2 mt-6">
                  width: 1200; height: 800 (two times bigger)
                </p>
                <Image src="/sample.jpg" width={1200} height={800} />
              </div>
              <div>
                <p className="bg-gray-400 p-2 mt-6">
                  width: 300; height: 200 (two times smaller)
                </p>
                <Image src="/sample.jpg" width={300} height={200} />
              </div>
            </div>
            <div className="mt-12">
              <p>
                Setting incorrect ratio of <b>width</b> and <b>height</b>
              </p>
              <div>
                <p className="bg-gray-400 p-2 mt-6">
                  width: 400; height: 600 (original is 600x400)
                </p>
                <Image src="/sample.jpg" width={400} height={600} />
              </div>
              <div>
                <p className="bg-gray-400 p-2 mt-6">width: 500; height: 10</p>
                <Image src="/sample.jpg" width={500} height={10} />
              </div>
            </div>
            <div className="mt-12">
              <p>
                Setting priority to <b>true</b> and <b>false</b>
              </p>
              <div>
                <p className="bg-gray-400 p-2 mt-6">
                  width: 600; height: 400, priority: true
                </p>
                <Image
                  src="/sample.jpg"
                  width={600}
                  height={400}
                  priority={true}
                />
              </div>
              <div className="flex flex-col">
                <p className="bg-gray-400 p-2 mt-6">
                  width: 600; height: 400, priority: false
                </p>
                <Image
                  src="/sample.jpg"
                  width={600}
                  height={400}
                  priority={false}
                />
              </div>
            </div>
            <div className="mt-12">
              <p>
                Using <b>alt</b> property. Alt is shown when image fails to
                load.
              </p>
              <div>
                <p className="bg-gray-400 p-2 mt-6">no alt property</p>
                <Image src="/wrong_path.jpg" width={600} height={400} />
              </div>
              <div>
                <p className="bg-gray-400 p-2 mt-6">
                  alt: "some alternative text"
                </p>
                <Image
                  src="/wrong_path.jpg"
                  width={600}
                  height={400}
                  alt={'some alternative text'}
                />
              </div>
            </div>
            <div className="mt-12">
              <p>
                Generating different source sets with <b>sizes</b> property.
              </p>
              <div>
                <p className="bg-gray-400 p-2 mt-6">
                  sizes property is not set
                </p>
                <Image src="/sample.jpg" width={600} height={400} />
              </div>
              <div>
                <p className="bg-gray-400 p-2 mt-6">
                  sizes="(min-width: 700px) 600px, calc(95.79vw - 51px) width=
                  {600} height={400}"
                </p>
                <Image
                  src="/sample.jpg"
                  width={600}
                  height={400}
                  sizes="(min-width: 700px) 600px, calc(95.79vw - 51px)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
