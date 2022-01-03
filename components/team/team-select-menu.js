import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import Image from 'next/image'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TeamSelectMenu ({ items = [], onChange }) {
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => onChange(selectedItem), [selectedItem])

  return (
    <Listbox value={selectedItem} onChange={setSelectedItem}>
      <div className="mt-1 relative">
        <Listbox.Button className="relative w-full bg-dark-400 border border-[#34343C] pl-3 pr-10 py-2 text-left focus:outline-none sm:text-sm">
          {selectedItem && (
            <span className="flex items-center">
              <Image
                src={selectedItem.team.logo ?? '/assets/images/agent-default.svg'}
                className="flex-shrink-0 h-6 w-6 rounded-full"
                width={24}
                height={24}
                alt=""
              />
              <span className="ml-3 block truncate text-white">{selectedItem.team.name}</span>
            </span>
          )}
          {!selectedItem && (
            <span className="h-6 flex items-center text-white">Select team</span>
          )}
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
          </span>
        </Listbox.Button>

        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute z-10 mt-1 w-full bg-dark-900 shadow-lg max-h-56 text-base ring-1 ring-black ring-opacity-20 overflow-auto focus:outline-none sm:text-sm">
            {items.map((item) => (
              <Listbox.Option
                key={item.teamId}
                className={({ active }) =>
                  classNames(
                    active ? 'text-white bg-dark-500' : 'text-[#A7A7AD]',
                    'select-none relative py-2 pl-3 pr-9 cursor-pointer focus:outline-none'
                  )
                }
                value={item}
              >
                {({ selected, active }) => (
                  <>
                    <div className="flex items-center">
                      <Image
                        alt=""
                        src={item.team.logo ?? '/assets/images/agent-default.svg'}
                        className="flex-shrink-0 h-8 w-8"
                        width={32}
                        height={32}
                      />
                      <span className={classNames(selected ? 'font-bold' : 'font-normal', 'ml-3 block truncate')}>
                        {item.team.name}
                      </span>
                    </div>

                    {selected
                      ? (
                      <span
                        className={classNames(
                          active ? 'text-white' : 'text-[#A7A7AD]',
                          'absolute inset-y-0 right-0 flex items-center pr-4'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                        )
                      : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
