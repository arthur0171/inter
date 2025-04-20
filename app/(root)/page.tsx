import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'

const Homepage = () => {
  return (
    <>
      <section className='card-cta'>
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with Ai-Powered practice and feedback</h2>
          <p className='text-lg'>
            practice real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview"> start an interview</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robot icon" width={400} height={400} className="max-sm:hidden" />
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>
        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key ={interview.id}/>
          ))}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>
        {dummyInterviews.map((interview) => (
          <InterviewCard {...interview} key ={interview.id} />
        ))}

        <div className="interviews-section">
        </div>
      </section>


    </>

  )
}

export default Homepage