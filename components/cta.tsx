import SubscribeForm from "@/components/subscribe-form";

export default function Cta() {
  return (
    <section>
      <div className="pb-12 md:pb-20">
        <div className="px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 border-t pt-12 text-center shadow-[inset_0_1px_0_0_--theme(--color-white/.2)] [border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.72),transparent)1] md:pt-20 dark:shadow-none dark:[border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.16),transparent)1]">
              <h2 className="font-inter-tight pb-4 text-4xl font-bold text-gray-800 md:text-5xl dark:bg-linear-to-b dark:from-indigo-200 dark:to-gray-200 dark:bg-clip-text dark:text-transparent">
                Become part of our community
              </h2>
            </div>
          </div>

          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
