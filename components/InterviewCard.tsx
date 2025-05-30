import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image';
import {getRandomInterviewCover} from "@/lib/utils";
import { Button } from './ui/button';
import Link from 'next/link';
import DisplayTechIcons from './DisplayTechIcons';

const InterviewCard = ({id, userId, role, type, techstack, 
    createdAt}:InterviewCardProps) => {
        const feedback = null as Feedback | null;
        const normalizedtype = /mix/gi.test(type) ? 'Mixed' : type;
        const formattedDate = dayjs(feedback?.createdAt || createdAt || 
            Date.now()).format('MMM D, YYYY');

  return (
    <div className="card-border w-[360] max-sm:w-full min-h-96">
        <div className="card-interview">
            <div>
                <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
                    <p className="badge-text">{normalizedtype}</p>
                </div>

                <Image src={getRandomInterviewCover()} alt="cover image" width={90} height={90}
                className="rounded-full object-fit size-[90]" />
                <h3 className='mt-5 caitalize'>
                    {role} Interview
                </h3>

                <div className='flex flex-row gap-5 mt-3'>
                    <div className='flex flex-row gap -2'>
                    <Image src="/calendar.svg" alt="calendar" width={22} height={22} />
                    <p>{formattedDate}</p>
                    </div>

                    <div className="flex flex-row gap-2 item-center">
                        <Image src="/star.svg" alt="star" width={22} height={22} />
                        <p>{feedback?.totalScore || '--'}/100 </p>
                    </div>
                </div>
                <p className='line-clamp-2 mt-5'>
                    {feedback?.finalAssessment || "you haven't taken the interview yet Take it now to improve your skills."}
                </p>
            </div>

            <div className='flex flex-row justify-between'>
                <DisplayTechIcons techStack={techstack} />

                <Button className='btn-primary'>
                   <Link
                   href={feedback ? `/interview/${id}/feedback` : `/interview/${id}`}
                 >
                   {feedback ? 'Check Feedback' : 'View Interview'}
                 </Link>
                </Button> 
            </div>
        </div>
    </div>
  )
}

export default InterviewCard