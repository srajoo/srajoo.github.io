import { useMemo} from 'react';

import { 
    Grid, Typography, Box, styled, Paper, Card,
    CardActionArea, CardMedia,
    CardContent
} from '@mui/material';
import { items } from '../constants/KnowledgeBase';

import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import GridViewIcon from '@mui/icons-material/GridView';
import {
    Description,
    Security,
    Architecture,
    SportsEsports,
    ShowChart,
    TextFields,
    Restaurant,
    SmartToy
} from '@mui/icons-material';

const iconMap = {
    Description,
    FolderSpecialIcon,
    VolunteerActivismIcon,
    Security,
    Architecture,
    GridViewIcon,
    ShowChart,
    TextFields,
    Restaurant,
    SmartToy
};


const Item = styled(Paper)(({  }) => ({
    textAlign: 'center',
    boxShadow: 'none',
    background: 'transparent',
    opacity: 0.7,
    borderRadius:'0.75rem',

  }));

function Body(){
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

    const handleItemClick = (url) => {
        if (url.startsWith('http')) {
            window.open(url, '_blank');
        } else {
            window.open(url, '_blank');
        }
    };

    


    return(
        <>
            <Box
                sx={{
                    //background: "rgb(255, 255, 255)",
                    
                    padding: '0 2rem 1rem 2rem'
                }}
            >
            <Grid container gap={2}>
         
                    <Item className="fadeInUp" style={trail[3]} 
                        sx={{
                            flex: { xs: "1 1 100%", md: "1 1 calc(33.333% - 16px)" },
                            width: { xs: '50%'},
                            
                           
                          }}
                    >
                        <Card sx={{ 
                            border: "5px solid #930560",
                            borderRadius: '0.75rem',
                            background: "#930560",
                            //minHeight: '530px'
                           
                        }}>
                        
                            <Typography gutterBottom variant="h6" component="div"
                                color="white"
                            >
                                    Solutions Architect | FullStack Developer | Tech Evangelist
                            </Typography>
                            <CardMedia
                            component="img"
                        
                            image="/avatar.png"
                            alt="Sandra Rajoo"
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row'}
                                }}
                            >
                            <div className='music-player'>
                                        <div className='icon'>
                                            <img src="/insta.png"/>
                                        </div>
                                        <div className='track'>
                                            <div className='artist'>On Repeat </div>
                                            <div className='song'>
                                                <a href="https://www.instagram.com/share/_pODKtAky" target='_blank'>
                                                    FUNEMPLOYED | SKIVINNIE, 11EVEN
                                                </a>
                                            </div>
                                        </div>
                            </div>

                            

                            
                    </Box>
                            
                        
                        </Card>
                    </Item>
                   
           
                    
        
                    <Item className="fadeInUp" style={trail[4]}
                    sx={{
                        flex: { xs: "1 1 100%", md: "1 1 calc(33.333% - 16px)" },
                      }}
                      >
                        <Card
                            sx={{
                                borderRadius: '0.75rem',
                            }}
                        >

                            <CardContent>
                                <Typography className='title' sx={{textAlign: 'left', fontSize: '1.5rem'}}>
                                    Problem Solving as a Service
                                </Typography>
                                <ul>
                                    <li>
                                    <span style={{color: '#930560', fontWeight: '900'}}>Optimization-Driven Architecture:</span> Systems with a focus on space complexity optimizations 
                                   </li>
                                   <li>
                                   <span style={{color: '#930560', fontWeight: '900'}}>Human + System Efficiency:</span> Optimize towards O(1) decision complexity.
                                    </li>
                                    <li>
                                    <span style={{color: '#930560', fontWeight: '900'}}>Data-Driven Problem Solving: </span> Interdisciplinary debugging and root-cause analysis after accurate problem statement definition.

                                    </li>
                                    <li>
                                    <span style={{color: '#930560', fontWeight: '900'}}>CL/CI/CD Pipelines: </span> Continuous Learning / Continuous Improvement / Continuous Delivery

                                    </li>
                                </ul>

                                <Typography className='title' sx={{textAlign: 'left', fontSize: '1.5rem'}}>
                                   Software as a Solution (In Pipeline)
                                </Typography>
                                <ul>
                                    <li>
                                    Unified Data Platform  + Storage Solutions for Enterprise

                                    </li>
                                    <li>
                                    Breast Cancer SubType Prediction Models using Symbolic Reasoning llms
                                    </li>
                                    <li>
                                    Interprtable Bias Detection in LLM outputs using structural decision trees
                                    </li>
                                
                                </ul>

                            </CardContent>

                        </Card>
                    </Item>

                    <Item
                        sx={{
                            width: '31%',
                            background: "#fff",
                            flex: { xs: "1 1 100%", md: "1 1 calc(33.333% - 16px)" },
                        }}
                        className="fadeInUp" 
                        style={trail[5]}


                    >
                    <div className="showcase-block">
                        <div className="showcase-inner">
                            <Typography 
                                gutterBottom 
                                variant="h6" 
                                component="div"
                                color="white"
                                sx={{
                                    background: "#930560",
                                    padding: '1rem',
                                    textAlign: 'center'
                                }}
                            >
                                Knowledge Base
                            </Typography>
                            
            <Box sx={{ padding: '1rem' }}>
                <Grid container spacing={2}>
                    {items && items.length > 0 && items.map((item, index) => {
                        const IconComponent = iconMap[item.icon];
                        return (
                            <Grid item xs={6} sm={4} md={3} key={index}>
                                <Card 
                                    sx={{   
                                        minHeight: 120,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        boxShadow: 'none',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            //boxShadow: 3
                                        }
                                    }}
                                >
                                    <CardActionArea
                                        onClick={() => handleItemClick(item.url)}
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: 1
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                height: '100%',
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            <IconComponent 
                                                sx={{ 
                                                    fontSize: 40, 
                                                    color: '#930560',
                                                    mb: 1,
                                                    flexShrink: 0
                                                }} 
                                            />
                                            <Typography 
                                                variant="caption" 
                                                component="div"
                                                sx={{
                                                    fontWeight: 500,
                                                    lineHeight: 1.2,
                                                    color: '#333'
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </div>
    </div>
</Item>


                   
            
         
          
            </Grid>

        </Box>

        </>
        
    );
}

export default Body;