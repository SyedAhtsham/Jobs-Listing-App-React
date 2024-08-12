import React from 'react'
import Card from './Card'

const HomeCards = () => {
  return (
      <>
          {/* <!-- Developers and Employers --> */}
          <section className="py-4">
              <div className="container-xl lg:container m-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                      {/* Card for develpoers   */}
                      <Card title="For Developers" subtitle="Browse our React jobs and start your career today" btnText="Browse Jobs" toLink = "/jobs"/>
                      {/* Card for employers   */}
                      <Card bg="bg-indigo-100" title="For Employers" subtitle="List your job to find the perfect developer for the role" btnText="Add Job" btnColor="bg-indigo-500" btnHoverColor='hover:bg-indigo-600' toLink = "/add-job"/>
                    
                  </div>
              </div>
          </section>
    </>
  )
}

export default HomeCards