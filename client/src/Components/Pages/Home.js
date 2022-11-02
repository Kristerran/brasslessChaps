import React from 'react';
// import Container from '@mui/material/Container';
import {
  BrowserRouter,
  Route,
  Routes,
  Link as RouterLink,
} from 'react-router-dom';
import Particles from './Particles';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
} from '@mui/material';

const Home = () => {
  return (
    <Container
      disableGutters={true}
      sx={{
        minWidth: '100%',
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Particles></Particles>
      <Card
        sx={{ background: 'none', borderRadius: '0', position: 'relative' }}
      >
        <CardMedia
          sx={{ background: '#BEBEBE80' }}
          component="img"
          image="../public/images/Adventurnal Logo With Text.svg"
          alt="Badly placed logo"
        />
        <div style={{ position: 'relative' }}>
          <div class="custom-shape-divider-top-1659224291">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <CardContent>
          <Typography
            variant="h5"
            compontnt="div"
            color="lightGrey"
            sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            WELCOME TO ADVENTURNAL
          </Typography>
          <Typography
            variant="body1"
            color="lightGrey"
            sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            your tabletop campaign journal, upgraded.
          </Typography>
          <Typography
            variant="body2"
            color="lightGrey"
            sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            We aim to provide a location for all your record keeping, helping
            you manage your characters. Keep a personal account of your sessions
            for you to refer in the downtime between sessions. Log details about
            your character and tag them for easier call backs.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={RouterLink}
            to="/signup"
            size="small"
            color="primary"
          >
            <Typography variant="h7" color="gold">
              Join Now!
            </Typography>
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          background: '#BEBEBE80',
          maxWidth: '50%',
          marginLeft: 'auto',
          marginRight: '5%',
          marginTop: '5%',
        }}
      >
        <CardMedia
          component="img"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkO1M6xnYe5H-C-HcJ-_PppG5MXcHwNs6ZPg&usqp=CAU"
          alt="Badly placed logo"
        />
        <CardContent>
          <Typography
            variant="h6"
            color="lightGrey"
            sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            Create a Character
          </Typography>
          <Typography
            variant="body1"
            color="lightGrey"
            sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            with our built in character editor!
          </Typography>
          <Typography
            variant="body2"
            color="lightGrey"
            sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            Add your character's name, race, and level. Use one of our custom
            generated character tokens, or add your own image.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={RouterLink}
            to="/signup"
            size="small"
            color="primary"
          >
            <Typography variant="h7" color="gold">
              Create your hero!
            </Typography>
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          background: '#BEBEBE80',
          maxWidth: '50%',
          marginRight: 'auto',
          marginLeft: '5%',
          marginTop: '5%',
        }}
      >
        <CardMedia
          component="img"
          image="data:image/jpeg;base64,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"
          alt="Badly placed logo"
        />
        <CardContent>
          <Typography
            variant="h6"
            color="lightGrey"
            sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            Write your journal
          </Typography>
          <Typography
            variant="body1"
            color="lightGrey"
            sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            tell your story!
          </Typography>
          <Typography
            variant="body2"
            color="lightGrey"
            sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            Each Character can have many journals, useful to keep track of your
            latest session, build character backstory, or create fantastical
            encounters for your next campaign! Anything you can dream up, you
            can keep organized and ready at a moments notice.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={RouterLink}
            to="/signup"
            size="small"
            color="primary"
          >
            <Typography variant="h7" color="gold">
              Craft your story!
            </Typography>
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          background: '#BEBEBE80',
          maxWidth: '50%',
          marginLeft: 'auto',
          marginRight: '5%',
          marginTop: '5%',
        }}
      >
        <CardMedia
          component="img"
          image="https://esports.uky.edu/sites/default/files/2022-02/rjgxllatvbbhyno.hero_.jpg"
          alt="Badly placed logo"
        />
        <CardContent>
          <Typography
            variant="h6"
            color="lightGrey"
            sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            Organize your sessions
          </Typography>
          <Typography
            variant="body1"
            color="lightGrey"
            sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            with your journal's chapter system!
          </Typography>
          <Typography
            variant="body2"
            color="lightGrey"
            sx={{ filter: 'drop-shadow(5px 5px 4px #000000)' }}
          >
            Every story has a begining, middle, and end. Keep yours organized
            with chapters. Track sessions, recover key information from previous
            encounters, and read through your party's memories before your next
            meeting.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={RouterLink}
            to="/signup"
            size="small"
            color="primary"
          >
            <Typography variant="h7" color="gold">
              Tell your tale!
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Home;
