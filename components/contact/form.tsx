'use client'
import { sendEmailMessage } from '@/app/actions/contact'
import { useActionState, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendEmailMessage, {
    success: false,
    message: '',
    errors: undefined
  })

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {

    if(state.success) {
      setIsVisible(true)
      formRef.current?.reset()

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [state.success, state.message])

  return (<form action={action} className='h-fit w-full bg-nero rounded-sm p-4'>
    <div>
      <label htmlFor="name" className='text-header-gradient font-bold uppercase text-sm lg:text-lg'>YOUR FULL NAME</label>
      <div className={twMerge('bg-brand-gradient p-0.75 rounded-sm mt-1', pending ? 'opacity-50' : '')}>
        <input
          disabled={pending}
          type="text"
          name='name'
          placeholder='Enter your full name here'
          className='w-full disabled:cursor-not-allowed text-sm lg:text-base py-2 text-ghost-white px-2 bg-nero'
        />
      </div>
      {state?.errors?.name && (
        <p className='text-red-500 font-semibold text-base'>{state.errors.name[0]}</p>
      )}
    </div>
    <div className='mt-2'>
      <label htmlFor="name" className='text-header-gradient font-bold uppercase text-sm lg:text-lg'>EMAIL ADDRESS</label>
      <div className={twMerge('bg-brand-gradient p-0.75 rounded-sm mt-1', pending ? 'opacity-50' : '')}>
        <input
          disabled={pending}
          type="text"
          name='email'
          placeholder='Enter your email address here'
          className='w-full disabled:cursor-not-allowed text-sm lg:text-base py-2 text-ghost-white px-2 bg-nero'
        />
      </div>
      {state?.errors?.email && (
        <p className='text-red-500 font-semibold text-base'>{state.errors.email[0]}</p>
      )}
    </div>
    <div className='mt-2'>
      <label htmlFor="name" className='text-header-gradient font-bold uppercase text-sm lg:text-lg'>SUBJECT</label>
      <div className={twMerge('bg-brand-gradient p-0.75 rounded-sm mt-1', pending ? 'opacity-50' : '')}>
        <input
          disabled={pending}
          type="text"
          name='subject'
          placeholder='Enter your email subject here'
          className='w-full disabled:cursor-not-allowed text-sm lg:text-base py-2 text-ghost-white px-2 bg-nero'
        />
      </div>
      {state?.errors?.subject && (
        <p className='text-red-500 font-semibold text-base'>{state.errors.subject[0]}</p>
      )}
    </div>
    <div className='mt-2'>
      <label htmlFor="name" className='text-header-gradient font-bold uppercase text-sm lg:text-lg'>MESSAGE</label>
      <div className={twMerge('bg-brand-gradient p-0.75 rounded-sm mt-1', pending ? 'opacity-50' : '')}>
        <textarea
          disabled={pending}
          name='message'
          placeholder='Enter you message here'
          className='w-full py-2 disabled:cursor-not-allowed text-sm lg:text-base text-ghost-white px-2 h-32 lg:h-48 bg-nero resize-none'
        ></textarea>
      </div>
    </div>
    {state?.errors?.message && (
      <p className='text-red-500 font-semibold text-base'>{state.errors.message[0]}</p>
    )}
    <button disabled={pending} className='mt-8 disabled:bg-slate-500 disabled:text-white disabled:opacity-85 disabled:cursor-not-allowed bg-vivid-sky-blue w-full py-2 rounded-sm font-bold text-nero cursor-pointer hover:bg-vivid-sky-blue/75 transition-colors duration-300'>{pending ? 'SENDING...' : 'SUBMIT'}</button>
    {state.success && isVisible && (
      <div className="mt-2 font-semibold text-green-500 rounded-lg">
        {state.message}
      </div>
    )}
    <p className='mt-2 text-red-500 font-semibold text-base'>Please avoid sending sensitive data!</p>
  </form>)
}
