import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Projects = () => {

    const diabetesGithubLink = 'https://github.com/MaciejKlonicki/Diabetes-Forum';
    const webserviceGithubLink = 'https://github.com/MaciejKlonicki/webservice';
    const airportGithubLink = 'https://github.com/DKorb/AirlineManagementApp';
    const chessGithubLink = 'https://github.com/MaciejKlonicki/Chess';

    const handleOpenGitHubForDiabetes = () => {
        window.open(diabetesGithubLink, '_blank');
    };

    const handleOpenGitHubForWebservice = () => {
        window.open(webserviceGithubLink, '_blank');
    };

    const handleOpenGitHubForAirport = () => {
        window.open(airportGithubLink, '_blank');
    }

    const handleOpenGitHubForChess = () => {
        window.open(chessGithubLink, '_blank');
    };

    return (
        <div className="projects">
            <h1>My Projects</h1>
            <p>
                A programming language is for thinking about programs, <br />
                not for expressing programs you’ve already thought of. <br />
                It should be a pencil, not a pen.
            </p>
            <Grid container spacing={2} style={{ marginBottom: "70px", marginLeft: -20, marginRight: 10 }}>
                <Grid item xs={12} sm={3} style={{ display: 'flex' }}>
                    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image="/images/diabetes.png"
                            title="diabetes forum"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Diabetes Forum
                            </Typography>
                            <Typography gutterBottom component="div">
                                Forum is provided for people with diabetes diseases.
                                Contains all the information you need to know about diabetes like basics, equipment, nutrition, daily life, complications, helplines and more.
                                Application provides REST API that may be used to log in or register users account with JSON Web Token.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={handleOpenGitHubForDiabetes}>Github</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} style={{ display: 'flex' }}>
                    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image="/images/webservice.png"
                            title="webservice"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Web service
                            </Typography>
                            <Typography gutterBottom component="div">
                                The application is implemented to simulate websites such as blogs.
                                Features: <br />
                                - <b>Authenticate</b> provided with Spring Security - Registartion, Login and Logout <br />
                                - <b>Post Management</b> CRUD operations on post dependent on the user role <br />
                                - <b>Sorting and filtering posts</b><br />
                                - <b>Rating Posts Management</b> CRUD operations on posts rating dependent on the user role <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={handleOpenGitHubForWebservice}>Github</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} style={{ display: 'flex' }}>
                    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image="/images/airport.png"
                            title="airport"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Airport
                            </Typography>
                            <Typography gutterBottom component="div">
                                Simulation of airport website.
                                Features: <br />
                                - <b>Registartion, Login and Logout</b>, <br />
                                - <b>CRUD operations on: </b> airports, flights and tickets, <br />
                                - <b>Access to certain operations is only possible for users with the appropriate role</b>, <br />
                                - <b>Ability to generate ticket to pdf. file</b>, <br />
                                - <b>Securing the application against unwanted user actions.</b> <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={handleOpenGitHubForAirport}>Github</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} style={{ display: 'flex' }}>
                    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image="/images/chess.png"
                            title="chess"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Chess
                            </Typography>
                            <Typography gutterBottom component="div">
                                Classic chess game created in Java and SWING for 2 players - no AI implemented.
                                Game features: <br />
                                - <b>turns</b>, <br />
                                - <b>valid moves for each</b>, <br />
                                - <b>possibility of capturing pawns</b>, <br />
                                - <b>removing figurates from the board</b>, <br />
                                - <b>winning possibility</b>

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={handleOpenGitHubForChess}>Github</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Projects;