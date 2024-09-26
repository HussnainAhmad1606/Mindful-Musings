import React from 'react'

function SubscribeNewsletter() {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}>
      <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content flex-col lg:flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-center text-white text-5xl font-bold">Subscribe to Newsletter!</h1>
      <p className="text-center text-white py-6">
      Get the latest articles, insights, and personal reflections delivered straight to your inbox. No spam, just thoughtful content to spark your curiosity and inspire your day
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default SubscribeNewsletter