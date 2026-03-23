import { twMerge } from 'tailwind-merge'
export default function Ellipse({ ellipseClass = '' } : { ellipseClass?: string}) {
    return (
    <div className={twMerge('z-10 size-111.25 bg-vivid-sky-blue/30 blur-[100px] absolute overflow-x-hidden rounded-full', ellipseClass)}></div>
  )
}
