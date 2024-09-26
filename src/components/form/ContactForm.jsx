import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const ContactForm = () => {
    // Validation schema for form fields
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required').email('Entered value does not match email format'),
        sendMessage: Yup.string().required('Please leave us a message')
    });

    // Hook form setup with validation
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    // Form submit handler
    const onSubmit = (data, e) => {
        console.log('Message submitted: ' + JSON.stringify(data));

        // Check if map and marker instances are available
        if (window.mapInstance && window.markerInstance) {
            // Update the map's view and marker location to T-Hub
            window.mapInstance.setView([17.4474, 78.3762], 13);
            window.markerInstance.setLatLng([17.4474, 78.3762]);
            window.markerInstance.bindPopup('T-Hub (Hyderabad)').openPopup();
            console.log("Map and marker updated to T-Hub location.");
        } else {
            console.warn('Map instance or marker instance not found');
        }

        // Reset the form after submission
        e.target.reset();
    };

    return (
        <Fragment>
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    {/* Name Field */}
                    <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <label>Name*</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="name"
                                {...register('name')}
                                className={`${errors.name ? 'is-invalid' : ''}`}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name?.message}</div>}
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <label>Email*</label>
                            <input
                                type="text"
                                placeholder="your-email@example.com"
                                name="email"
                                {...register('email')}
                                className={`${errors.email ? 'is-invalid' : ''}`}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email?.message}</div>}
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <textarea
                                placeholder="Your message*"
                                name="sendMessage"
                                {...register('sendMessage')}
                                className={`${errors.sendMessage ? 'is-invalid' : ''}`}
                            />
                            {errors.sendMessage && <div className="invalid-feedback">{errors.sendMessage?.message}</div>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12">
                        <button className="btn-eight ripple-btn">Send Message</button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default ContactForm;
