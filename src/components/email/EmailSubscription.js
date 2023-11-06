import React from 'react';
import './email.css'

const EmailSubscription = () => {
  return (
    <section className="email">
    <div>
      <h1>WE'RE</h1>
    </div>
    <div>
    <h2>COMING</h2>
    </div>
    <div>
      <h2>SOON</h2>
    </div>
    <div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem psum has been the industry’s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
      <form>
        <input type="email" placeholder="Email address" />
        <button>Subscribe</button>
      </form>
    </section>
  );
};

export default EmailSubscription;
