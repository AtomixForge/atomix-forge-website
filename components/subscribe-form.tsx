import Image from "next/image";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";

export default function SubscribeForm() {
  return (
    <>
      <div className="relative mb-11 flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:shadow-xs before:shadow-white/20 before:[border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.8),transparent)1] after:h-px after:w-full after:border-b after:shadow-xs after:shadow-white/20 after:[border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.8),transparent)1] dark:before:shadow-none dark:before:[border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.16),transparent)1] dark:after:shadow-none dark:after:[border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.16),transparent)1]">
        <div className="mx-auto w-full max-w-xs shrink-0">
          <form className="relative">
            {/* Border with dots in corners */}
            <div
              className="absolute -inset-3 -z-10 rounded-lg bg-indigo-500/15 before:absolute before:inset-y-0 before:left-0 before:w-[15px] before:[background-image:radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_1.5px,transparent_1.5px)] before:bg-[length:15px_15px] before:[background-position:top_center,bottom_center] before:bg-no-repeat after:absolute after:inset-y-0 after:right-0 after:w-[15px] after:[background-image:radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_1.5px,transparent_1.5px)] after:bg-[length:15px_15px] after:[background-position:top_center,bottom_center] after:bg-no-repeat dark:bg-transparent dark:bg-linear-to-b dark:from-gray-700/80 dark:to-gray-700/70 dark:before:[background-image:radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px)] dark:after:[background-image:radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px)]"
              aria-hidden="true"
            />
            <div className="space-y-3">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500/70 dark:text-gray-400/70">
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={14}
                    >
                      <path d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    className="form-input w-full pr-4 pl-10 text-sm"
                    type="email"
                    placeholder="Your email..."
                    required
                  />
                </div>
              </div>
              <div>
                <button className="btn w-full bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                  Join The Waitlist
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          {/* Avatars */}
          <ul className="mb-4 flex justify-center -space-x-2">
            <li>
              <Image
                className="rounded-full"
                src={Avatar01}
                width={32}
                height={32}
                alt="Avatar 01"
              />
            </li>
            <li>
              <Image
                className="rounded-full"
                src={Avatar02}
                width={32}
                height={32}
                alt="Avatar 02"
              />
            </li>
            <li>
              <Image
                className="rounded-full"
                src={Avatar03}
                width={32}
                height={32}
                alt="Avatar 03"
              />
            </li>
            <li>
              <Image
                className="rounded-full"
                src={Avatar04}
                width={32}
                height={32}
                alt="Avatar 04"
              />
            </li>
            <li>
              <Image
                className="rounded-full"
                src={Avatar05}
                width={32}
                height={32}
                alt="Avatar 05"
              />
            </li>
          </ul>
          <p className="text-sm text-gray-500">
            Join the{" "}
            <span className="font-medium text-gray-700 dark:text-gray-200">
              2.000+
            </span>{" "}
            members who have already signed up.
          </p>
        </div>
      </div>
    </>
  );
}
