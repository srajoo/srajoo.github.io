import {useMemo} from 'react';
import { animated } from 'react-spring';
import { projects } from '../constants/Project';

function Project() {

    const trail = useMemo(() => {
        const styles = [];
    
        [0, 0, 0, 0, 0, 0, 0, 0, 0].map((element, index) => {
            styles.push({
                animationDelay: `${index * 500}ms`,
            });
            return null;
        });
        return styles;
      }, []);


    return (
        <div id="project">
            <animated.h1 className="intro-heading">
                <span slot="title" className="intro-main-span">
                    <span className="intro-main-span holder">
                        <span className="holder-content intro-main-span fadeInUp" style={trail[7]}>
                            Projects
                            <span className='stars project right intro-main-span'>
                                <figure className='star-fig'>
                                    <img src='/star.svg' className='star-fig skip loaded' />
                                </figure>
                            </span>
                           
                        </span>
                    </span>
                </span>
            </animated.h1>

            <animated.div className="wrapper fadeInUp sub-header" style={trail[7]}>     
                <p className='sub-header center'>
                    The front, the back, and everything in between!
                </p>
            </animated.div>

            <div className='showcase-holder'>
                <div className='showcase fadeInUp '  style={trail[8]}>
                {
                    projects && projects.map((project, index) => {
                        return (
                            <a className='showcase-block' target='_blank' href={project?.link} key={index}>
                                <div className='showcase-inner'>
                                    <div className='deets'> 
                                        <div className='title'>
                                            {project?.title}
                                        </div>
                                        <span className='description'>
                                            {project?.description}
                                        </span>
                                        <span className='description'>
                                            <span className="lang">Language:</span>
                                            {project?.language}
                                        </span>
                                        <span className='description'>
                                            <span className="lang">Tools:</span>
                                            {project?.tools}
                                        </span>
                                    </div>

                                    <div className='shot-holder'>
                                        <div className='shot'>
                                            <figure>
                                                <img src={project?.image} width="100" height="100"/>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        );
                    })
                }
                </div>
            </div>
    </div>
        
        


    );
}

export default Project;