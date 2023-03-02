/**
 * import react packages
 */
import React, { useEffect, useState } from 'react';

/**
 * import next packages
 */
import Image from 'next/image';

/**
 * import packages
 */
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

const postData = (url: string, data: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(url, data);
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

type FormData = {
  numberOfPeople: string;
};

const CardDrawingSimulation = ({ t }: any) => {

  const [hands, setHands] = useState<string[][]>([]);

  const submitDrawSchema = z.object({
    numberOfPeople: z.string().min(1, { message: t('ErrorMessage.required') }).refine((value) => {
      return !isNaN(parseInt(value)) && parseFloat(value) % 1 === 0 && /^[0-9]\d*$/.test(value);
    }, { message: t('ErrorMessage.numberOnly') }).refine(value => parseInt(value) > 0, { message: t('ErrorMessage.positiveNumberOnly') })
  }).strict();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(submitDrawSchema)
  });

  const onSubmitDraw: SubmitHandler<FormData> = async (data) => {
    try {
      const result: any = await postData('/api/draw', data);
      console.log(result['data']);
      setHands(result['data']);
      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    if (isSubmitting) {
      setHands([])
    }

    return () => { };
  }, [isSubmitting]);

  return (
    <>
      <div id="draw" className="bg-gray-900 py-24 sm:py-32 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-400 animate-bounce">{t('CardDrawingSimulation.letsStartNow')}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{t('CardDrawingSimulation.title')}</p>
            <p className="mt-61 text-base text-gray-300 mt-1">
              {t('CardDrawingSimulation.description')}
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-8">
          <div className="flex items-center sm:justify-center mx-auto max-w-7xl px-6 lg:px-8">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  {t('CardDrawingSimulation.numberOfPeople')}
                </label>
                <div className="mt-1 flex flex-row space-x-4 items-center">
                  <input
                    type="text"
                    className="block appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
                    placeholder={t('CardDrawingSimulation.enterNumberOfPeople')}
                    {...register('numberOfPeople')}
                  />
                  <button
                    type="button"
                    className="flex justify-center rounded-md border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-4 text-sm font-medium text-white shadow-sm ring-0"
                    onClick={handleSubmit(onSubmitDraw)}
                    disabled={isSubmitting}
                  >
                    {t('CardDrawingSimulation.draw')}
                  </button>
                </div>
                {errors.numberOfPeople && (
                  <span className="text-red-500 text-sm mt-2 block">{errors.numberOfPeople?.message}</span>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl px-6 lg:px-8 flex flex-col">
          {hands && hands.length > 0 && (
            <>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 mb-8 font-medium">{t('CardDrawingSimulation.drawResult')}</span>
              <ul className="space-y-3">
                {hands.map((hand, handIndex) => (
                  <li key={handIndex} className="flex flex-col font-semibold space-y-2">
                    <span className="mr-2 text-white">{t('CardDrawingSimulation.people')} {handIndex + 1}.</span>
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      {hand.length ? hand.map((card: any, cardIndex) => card.sv).join(', ') : 'The deck is empty, and there are no more cards left to draw.'}
                    </span>
                    <div className="flex flex-row flex-wrap pb-8">
                      {
                        hand.length ? hand.map((card: any, cardIndex) => (
                          <Image
                            key={cardIndex}
                            src={card.image}
                            width={50}
                            height={50}
                            alt={card.sv}
                          />
                        )) : null
                      }
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default CardDrawingSimulation;