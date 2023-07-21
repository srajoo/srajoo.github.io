import {useMemo} from 'react';
import { animated } from 'react-spring';
import { algos } from '../constants/Algorithms';

function Learning() {
    const trail = useMemo(() => {
        const styles = [];
    
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((element, index) => {
            styles.push({
                animationDelay: `${index * 500}ms`,
            });
            return null;
        });
        return styles;
    }, []);

   
    return(
        <div id="learn">
            <animated.h1 className="intro-heading">
                <span slot="title" className="intro-main-span">
                    <span className="intro-main-span holder">
                        <span className="holder-content intro-main-span fadeInUp" style={trail[9]}>
                            Algorithms
                            <span className='stars project right intro-main-span'>
                                <figure className='star-fig'>
                                    <img src='/star.svg' className='star-fig skip loaded' />
                                </figure>
                            </span>
                           
                        </span>
                    </span>
                </span>
            </animated.h1>

            <div className='showcase-holder'>
                <div className='showcase fadeInUp '  style={trail[10]}> 
                    {
                        algos && algos.map((algo, index) => {
                            return (
                                <a className='showcase-block' target='_blank' href={algo?.link} key={index}>
                                    <div className='showcase-inner'>
                                        <div className='deets'> 
                                            <div className='title'>
                                                {algo?.title}
                                            </div>
                                            <span className='description'>
                                                <span className="lang">Language:</span>
                                                {algo?.language}
                                            </span>
                                            <span className='description'>
                                                <span className="lang">Tools:</span>
                                                {algo?.tools}
                                            </span>
                                            <span className='description'>
                                                <span className="lang">Algorithms:</span>
                                                    <ul>
                                                    {algo?.heading.map((head, index) => {
                                                        return (
                                                            <li key={index}>{head}</li>
                                                        );
                                                    })} 
                                                    </ul>
                                                
                                            </span>

                                        </div>

                                        <div className='shot-holder'>
                                            <div className='shot'>
                                                <figure>
                                                    <img src={algo?.image} width="100" height="100"/>
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

export default Learning;