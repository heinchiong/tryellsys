const ComingSoonSection = ({ t }: any) => {
  return (
    <div id="soon" className="bg-white">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
            {t('ComingSoonSection.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            {t('ComingSoonSection.description')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              className="rounded-md bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-0 pointer-events-none"
            >
              {t('HomeSection.stayTuned')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoonSection;