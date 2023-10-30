import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Projects = () => {

    const diabetesGithubLink = 'https://github.com/MaciejKlonicki/Diabetes-Forum';
    const chessGithubLink = 'https://github.com/MaciejKlonicki/Chess';
    const snakeGithubLink = 'https://github.com/MaciejKlonicki/Snake';
    const libraryGithubLink = 'https://github.com/MaciejKlonicki/Library';

    const handleOpenGitHubForDiabetes = () => {
        window.open(diabetesGithubLink, '_blank');
    };

    const handleOpenGitHubForChess = () => {
        window.open(chessGithubLink, '_blank');
    };

    const handleOpenGitHubForSnake = () => {
        window.open(snakeGithubLink, '_blank');
    };

    const handleOpenGitHubForLibrary = () => {
        window.open(libraryGithubLink, '_blank');
    }

    return (
        <div className="projects">
            <h1>My Projects</h1>
            <p>
                A programming language is for thinking about programs, <br />
                not for expressing programs you’ve already thought of. <br />
                It should be a pencil, not a pen.
            </p>
            <Grid container spacing={2} style={{marginBottom: "70px", marginLeft: -20, marginRight: 10}}>
                <Grid item xs={12} sm={3} style={{ display: 'flex' }}>
                    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
                        <CardMedia
                            sx={{ height: 140 }}
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
                            sx={{ height: 140 }}
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
                <Grid item xs={12} sm={3} style={{ display: 'flex' }}>
                    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/snake.png"
                            title="snake game"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Snake
                            </Typography>
                            <Typography gutterBottom component="div">
                                A version of the classic Snake game implemented in Java using JAVA SWING.
                                Game features: <br />
                                - <b>game ending scenarios</b>, <br />
                                - <b>counting points</b>, <br />
                                - <b>eating apple 1 point, bananas 2 points</b>, <br />
                                - <b>banana position changing in 1 to 10 seconds</b> <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={handleOpenGitHubForSnake}>Github</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} style={{ display: 'flex' }}>
                    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/library.png"
                            title="library"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Library
                            </Typography>
                            <Typography gutterBottom component="div">
                                Study project - Library for worker.
                                Features: <br />
                                - <b>add the book</b>, <br />
                                - <b>delete the book</b>, <br />
                                - <b>sell the book</b>, <br />
                                - <b>find the book</b>, <br />
                                - <b>wallet</b>, <br />
                                - <b>client and server connection</b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={handleOpenGitHubForLibrary}>Github</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Projects;