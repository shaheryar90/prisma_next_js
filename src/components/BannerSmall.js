import React from 'react';

const BannerSmall = () => {
	return (
		<>
			<div className='sec-banner-small' data-aos='fade-up'>
				<div className='container container-expanded'>
					<div className='banner-wrapper'>
						<div className='banner-img'>
							<img
								src='/assets/img/bg/sec-bg.png'
								className='banner-desktop'
							/>
							<img
								src='/assets/img/bg/sec-bg-mbl.png'
								className='banner-mbl'
							/>
							<div className='banner-content'>
								<h3 className='heading5 blue-light'>
									8 WEEKS OF NON-STOP ACTION
								</h3>
								<h3 className='heading3'>
									CROWNING CHAMPIONS.
								</h3>
								<h3 className='heading3'>CREATING LEGENDS.</h3>
								<div className='sec-btn'>
									<a href='#' className='btn btn-primary'>
										Learn More
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BannerSmall;
