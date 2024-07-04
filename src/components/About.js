import React from 'react';

const About = () => {
	return (
		<>
			<div className='blog-wrapper' data-aos='fade-up'>
				<div className='postBox'>
					<div className='sec-img'>
						<svg
							version='1.1'
							id='Layer_1'
							xmlns='http://www.w3.org/2000/svg'
							xmlnsXlink='http://www.w3.org/1999/xlink'
							x='0px'
							y='0px'
							viewBox='0 0 225 363'
							style={{ enableBackground: 'new 0 0 225 363' }}
							xmlSpace='preserve'
						>
							<style>
								{`
      .st0{fill:none;stroke:url(#SVGID_1_);}
    `}
							</style>
							<linearGradient
								id='SVGID_1_'
								gradientUnits='userSpaceOnUse'
								x1='0.5'
								y1='188'
								x2='225'
								y2='188'
							>
								<stop
									offset='0'
									style={{ stopColor: '#9900E0' }}
								/>
								<stop
									offset='1.577058e-03'
									style={{ stopColor: '#9802E0' }}
								/>
								<stop
									offset='2.107204e-02'
									style={{ stopColor: '#8B19E2' }}
								/>
								<stop
									offset='4.339659e-02'
									style={{ stopColor: '#812BE4' }}
								/>
								<stop
									offset='7.030393e-02'
									style={{ stopColor: '#7938E5' }}
								/>
								<stop
									offset='0.1061'
									style={{ stopColor: '#753FE6' }}
								/>
								<stop
									offset='0.1872'
									style={{ stopColor: '#7441E6' }}
								/>
								<stop
									offset='0.2138'
									style={{ stopColor: '#6F4AE7' }}
								/>
								<stop
									offset='0.4236'
									style={{ stopColor: '#4A8AED' }}
								/>
								<stop
									offset='0.6145'
									style={{ stopColor: '#2DBCF2' }}
								/>
								<stop
									offset='0.7802'
									style={{ stopColor: '#18E1F5' }}
								/>
								<stop
									offset='0.9143'
									style={{ stopColor: '#0BF7F7' }}
								/>
								<stop
									offset='1'
									style={{ stopColor: '#06FFF8' }}
								/>
							</linearGradient>
							<polygon
								className='st0'
								points='109.6,13.5 1,123 1,362.5 28.4,362.5 224.5,166.6 224.5,13.5 '
							/>
							<clipPath id='aboutImg'>
								<polygon points='85.4,0 0,85.3 0,350 4.6,350 201,153.8 201,0 ' />
							</clipPath>
							<image
								className='objectfit lozad clip-svg--height'
								xlinkHref='assets/img/bg/audience-bg.png'
								x='0'
								y='0'
								width='100%'
								style={{ clipPath: 'url(#aboutImg)' }}
							/>
						</svg>
					</div>
					<div className='sec-content'>
						<p className='heading5 subtitle'>
							About Esports world cup
						</p>
						<h3 className='heading3 upperCase sec-title'>
							POWERING THE FUTURE OF ESPORTS
						</h3>
						<p className='sec-des'>
							The world’s largest annual esports competition – the
							Esports World Cup is a multi-genre, multi-title,
							multi-week tournament hosted by the Kingdom of Saudi
							Arabia.
						</p>
						<p className='sec-des'>
							Offering the largest prize pool in esports history,
							the Esports World Cup’s cross-game competition
							format rewards clubs’ performance, providing
							dedicated programs to take their growth to the next
							level.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
