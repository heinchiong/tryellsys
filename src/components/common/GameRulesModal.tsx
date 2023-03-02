/**
 * import react packages
 */
import { Fragment, useState } from 'react';

/**
 * import packages
 */
import { Dialog, Transition } from '@headlessui/react';

type GameRulesModalProps = {
  isGameRulesModalOpen: boolean;
  setIsGameRulesModalOpen: (value: boolean) => void;
  t: any;
}

const GameRulesModal = ({ isGameRulesModalOpen, setIsGameRulesModalOpen, t }: GameRulesModalProps) => {
  const closeGameRulesModal = () => {
    setIsGameRulesModalOpen(false);
  }

  return (
    <Transition appear show={isGameRulesModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeGameRulesModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold leading-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                >
                  {t('GameRules.title')}
                </Dialog.Title>
                <div className="mt-2">
                  <ul className="list-disc text-gray-500 space-y-3 p-5 text-base">
                    <li>{t('GameRules.rule1')}</li>
                    <li>{t('GameRules.rule2')}</li>
                    <li>{t('GameRules.rule3')}</li>
                    <li>{t('GameRules.rule4')}</li>
                    <li>{t('GameRules.rule5')}</li>
                  </ul>
                </div>

                <div className="mt-4 text-center">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 text-sm font-medium focus:outline-none ring-0 text-white"
                    onClick={closeGameRulesModal}
                  >
                    {t('GameRules.thanks')}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default GameRulesModal;