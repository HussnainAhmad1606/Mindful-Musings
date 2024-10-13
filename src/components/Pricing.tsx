import React from 'react'

function Pricing({children}:any) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Mindful Musings PRO!</h2>
    <h2 className="text-4xl font-bold my-5">$5/Month</h2>
    <ul>
        <li>✅ Premium articles</li>
        <li className='my-4'>✅ In Depth Discussions with Community</li>
        <li>✅ Discussions with Author</li>
    </ul>
    <div className="mt-5 card-actions justify-end">
      {children}
    </div>
  </div>
</div>
  )
}

export default Pricing