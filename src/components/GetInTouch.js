import React from 'react';

const GetInTouch = () => {
	return (
		<>
			<div className='signup-wrapper'>
				<div className='container container-expanded--left'>
					<div className='postBox'>
						<div className='sec-content'>
							<h3 className='heading3 upperCase sc-title'>
								GET IN TOUCH
							</h3>
							<p className='sc-des'>
								For enquiries, please complete the contact form
								and a member of the team will be in touch.
							</p>
							<div className='form-wrapper'>
								<form
									action=''
									className='js-form-initValidation'
									autoComplete='off'
								>
									<div className='form-group selectField'>
										<label className='label'>
											Type of enquiry
										</label>
										<div className='select2-box select2-outline'>
											<select
												className='js-select2'
												data-placeholder='Pick a type'
												data-className='c-single'
												required
												name='enquiryType'
												data-msg='Please select enquiry type'
											>
												<option></option>
												<option>select 1</option>
												<option>select 2</option>
											</select>
										</div>
									</div>
									<div className='form-group'>
										<label className='label'>
											Full Name
										</label>
										<input
											type='text'
											className='form-control'
											id='fname'
											name='fullName'
											placeholder='Type full name'
											required
											data-msg='Please enter full name'
										/>
									</div>
									<div className='form-group'>
										<label className='label'>
											Email Address
										</label>
										<input
											type='text'
											className='form-control'
											id='e-mail'
											name='email'
											placeholder='Type email address'
											// data-rule-validEmail='true'
											// data-msg-validEmail='Please enter correct email'
											data-msg='Please enter email'
											required
										/>
									</div>
									<div className='form-group'>
										<label className='label'>
											Your Message
										</label>
										<input
											type='text'
											className='form-control'
											id='message'
											name='message'
											placeholder='Type your message'
											required
											data-msg='Please enter message'
										/>
									</div>
									<div className='checkbox-group'>
										<div className='form-group checkBox-wrapper'>
											<input
												className='styled-checkbox form-control'
												id='accept-terms'
												type='checkbox'
												value='I accept the Terms of use'
												required
												name='acceptTerms'
											/>
											<label htmlFfor='accept-terms'>
												I accept the Terms of use
											</label>
										</div>
										<div className='form-group checkBox-wrapper'>
											<input
												className='styled-checkbox form-control'
												id='accept-policy'
												type='checkbox'
												value='I accept the Privacy Policy'
												required
												name='acceptPolicy'
											/>
											<label htmlFfor='accept-policy'>
												I accept the Privacy Policy
											</label>
										</div>
									</div>
									<div className='form-btn'>
										<button
											type='submit'
											aria-label='submit'
											className='btn btn-primary'
										>
											Sign Up
										</button>
									</div>
								</form>
							</div>
						</div>
						<div className='sec-img'>
							<svg
								width='795'
								height='875'
								viewBox='0 0 795 875'
								fill='none'
								// xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M416.628 180.5H645V485.001L255.872 874.001H27.5V569.498L416.628 180.5Z'
									stroke='url(#paint0_linear_2701_2142)'
								/>
								<clipPath id='signUpImg'>
									<path
										// fill-rule='evenodd'
										// clip-rule='evenodd'
										d='M795 0V265.484L456.263 604.109H257V338.623L595.737 0H795ZM326.192 20V180.934L120.815 386.205H0V225.27L205.378 20H326.192Z'
										fill='black'
									/>
								</clipPath>
								<image
									className='objectfit lozad clip-svg--height'
									href='/assets/img/bg/topic-img3.png'
									x='0'
									y='0'
									width='100%'
									style={{ clipPath: 'url(#signUpImg)' }}
								></image>
								<defs>
									<linearGradient
										id='paint0_linear_2701_2142'
										x1='27'
										y1='874.5'
										x2='645.5'
										y2='874.5'
										gradientUnits='userSpaceOnUse'
									>
										<stop /* stop-color='#9900E0' 8 */ />
										<stop
											offset='1' /*  stop-color='#06FFF8' */
										/>
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GetInTouch;
