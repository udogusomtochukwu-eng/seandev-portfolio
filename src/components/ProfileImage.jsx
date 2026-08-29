import MyPicture from "../../public/images/MyPicture.jpeg";
const HERO_PORTRAIT = MyPicture;

/**
 * ProfileImage — Sean's real portrait inside the existing approved frame.
 *
 * The photo is intentionally rendered with object-cover so the portrait
 * remains visually substantial in the hero, but the object-position is
 * biased upward to keep the face and upper body natural inside the fixed
 * frame across desktop and mobile widths.
 */
export default function ProfileImage() {
  return (
    <div className="relative w-full max-w-[24rem] sm:max-w-[26rem] lg:max-w-none">
      {/* Restrained offset frame for a touch of depth */}
      <div
        aria-hidden="true"
        className="-right-4 sm:-right-5 -bottom-4 sm:-bottom-5 absolute border border-accent/25 rounded-[2rem] w-full h-full"
      />

      {/* Hairline that visually ties the image to the text column */}
      <span
        aria-hidden="true"
        className="hidden lg:block top-1/2 -left-12 absolute w-12"
      >
        <span className="block bg-accent/25 w-full h-px" />
        <span className="top-1/2 -left-1 absolute bg-accent/80 rounded-full size-1.5 -translate-y-1/2" />
      </span>

      <figure className="relative bg-ink-soft border border-white/10 rounded-[2rem] lg:h-[min(74vh,40rem)] aspect-[4/5] lg:aspect-auto overflow-hidden">
        <img
          src={HERO_PORTRAIT}
          alt="Portrait of Sean"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-[center_28%] object-cover"
        />

        {/* Viewfinder-style corner marks */}
        <span
          aria-hidden="true"
          className="top-3 left-3 absolute border-accent/45 border-t-2 border-l-2 size-5"
        />
        <span
          aria-hidden="true"
          className="top-3 right-3 absolute border-accent/45 border-t-2 border-r-2 size-5"
        />
        <span
          aria-hidden="true"
          className="bottom-3 left-3 absolute border-accent/45 border-b-2 border-l-2 size-5"
        />
        <span
          aria-hidden="true"
          className="right-3 bottom-3 absolute border-accent/45 border-r-2 border-b-2 size-5"
        />
      </figure>
    </div>
  );
}
