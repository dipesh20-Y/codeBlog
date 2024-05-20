import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative  w-full">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">About</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <div className="hover:underline" href="#">
                    Our Story
                  </div>
                </li>
                <li>
                  <div className="hover:underline" href="#">
                    Team
                  </div>
                </li>
                <li>
                  <div className="hover:underline" href="#">
                    Careers
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Content</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <div className="hover:underline" href="#">
                    Blog
                  </div>
                </li>
                <li>
                  <div className="hover:underline" href="#">
                    Tutorials
                  </div>
                </li>
                <li>
                  <div className="hover:underline" href="#">
                    Resources
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Community</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <div className="hover:underline" href="#">
                    Forum
                  </div>
                </li>
                <li>
                  <div className="hover:underline" href="#">
                    Events
                  </div>
                </li>
                <li>
                  <div className="hover:underline" href="#">
                    Newsletter
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Contact</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <div className="hover:underline" href="#">
                    Email
                  </div>
                </li>
                <li>
                  <div className="hover:underline" href="#">
                    Twitter
                  </div>
                </li>
                <li>
                  <div className="hover:underline" href="#">
                    Instagram
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400">
            <p className='text-center'>© 2024 Blog App. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
