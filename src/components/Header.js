import {memo, useMemo, useState, useEffect} from 'react';
import { animated } from 'react-spring';
import classnames from 'classnames';
import { Grid, Stack, Typography, Chip} from '@mui/material';

function Header () 
{
    const [scrollTop, setScrollTop] = useState(false);
    const [aboutActive, setAboutActive] = useState(true);
    const [projectActive, setProjectActive] = useState(false);
    const [learnActive, setLearnActive] = useState(false);
    
    useEffect(() => {
        const handleScroll = (event) => {
            
            if (window.scrollY > 5){
                setScrollTop(true);
            }
            else {
                setScrollTop(false);
            }

            if (window.scrollY < 932){
                setProjectActive(false);
                setAboutActive(true);
                setLearnActive(false);
            }
            else if(window.scrollY >= 932 && window.screenY < 2540){
                setProjectActive(true);
                setAboutActive(false);
                setLearnActive(false);
            }
            else if (window.scrollY >= 2540) {
                setProjectActive(false);
                setAboutActive(false);
                setLearnActive(true);
            }

           
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const trail = useMemo(() => {
        const styles = [];
    
        [0, 0, 0, 0, 0, 0, 0].map((element, index) => {
            styles.push({
                animationDelay: `${index * 500}ms`,
            });
            return null;
        });
        return styles;
      }, []);
    
    return(
        
        <div>
            <header>
                <animated.nav className='fadeInUp' style={trail[1]} sticky="top" >
                    <ul id="nav_bar" className={classnames('main', {
                        blur: scrollTop,
                    })}>
                        <li className={classnames({
                            active: aboutActive
                        })}>
                            <a href="#about" className="main-link">About</a>
                        </li>
                        <li className={classnames({
                            active: projectActive
                        })}>
                            <a href="#project" className="main-link">Projects</a>  
                            
                        </li>
                        <li className={classnames({
                            active: learnActive
                        })}>
                            <a href="#learn" className="main-link">Algorithms</a>  
                            
                        </li>
                        <li>
                            <a href="/Sandra_Rajoo.pdf" target='_blank' className="main-link">Resume</a>
                        </li>
                    </ul>
                </animated.nav>
            </header>
            <div id="about">
            <animated.h1 className="intro-heading">
                <span slot="title" className="intro-main-span">
                    <span className="intro-main-span holder">
                        <span className="holder-content intro-main-span fadeInUp" style={trail[2]}>
                            Hi! I'm Sandra!
                            <span className='stars right intro-main-span'>
                                <figure className='star-fig'>
                                    <img src='/star.svg' className='star-fig skip loaded' />
                                </figure>
                            </span>
                            <span className='stars left intro-main-span'>
                                <figure className='star-fig'>
                                    <img src='/star.svg' className='star-fig skip loaded' />
                                </figure>
                            </span>
                        </span>
                    </span>
                </span>
            </animated.h1>

            <animated.h2 className="intro-sub-heading">
                    <span slot="title" className="intro-main-span">
                        <span className="intro-main-span holder"> 
                            <span className="holder-content intro-main-span fadeInUp" style={trail[3]}>
                                Full Stack | Big Data | Artist | USC '23
                            </span>
                        </span>
                    </span>
            </animated.h2>
            <animated.div className="intro-social fadeInUp"  style={trail[4]}>
				<div className="social-icons">
					<a href="https://www.linkedin.com/in/sandrarajoo/" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
							<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
						</svg>
					</a>
					
				</div>
				<div className="social-icons">
					<a href="https://github.com/srajoo" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
							<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
						</svg>
					</a>
				</div>
				<div className="social-icons" target="_blank">
					<a href="mailto:rajoo@usc.edu">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
							<path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
							<path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
						</svg>
					</a>
				</div>
			</animated.div>

            <animated.div className="wrapper fadeInUp sub-header" style={trail[5]}>
                    <p className='sub-header center'>
                        I'm passionate about automation, 24 hour code challenges, and using data driven approaches to create positive social impact.
                    </p>
            </animated.div>

            <animated.div className="fadeInUp intro-deets" style={trail[6]} >
                <Grid container spacing={{ xs: 2}}  justifyContent="space-evenly">
                    <Grid xs={2} item className='d-content' alignItems="center">
                        <div className='image-content'>
                            <div className='image-holder'>
                                <figure >
                                    <img src='/avatar.png' height="360"  width="380"/>
                                </figure>
                            </div>
                            <div className='music-player'>
                            <div className='icon'>
                                <img src="/spotify.svg"/>
                            </div>
                            <div className='track'>
                                <div className='artist'>On Repeat </div>
                                <div className='song'>
                                    <a href="https://open.spotify.com/track/6537jhwnXegjdXhLqorbjE" target='_blank'>
                                        Always by Daniel Caesar feat. Summer Walker
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item  md={6} sm={12} className='info-blurb'>
                        <div className='blurb'>
                            <h2>I'm a leader who loves to innovate and learn. I do 24 code challenges where I pick up a new tech stack to learn.</h2>
                            <p>I'm a recent grad from the University of Southern California with a masters in Data Science and bachelors in Computer Science.</p>
                            <p>I have 3 years experience as a Software Engineer working with JavaScript and 3 years experience working 
                                with Python to build data driven projects. I've worked in front-end development, back-end development, machine learning, and data 
                                engineering. I'm proud to have worn many hats and have built a diverse skillset.
                            </p>

                            <h4> Tech Stack:</h4>
                            <ul>
                                <li>Programming: 
                                    <Stack 
                                        direction={{ xs: 'column', sm: 'row' }}
                                        spacing={1}
                                    >
                                        <Chip label="Python" variant="outlined"/>
                                        <Chip label="JavaScript" variant="outlined" />
                                        <Chip label="TypeScript" variant="outlined" />
                                        <Chip label="SQL" variant="outlined" />
                                        <Chip label="HTML/CSS" variant="outlined" />
                                        <Chip label="R" variant="outlined" />
                                    </Stack>
                                </li>
                                <li>Data Storage:
                                    <Stack 
                                        direction={{ xs: 'column', sm: 'row' }}
                                        spacing={1}
                                    >
                                        <Chip label="MySQL" variant="outlined"/>
                                        <Chip label="MongoDB" variant="outlined" />
                                        <Chip label="Firebase" variant="outlined" />
                                        <Chip label="S3" variant="outlined" />
                                        <Chip label="Dynamo DB" variant="outlined" />
                                    </Stack>
                                </li>
                                <li>Frameworks/Tools:
                                    <Stack 
                                        direction={{ xs: 'column', sm: 'row' }}
                                        spacing={1}
                                    >
                                        <Chip label="React" variant="outlined"/>
                                        <Chip label="Spark" variant="outlined"/>
                                        <Chip label="Slack" variant="outlined"/>
                                        <Chip label="D3.js" variant="outlined"/>
                                        <Chip label="Scikit-learn" variant="outlined"/>
                                        <Chip label="Flask" variant="outlined"/>
                                        <Chip label="NLTK" variant="outlined"/>
                                        <Chip label="VS Code" variant="outlined"/>
                                        <Chip label="Github" variant="outlined"/> 
                                    </Stack>

                                </li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>

            </animated.div>
            </div>
            
        </div>
        
        
            
            
        
    );
}

export default Header;