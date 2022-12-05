import React from 'react'
import DefaultLayoutHoc from '../layout/Default.layout'

//Components 
import Poster from "../components/Poster/Poster.Component";
import PlayFilter from '../components/PlayFilters/PlayFilters.Component';


const PlayPage = () => {
  return (
    <>
    <div className="container mx-auto px-4 my-10">
      <div className="w-full flex flex-col flex-col-reverse lg:flex-row-reverse gap-4">
        <div className="lg:w-3/4 p-4 bg-white rounded">
          <h2 className='text-2xl font-bold mb-4'>Plays in Delhi NCR</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster 
              isPlay = {true}
              src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-gaurav-kapoor-live-0-2022-6-17-t-9-39-43.jpg' 
              title='Gaurav Kapoor LIVE' subtitle='Comedy Shows | 18yrs + | 1hr' />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster 
              isPlay = {true}
              src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-oh-hello-by-rahul-dua-india-tour-0-2022-10-28-t-15-14-10.jpg' 
              title='Gaurav Kapoor LIVE' subtitle='Comedy Shows | 18yrs + | 1hr' />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster 
              isPlay = {true}
              src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-bismil-ki-mehfil-new-year-s-eve-2023-0-2022-11-22-t-8-54-41.jpg' 
              title='Gaurav Kapoor LIVE' subtitle='Comedy Shows | 18yrs + | 1hr' />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster 
              isPlay = {true}
              src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-gaurav-kapoor-live-0-2022-6-17-t-9-39-43.jpg' 
              title='Gaurav Kapoor LIVE' subtitle='Comedy Shows | 18yrs + | 1hr' />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster 
              isPlay = {true}
              src='https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-live-screening-fifa-world-cup-0-2022-11-29-t-8-23-49.jpg' 
              title='Gaurav Kapoor LIVE' subtitle='Comedy Shows | 18yrs + | 1hr' />
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className='text-2xl font-bold mb-4'>Filters</h2>
          <div>
            <PlayFilter title="Date" 
            tags={["Today", "Tomorrow","This Weekend"]}
            />
          </div>
          <div>
            <PlayFilter title="Language" 
            tags={["English", "Hindi","Tamil"]}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DefaultLayoutHoc(PlayPage);