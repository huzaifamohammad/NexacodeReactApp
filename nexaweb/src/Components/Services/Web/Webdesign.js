import React, { useEffect } from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia, Paper, Box, Button } from "@mui/material";
import { Web, Build, Devices, AutoAwesome } from '@mui/icons-material';
import AOS from "aos";
import "aos/dist/aos.css";

const Webdesign = () => {
    // Initialize AOS with continuous scroll animations
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-out-cubic', // Easing effect
            delay: 200, // Delay before animation starts
            once: false, // Set to false to allow animations on every scroll
            mirror: true, // Trigger animation on both scrolling up and down
        });
    }, []);

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            {/* Hero Section */}
            <Paper 
                elevation={8} 
                sx={{ 
                    p: 8, 
                    mb: 6, 
                    background: "linear-gradient(to right, #e3f2fd, #bbdefb)", 
                    borderRadius: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                }}
                data-aos="fade-up"
            >
                {/* Hero Text with Overlay */}
                <Box 
                    sx={{ 
                        position: "absolute", 
                        top: 0, 
                        left: 0, 
                        right: 0, 
                        bottom: 0, 
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,0,0,0.2))",
                        zIndex: 1,
                    }} 
                />
                <Typography 
                    variant="h3" 
                    component="h1" 
                    align="center" 
                    fontWeight="bold" 
                    gutterBottom 
                    sx={{ 
                        position: 'relative',
                        zIndex: 2,
                        animation: "bounce 1.5s infinite", 
                        "@keyframes bounce": {
                            "0%, 100%": { transform: "translateY(0)" },
                            "50%": { transform: "translateY(-10px)" },
                        },
                        color: '#0d47a1',
                    }}
                >
                    Web Design and Development Blog
                </Typography>
                <Typography 
                    variant="h6" 
                    align="center" 
                    color="textSecondary"
                    sx={{ color: '#424242', zIndex: 2 }}
                    gutterBottom
                >
                    Explore insights, trends, and tips on web design and development.
                </Typography>

                {/* Hero Image with Overlay */}
                <Box 
                    sx={{
                        position: 'relative',
                        mt: 4,
                        mb: 4,
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0))",
                            borderRadius: 4,
                            zIndex: 1
                        }
                    }}
                    data-aos="zoom-in"
                >
                    <CardMedia
                        component="img"
                        image="/Images/Web design 2.jpg"
                        alt="Web Design and Development Blog"
                        sx={{
                            height: { xs: 250, sm: 450 },
                            borderRadius: 4,
                            position: 'relative', // Ensures it's under the overlay
                            zIndex: 0,
                            transition: "transform 0.5s ease",
                            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.25)",
                            "&:hover": {
                                transform: "scale(1.08)"
                            }
                        }}
                    />
                </Box>

                {/* Call to Action Button */}
                <Box textAlign="center" data-aos="fade-up" data-aos-delay="600">
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            px: 4,
                            py: 1.5,
                            borderRadius: 3,
                            backgroundColor: "#1976d2",
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                                backgroundColor: "#1565c0",
                                transform: "scale(1.05)",
                                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)"
                            }
                        }}
                    >
                        Learn More
                    </Button>
                </Box>
            </Paper>

            {/* Blog Content in Cards */}
            <Grid container spacing={6}>
                {/* Card 1 */}
                <Grid item xs={12} sm={6}>
                    <Card 
                        elevation={8}
                        sx={{ 
                            p: 4,
                            background: "linear-gradient(135deg, #e0f7fa, #80deea)", 
                            color: "#004d40",
                            borderRadius: 4,
                            transition: "transform 0.4s ease-in-out", 
                            "&:hover": { 
                                transform: "scale(1.06)", 
                                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)" 
                            }
                        }}
                        data-aos="fade-right"
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Web sx={{ fontSize: 45, mr: 2, color: '#004d40' }} />
                            <Typography variant="h5" component="h2" gutterBottom>
                                Transforming the Digital Landscape
                            </Typography>
                        </Box>
                        <Typography variant="body1" color="textSecondary">
                            Web design and development have become the cornerstone of every business's online presence. 
                            Modern web design trends are essential for engaging visitors and building a professional platform.
                        </Typography>
                    </Card>
                </Grid>

                {/* Card 2 */}
                <Grid item xs={12} sm={6}>
                    <Card 
                        elevation={8}
                        sx={{ 
                            p: 4,
                            background: "linear-gradient(135deg, #fce4ec, #f06292)", 
                            color: "#880e4f",
                            borderRadius: 4,
                            transition: "transform 0.4s ease-in-out", 
                            "&:hover": { 
                                transform: "scale(1.06)", 
                                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)" 
                            }
                        }}
                        data-aos="fade-left"
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Build sx={{ fontSize: 45, mr: 2, color: '#880e4f' }} />
                            <Typography variant="h5" component="h2" gutterBottom>
                                Custom Websites that Deliver
                            </Typography>
                        </Box>
                        <Typography variant="body1" color="textSecondary">
                            At NexaCode Solution, we specialize in crafting custom websites that are optimized for SEO 
                            and performance, combining the latest technologies with a deep understanding of user behavior.
                        </Typography>
                    </Card>
                </Grid>

                {/* Card 3 */}
                <Grid item xs={12} sm={6}>
                    <Card 
                        elevation={8}
                        sx={{ 
                            p: 4,
                            background: "linear-gradient(135deg, #ffecb3, #ffca28)", 
                            color: "#e65100",
                            borderRadius: 4,
                            transition: "transform 0.4s ease-in-out", 
                            "&:hover": { 
                                transform: "scale(1.06)", 
                                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)" 
                            }
                        }}
                        data-aos="fade-right"
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Devices sx={{ fontSize: 45, mr: 2, color: '#e65100' }} />
                            <Typography variant="h5" component="h2" gutterBottom>
                                Responsive Design & SEO Optimization
                            </Typography>
                        </Box>
                        <Typography variant="body1" color="textSecondary">
                            From responsive design to SEO optimization, our web development services ensure that your business 
                            stays ahead in the digital world, whether you need e-commerce or UI/UX design.
                        </Typography>
                    </Card>
                </Grid>

                {/* Card 4 */}
                <Grid item xs={12} sm={6}>
                    <Card 
                        elevation={8}
                        sx={{ 
                            p: 4,
                            background: "linear-gradient(135deg, #e1bee7, #ab47bc)", 
                            color: "#4a148c",
                            borderRadius: 4,
                            transition: "transform 0.4s ease-in-out", 
                            "&:hover": { 
                                transform: "scale(1.06)", 
                                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)" 
                            }
                        }}
                        data-aos="fade-left"
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <AutoAwesome sx={{ fontSize: 45, mr: 2, color: '#4a148c' }} />
                            <Typography variant="h5" component="h2" gutterBottom>
                                Innovative Web Design Services
                            </Typography>
                        </Box>
                        <Typography variant="body1" color="textSecondary">
                            Ready to transform your website? Contact NexaCode Solution for innovative web design and development 
                            services tailored to your specific needs.
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Webdesign;
