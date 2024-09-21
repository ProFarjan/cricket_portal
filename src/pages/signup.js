import Image from "next/image";
import { useRouter } from 'next/router';
import Link from "next/link";
import FormGroup from "../components/contact/FormGroup";
import HeadMeta from "../components/elements/HeadMeta";
import Alert from 'react-bootstrap/Alert';
import { useRef, useState } from 'react';
import { signUpRequest } from "../api/api";

const Result = ({ message, type }) => {
    return (
        <Alert variant={type} className="success-msg">
            {message}
        </Alert>
    )
}

const ComimgSoon = () => {
    const router = useRouter()
    const form = useRef();

    const [result, showresult] = useState(false);
    const [resMessageType, setResMessageType] = useState('info');
    const [resMessage, setResMessage] = useState('');

    const signUp = async (e) => {
        e.preventDefault();
        console.log()
        await signUpRequest({
            name: form.current.name.value,
            phone: form.current.phone.value,
            email: form.current.email.value,
            password: form.current.password.value,
            confirm_password: form.current.re_type_password.value,
        }).then((res) => {
            if (res.data[0] == 'success') {
                setResMessageType('success');
                setResMessage(res.data[1]);
                form.current.reset();
                router.push('/');
            } else {
                setResMessage(res.data[1]);
                setResMessageType('warning');
            }
            showresult(true);
        });
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        <>
            <HeadMeta metaTitle="Under Construction" />
            <div className="under-construction-banner" style={{ backgroundImage: "url(images/others/under-construction-banner.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="under-construction-inner-content">
                                {/* End of .brand-logo-container */}
                                <div className="newsletter-content">
                                    <div className="text-left">
                                        <h2 className="h5 m-b-xs-10">Are You Interested?</h2>
                                        <p className="m-b-xs-20">Be the first to know when we launch.
                                            <br />Sign up for this website updates using the form below.</p>
                                    </div>
                                    {/* End of .section-title */}
                                    <div className="subscription-form-wrapper">
                                        <form className="subscription-form row no-gutters" ref={form} onSubmit={signUp} autoComplete="off">
                                            <FormGroup pClass="col-auto width100" type="text" label="Name" name="name" />
                                            <FormGroup pClass="col-auto width100" type="text" label="Phone" name="phone" />
                                            <FormGroup pClass="col-auto width100" type="email" label="Email" name="email" />
                                            <FormGroup pClass="col-auto width100" type="password" label="Password" name="password" />
                                            <FormGroup pClass="col-auto width100" type="password" label="Re-type Password" name="re_type_password" />

                                            <p className="m-b-xs-15 policy-txt">By clicking Sign Up, you agree to our <Link href="#">Terms</Link>, <Link href="#">Privacy Policy</Link> and <Link href="#">Cookies Policy</Link>. You may receive SMS notifications from us and can opt out at any time.</p>

                                            <div className="m-b-xs-0 col-auto">
                                                <button className="btn btn-primary">SIGNUP</button>
                                            </div>
                                            <br/>
                                            <div className="col-12 form-group">
                                                {result ? <Result message={resMessage} type={resMessageType} /> : null}
                                            </div>

                                        </form>
                                        {/* End of .subscription-form */}
                                    </div>
                                    {/* End of .subscription-form-wrapper */}
                                </div>
                            </div>
                        </div>
                        {/* End of .col-lg-8 */}
                    </div>
                    {/* End of .row */}
                </div>
                {/* End of .container */}
            </div>

        </>
    );
}

export default ComimgSoon;