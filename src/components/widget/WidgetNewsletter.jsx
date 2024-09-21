import { useRef, useEffect } from 'react';
import FormGroup from '../contact/FormGroup';
import Link from 'next/link';

const WidgetNewsletter = () => {

    return (
      <div className="newsletter-widget weekly-newsletter p-0 m-b-xs-15">
        <div className="newsletter-content card p-4">
          <div className="section-title">
            <h3 className="axil-title">Sign In or Sign Up</h3>
            <p className="mid m-t-xs-10 m-b-xs-20">
              Enjoy our exclusive items
            </p>
          </div>
          {/* End of .section-title */}
          <div className="subscription-form-wrapper">
            <form action="#" className="subscription-form" autoComplete='off'>
              <FormGroup pClass="form-group-small m-b-xs-20" type="email" name="subscription-email-2" label="Enter Email" />
              <FormGroup pClass="form-group-small m-b-xs-20" type="password" name="subscription-email-2" label="Enter Password" />
              <div className="m-b-xs-0">
                <button className="btn btn-primary btn-small">Log in</button>
                <Link href='/signup'><span className="btn btn-info btn-small">Sign Up</span></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
 
export default WidgetNewsletter;